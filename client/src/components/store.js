import { createStore, applyMiddleware } from "redux"
import { FETCH_USER ,UPDATE_COOKIE_ACCEPTANCE} from "../actions/types";
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const intitialState = {
  authenticated: false,
  cookieAccepted: false, // additional value to track cookie acceptance
};

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, authenticated: true };
    case UPDATE_COOKIE_ACCEPTANCE:
      return { ...state, cookieAccepted: action.payload };

    default:
      return state;
  }
};


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;