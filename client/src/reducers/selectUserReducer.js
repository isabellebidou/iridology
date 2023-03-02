import { SELECT_USER } from "../actions/types";

export default function (state = [], action){
    //console.log("selectedUserReducer called with action: ", action);
    let newState = [...state];
    switch (action.type) {
        case SELECT_USER:
            newState = action.payload;
            return newState;
        default: 
        return state;
    }
}