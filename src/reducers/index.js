import { combineReducers } from "redux";
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";
import invoiceReducer from "./invoiceReducers";

const allReducers  = combineReducers({
    users:userReducer,
    routing:locationReducer,
    invoice:invoiceReducer
})

export default allReducers;