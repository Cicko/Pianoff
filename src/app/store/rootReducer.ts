import { combineReducers } from 'redux-loop'
import { fetchReducer } from './reducers'

const combinedReducer = combineReducers({
  fetch: fetchReducer,
})

export default combinedReducer
