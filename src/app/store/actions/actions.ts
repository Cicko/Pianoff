import {
    USER_FETCH_INIT,
    USER_FETCH_ERROR,
    USER_FETCH_SUCCESS
} from '../constants'

const fetchUser = (userId) => ({
  type: USER_FETCH_INIT,
  userId,
})

const fetchUserSuccess = (data) => ({
  type: USER_FETCH_SUCCESS,
  data,
})

const fetchUserError = (error) => ({
  type: USER_FETCH_ERROR,
  error,
})

export {
    fetchUser,
    fetchUserError,
    fetchUserSuccess,
}
