import {FETCH_PLANTS} from '../actions/types'

export function plantReducer(state = {
    login: [],
    plants: [],}, action) {
    switch(action.type) {
        case FETCH_PLANTS: 
            return {
                plants: action.payload
            }
        default:
            return state    
    }
}

