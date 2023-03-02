import { createStore, applyMiddleware } from "redux"
import { FETCH_USER } from "../actions/types";
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const intitialState = {
  authenticated: false,
};

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, authenticated: true };

    default:
      return state;
  }
};


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;