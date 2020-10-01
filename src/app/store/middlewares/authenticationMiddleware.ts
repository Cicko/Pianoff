/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 23.09.20 - 15:35
 **/
import { AnyAction, Dispatch, Store } from 'redux'

const authenticationMiddleware = (store: Store) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  return next(action)
}

export default authenticationMiddleware
