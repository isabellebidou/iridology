import { SELECT_USER } from "../actions/types";
//const initialState = null;

export default function (state = [], action){
    //console.log("selectedUserReducer called with action: ", action);
    let newState = [...state];
    switch (action.type) {
        case SELECT_USER:
            newState = action.payload;
            return newState;
        default: 
        //console.log("return", state);
        return state;
    }
}