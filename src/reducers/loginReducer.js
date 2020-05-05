import {LOGIN_USER} from '../actions/types'

const initialState = {
    username: "",
  }

export function loginReducer(state = initialState, action) {
    console.log(action)

    switch(action.type) {
        case LOGIN_USER: 
            return {
                user: action.payload
            }
        default:
            return state    
    }
}