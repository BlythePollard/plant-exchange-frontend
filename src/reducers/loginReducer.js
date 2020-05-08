import {LOGIN_USER} from '../actions/types'
import {ADD_PLANT} from '../actions/types'
import {FIND_OWNER} from '../actions/types'

const initialState = {
    user: {
        id: "",
        username: "",
        email: "",
        plants: []
    },
  }


export function loginReducer(state = initialState, action) {

    switch(action.type) {
        case LOGIN_USER: 
            return {
                user: action.payload
            }
        case ADD_PLANT:
            return {
                    ...state,
                    userPlants: [...state.user.plants, action.payload] //this is creating new piece, userPlants, rather than adding to user.plants
                }        
        case FIND_OWNER:
            return {

            }        
        default:
            return state    
    }
}