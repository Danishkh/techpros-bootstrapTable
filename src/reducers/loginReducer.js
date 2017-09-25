import {LOGIN_IN,LOGIN_OUT} from "../actions/ActionTypes";

export default function loginReducer(state=false, action){
    switch (action.type) {
        case LOGIN_IN :
            console.log("LOGIN_IN Login action....")
            return Object.assign({},state,{isLoggedIn : true});

        case LOGIN_OUT :
            console.log("LOGIN_OUT Logout action....")
            return Object.assign({},state,{isLoggedIn : false});

        default:
            return state;
    }
}