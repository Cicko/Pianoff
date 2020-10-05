/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 04.10.20 - 11:09
 **/
import {
    VIDEOS_FETCH_SUCCESS,
    VIDEOS_FETCH_ERROR,
} from './constants'

const videosFetchSuccess = (data) => ({
    type: VIDEOS_FETCH_SUCCESS,
    data,
})

const videosFetchError = (error) => ({
    type: VIDEOS_FETCH_ERROR,
    error,
})

export default {
    videosFetchSuccess,
    videosFetchError,
}
