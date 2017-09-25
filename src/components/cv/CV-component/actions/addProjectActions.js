import * as types from './actionTypes'

export function addResponsibilityForm(){
    return {
        type: types.ADDBUTTON, buttonString: 'FORM_ADDED'
    }
}
//Action for alle konsulenter i RestAPI
export function loadAllConsultantsSuccess(jsonData) {
    return {
        type: types.LOAD_CONSULTANTS_SUCCESS,
        allConsultants: jsonData
    }
}

//Action for en gitt konsulent
export function receivedConsultant(jsonData) {
    return {
        type: types.RECEIVED_CONSULTANT,
        consultant: jsonData
    }
}

//Fetch data from API ----

//Fetch all consultants from API
export function fetchConsultants() {
    return dispatch => {
        fetch("https://techpros-cv-srv-dev.herokuapp.com/consultants/listall").then(response => {
            return response.json()
        })
            .then(jsonData => {
                dispatch(loadAllConsultantsSuccess(jsonData))
            })
            .catch(error =>
                dispatch({type: 'FETCHCONSULTANTSFAILED', error})
            );
    };
}

//Fetch one consultant
export function fetchOneConsultant() {
    return dispatch => {
        fetch("https://techpros-cv-srv-dev.herokuapp.com/consultants/consultant/toreMan@gohome.com/").then(response => {
            return response.json()
        })
            .then(jsonData => dispatch(receivedConsultant(jsonData)))
            .catch(error =>
                dispatch({type: 'FETCHCONSULTANTSFAILED', error})
            );
    };
}
