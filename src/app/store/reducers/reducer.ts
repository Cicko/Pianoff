import { loop, Cmd } from 'redux-loop'
import {
  getUser,
} from '../actions/async'
import {
  USER_FETCH_INIT,
  USER_FETCH_SUCCESS,
  USER_FETCH_ERROR,
} from '../constants'
import {
  fetchUserError, fetchUserSuccess
} from '../actions/actions'

interface IState {
  user: {
    user: object;
    loading: boolean,
    error: object
  },
  language: string
}

const initialState: IState = {
  user: {
    user: null,
    loading: false,
    error: null,
  },
  language: 'english'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_INIT:
      return loop(
        { ...state, user: {
            user: null,
            loading: true,
            error: null,
        }},
        Cmd.run(getUser(action.customerId), {
          successActionCreator: fetchUserSuccess,
          failActionCreator: fetchUserError,
        })
      )

    case USER_FETCH_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          error: false,
          user: action.data,
        },
      }

    case USER_FETCH_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
        }
      }

    default:
      return state
  }
}

export default reducer
