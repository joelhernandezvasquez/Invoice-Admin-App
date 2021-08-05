import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

const allReducers  = combineReducers({
    user:authReducer,
    users:userReducer
})

export default allReducers;