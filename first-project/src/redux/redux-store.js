import {combineReducers, createStore} from "redux";
import profileReducer from "./proReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
});

let store = createStore(reducers);

export default store;