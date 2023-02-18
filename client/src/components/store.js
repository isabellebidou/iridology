import { createStore, applyMiddleware } from "redux"
import { FETCH_USER } from "../actions/types";
import { SELECT_USER } from "../actions/types";
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const intitialState = {
  authenticated: false,
  //selectedUser: null
};

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, authenticated: true };
    /*case SELECT_USER:
      console.log(state+ "from SELECT_USER store")
      return { ...state, selectedUser: action.payload };*/

    default:
      console.log(state+ "from default store")
      return state;
  }
};

//const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;