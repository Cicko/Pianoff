/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 28.09.20 - 14:20
 **/

let BASE_ROUTE = process.env.USE_LOCAL_BACKEND
    ? 'http://localhost:8080/api/'
    : `backend server bro`

const buildUserRoute = (userId: string): string =>
    BASE_ROUTE.concat(`${userId}`)


export {
    buildUserRoute,
}
