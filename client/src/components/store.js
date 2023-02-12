import { createStore } from "redux"
import { FETCH_USER } from "../actions/types";

const intitialState = {
  authenticated: false
};

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, authenticated: true };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;