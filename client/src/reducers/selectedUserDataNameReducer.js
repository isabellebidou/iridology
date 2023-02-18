import { FETCH_SELECTED_USER_DATA_NAME } from "../actions/types";

export default function (state = [], action){

    switch (action.type) {
        case FETCH_SELECTED_USER_DATA_NAME:
            return action.payload;
        default: 
        return state;
    }
}