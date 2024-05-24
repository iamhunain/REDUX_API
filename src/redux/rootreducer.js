
import { combineReducers } from "redux";
import datareducer from "./reducer";
import loginreducer from "./reducers/auth/loginreducer";

export const rootreducer = combineReducers({
    data: datareducer,
    login: loginreducer
})

