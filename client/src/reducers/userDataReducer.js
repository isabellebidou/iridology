import { FETCH_USER_DATA } from "../actions/types";

export default function (state = [], action){

    switch (action.type) {
        case FETCH_USER_DATA:
            return action.payload;
        default: 
        return state;
    }
}