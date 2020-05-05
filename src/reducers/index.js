import { combineReducers } from 'redux'
import { loginReducer } from './userReducer'
import { plantReducer } from './plantReducer'



const rootReducer = combineReducers({
    user: loginReducer,
    plants: plantReducer
});

export default rootReducer