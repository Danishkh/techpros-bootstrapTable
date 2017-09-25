import * as types from '../actions/actionTypes'
import React from 'react'
import ResponsibilityForm from '../projectsComponents/resposibilityForm'

export default function newResponsibility (state = [], action){
    let i = 0
    switch (action.type){
        case types.ADDBUTTON:
            console.log(action.buttonString + " key for this form is: " + i )
            return  [...state,
            Object.assign({}, <ResponsibilityForm id={i}/> )]

        default:
            return state
    }
}