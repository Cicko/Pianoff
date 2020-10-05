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
import { USER_FETCH_INIT } from '../../../app/store/constants';
import { getUser } from '../../../app/store/actions/async';
import { fetchUserError, fetchUserSuccess } from '../../../app/store/actions/actions';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case VIDEOS_FETCH_INIT:
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
    }
}
