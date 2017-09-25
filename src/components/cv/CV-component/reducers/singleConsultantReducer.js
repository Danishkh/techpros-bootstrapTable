import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function singleConsultantReducer(state = initialState.consultant, action) {
    switch (action.type) {
        case types.RECEIVED_CONSULTANT:
            return action.consultant

        default:
            return state;
    }
}