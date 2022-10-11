import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from './authReducer'
import pageReducer from './pageReducer'


let reducers = combineReducers({
    authReducer,
    pageReducer
})

const store = createStore(reducers, applyMiddleware(thunk))


export default store