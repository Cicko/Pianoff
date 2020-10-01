import {
  createStore,
  applyMiddleware,
  StoreEnhancer,
  Store,
  Action,
} from 'redux'
import { install } from 'redux-loop'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../../app/store/rootReducer'
import authenticationMiddleware from './middlewares/authenticationMiddleware'

// Little fix for typescript linter
declare module 'redux' {
  export interface StoreCreator {
    <S, T>(
      reducer: EnhancedReducer<S, T>,
      preloadedState: S,
      enhancer: StoreEnhancer<S>
    ): Store<S>
  }
  interface EnhancedReducer<S, T> {
    <A extends Action>(state: S, action: A): T
  }
}

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 100,
})

const configureStore = () => {
  const store = createStore(
    // @ts-ignore
    rootReducer,
    composeEnhancers(
      install(),
      applyMiddleware(authenticationMiddleware),
      // applyMiddleware(validationMiddleware), // TODO: Add here more middlewares..
    )
  )
  return store
}

export default configureStore
