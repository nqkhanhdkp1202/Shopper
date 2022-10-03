import { combineReducers, createStore } from "redux";

let reducers = combineReducers({

})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store