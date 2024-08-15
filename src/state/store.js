import { applyMiddleware, legacy_createStore } from "redux";
import reducers from './reducers'
import { thunk } from "redux-thunk";

export const store = legacy_createStore(reducers, {}, applyMiddleware(thunk))


// take reducers first 
// then take the initialize state which is empty in our case
// then if you want to want any middleware use applyMiddleware



// Thunk? 
/* thunk is basically help us to execute the async functions */