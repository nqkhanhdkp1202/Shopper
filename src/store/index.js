import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from './authReducer'
import pageReducer from './pageReducer'


let reducers = combineReducers({
    auth: authReducer,
    page: pageReducer
})

const store = createStore(reducers, applyMiddleware(thunk))


export default store