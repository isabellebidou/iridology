import axios from "axios";
import store from "./../components/store";

import {
  FETCH_USER,
  FETCH_USERS,
  SELECT_USER,
  FETCH_READINGS,
  FETCH_LINKS,
  FETCH_USER_DATA,
  FETCH_COOKIE_VALUE,
  FETCH_USER_EYE_PICS,
  UPDATE_COOKIE_ACCEPTANCE

} from "./types";


export const updateCookieAcceptance = (accepted) => ({
  type: UPDATE_COOKIE_ACCEPTANCE,
  payload: accepted,
});

export const fetchCookieValue=() => {
  var previousCookieValue, cookieValue = null;
  if (document.cookie) {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));
  const previousCookie = cookies.find(([name]) => name === 'iridologyCookieConsent');
   previousCookieValue = previousCookie && previousCookie[1] === 'true';

  } 
    cookieValue = store.getState().cookie;

  
  return {
    type: FETCH_COOKIE_VALUE,
    //payload: previousCookieValue || cookieValue || false // prioritize the store state, then the previous cookie value, and default to false if neither is available
  payload: cookieValue? cookieValue : previousCookieValue
  };
}


export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get("/api/users_all");
  dispatch({ type: FETCH_USERS, payload: res.data });
};
export const selectUser = (id) => (dispatch) => {
  dispatch({ type: SELECT_USER, payload: id });
};
export const fetchUserData = () => async (dispatch) => {
  const res = await axios.get("/api/user_data");
  dispatch({ type: FETCH_USER_DATA, payload: res.data });
};
export const submitReading = (values, history) => async (dispatch) => {
  await axios.post("/api/readings", values);
  history.push("/readings");
}

export const fetchUserEyePics = () => async (dispatch) => {
  const res = await axios.get("api/user_eye_pics");
  dispatch({ type: FETCH_USER_EYE_PICS, payload: res.data });
};


export const uploadLeftEyePic = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/eyes_left", values);
  history.push("/readings");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const uploadRightEyePic = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/eyes_right", values);
  history.push("/readings");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const submitLink = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/links", values);
  history.push("/");
  dispatch({ type: FETCH_LINKS, payload: res.data });
};
export const submitUserData = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/userdata", values);
  history.push("/readings");
  dispatch({ type: FETCH_USER_DATA, payload: res.data });
};
export const submitUserDataEdit = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/userdata/edit", values);
  history.push("/userdata");
  dispatch({ type: FETCH_USER_DATA, payload: res.data });
};
export const fetchReadings = () => async (dispatch) => {
  const res = await axios.get("/api/readings");
  dispatch({ type: FETCH_READINGS, payload: res.data });
};
