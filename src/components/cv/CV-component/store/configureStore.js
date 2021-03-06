import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import combined from '../reducers/combineReducers'

export default function configureStore(initialState){
    return createStore(
    combined,
    initialState,
        applyMiddleware(thunk)
    )
}