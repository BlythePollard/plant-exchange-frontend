import {LOGIN_USER} from '../actions/types'
import {ADD_PLANT} from '../actions/types'
import {DELETE_PLANT} from '../actions/types'

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
            let plantsArray = state.user.plants
            plantsArray = plantsArray.concat(action.payload)
            let newUser = Object.assign({}, state.user)
            newUser.plants = plantsArray
            return {
                    ...state,
                    user: newUser
                }        
        case DELETE_PLANT: 
            return {

                }

        default:
            return state    
    }
}
