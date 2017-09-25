import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function consultantProfileReducer(state = initialState.allConsultants, action) {
    switch (action.type) {
        case types.LOAD_CONSULTANTS_SUCCESS:
            return action.allConsultants

        case types.RECEIVED_CONSULTANT:
            return action.consultant

        default:
            return state;
    }
}