import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import readingsReducer from "./readingsReducer";
export default combineReducers({
    auth : authReducer,
    form : reduxForm,
    readings: readingsReducer
});