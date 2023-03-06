import { FETCH_COOKIE_VALUE } from "../actions/types";

export default function (state = '', action){

    switch (action.type) {
        case FETCH_COOKIE_VALUE:
            return action.payload || false;
        default: 
        return state;
    }
}
