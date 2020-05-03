export default function plantReducer(state = {plants: []}, action) {
    switch(action.type) {
        case 'FETCH_PLANTS': 
            return {
                plants: action.payload
                //payload is an array of objects
                //i want accounts to appoint to array from fetch request
            }
        default:
            return state    
    }

    //job is to update or store anything that has to do with plants
}

