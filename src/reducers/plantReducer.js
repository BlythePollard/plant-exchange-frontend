import {FETCH_PLANTS} from '../actions/types'
import {ADD_PLANT} from '../actions/types'

export function plantReducer(state = {plants: []}, action) {
    switch(action.type) {
        case FETCH_PLANTS: 
            return {
                plants: action.payload
            }
        case ADD_PLANT:
            console.log(action)
            console.log(state)
            return {
                ...state,
                plants: [...state.plants, action.payload] //is this adding the plant to the larger list?
            }    
        default:
            return state    
    }
}

