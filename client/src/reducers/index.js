import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import readingsReducer from "./readingsReducer";
import userDataReducer from "./userDataReducer";

import eyesReducer from "./eyesReducer";
export default combineReducers({
    auth : authReducer,
    form : reduxForm,
    readings: readingsReducer,
    eyes: eyesReducer,
    userdata: userDataReducer
});