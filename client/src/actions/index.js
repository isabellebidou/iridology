import axios from "axios";
import {
  FETCH_USER,
  FETCH_READINGS,
  FETCH_USER_DATA,
  FETCH_USER_EYE_PICS,
} from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const fetchUserData = () => async (dispatch) => {
  const res = await axios.get("/api/user_data");
  dispatch({ type: FETCH_USER_DATA, payload: res.data });
};
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

export const submitReading = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/readings", values);
  history.push("/readings");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const submitUserData = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/userdata", values);
  history.push("/userdata");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const submitUserDataEdit = (values, history) => async (dispatch) => {
  console.log("actions/ index/ submitUserDataEdit   values")
  console.log(values)
  const res = await axios.post("/api/userdata/edit", values);
  history.push("/userdata");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const fetchReadings = () => async (dispatch) => {
  const res = await axios.get("/api/readings");
  dispatch({ type: FETCH_READINGS, payload: res.data });
};
