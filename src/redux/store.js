import reducer from "./reducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    data: reducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

