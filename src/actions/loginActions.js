import {LOGIN_IN,LOGIN_OUT} from "./ActionTypes";

/*
 * action creators
 */
export function loginAction(){
    console.log("loginAction");
    return {type: LOGIN_IN };
}

export function logoutAction(){
    console.log("logoutAction");
    return {type: LOGIN_OUT};
}

// export function loadLoginDispatch(){
//     return function(dispatch){
//         dispatch(login());
//     }
// }