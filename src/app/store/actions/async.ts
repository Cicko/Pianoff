import axios from 'axios'
import {
  buildUserRoute,
} from '../../config/routes'

const requestConfig = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    charset: 'UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
}

const getUser = (
    userId: string,
): (() => any) => () =>
  axios.get(
    buildUserRoute(userId),
    requestConfig
  )

export {
  getUser,
}
