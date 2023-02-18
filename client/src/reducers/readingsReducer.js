import { FETCH_READINGS } from "../actions/types";

export default function (state = [], action){

    switch (action.type) {
        case FETCH_READINGS:
            return action.payload;
        
        default: 
        return state;
    }
}