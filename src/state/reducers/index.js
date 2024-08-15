import { combineReducers } from "redux";
import amountReducer from './amountReducer'


// to return more than one reducers as a single reducer
const reducers = combineReducers({ 
    amount: amountReducer
})

export default reducers