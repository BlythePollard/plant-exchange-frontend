import {LOGIN_USER} from '../actions/types'

const initialState = {
    user: "",
  }

export function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER: 
            return {
                user: action.payload
            }
        default:
            return state    
    }
}