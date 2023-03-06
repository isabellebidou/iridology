import { combineReducers } from "redux";
//import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import readingsReducer from "./readingsReducer";
import userDataReducer from "./userDataReducer";
import usersReducer from "./usersReducer";
import selectUserReducer from "./selectUserReducer";
import eyesReducer from "./eyesReducer";
import cookieReducer from "./cookieReducer";
export default combineReducers({
    auth : authReducer,
   // form : reduxForm,
    readings: readingsReducer,
    eyes: eyesReducer,
    userdata: userDataReducer,
    users: usersReducer,
    selectedUser:  selectUserReducer,
    cookie: cookieReducer

});