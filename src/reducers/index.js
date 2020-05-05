import { combineReducers } from 'redux'
import { loginReducer }  from './loginReducer'
import { plantReducer } from './plantReducer'

export const rootReducer = combineReducers({
    login: loginReducer,
    plants: plantReducer
});

//does this stuff need to be 