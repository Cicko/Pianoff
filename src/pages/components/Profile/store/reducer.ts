/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 04.10.20 - 11:09
 **/

import initialState from './state'
import { loop, Cmd } from 'redux-loop'
import {
    VIDEOS_FETCH_INIT,
    VIDEOS_FETCH_SUCCESS,
    VIDEOS_FETCH_ERROR,
} from './constants'
import { getUser } from 'app/store/actions/async';
import { fetchUserError, fetchUserSuccess } from 'app/store/actions/actions';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case VIDEOS_FETCH_INIT:
            return loop(
                { ...state, videos: {
                        data: null,
                        loading: true,
                        error: null,
                    }},
                Cmd.run(getUser(action.customerId), {
                    successActionCreator: fetchUserSuccess,
                    failActionCreator: fetchUserError,
                })
            )
        case VIDEOS_FETCH_SUCCESS: {
            return {
                ...state,
                videos: {
                    data: action.data,
                    loading: false,
                    error: null,
                }
            }
        }

        case VIDEOS_FETCH_ERROR: {
            return {
                ...state,
                videos: {
                    error: action.error,
                    loading: false,
                    data: null,
                }
            }
        }
    }
}

export default reducer
