import { FETCH_USER_EYE_PICS } from "../actions/types";

export default function (state = [], action){

    switch (action.type) {
        case FETCH_USER_EYE_PICS:
            return action.payload;
        default: 
        return state;
    }
}