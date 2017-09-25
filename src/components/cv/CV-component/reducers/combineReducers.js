import {combineReducers} from 'redux'
import allConsultants from './consultantProfileReducer'
import consultant from './singleConsultantReducer'
import buttonString from './addResponsibilityFormReducer'
import data from './fetchReducer'


const combined = combineReducers({
    buttonString,
    allConsultants,
    consultant,
    data
})

export default combined
