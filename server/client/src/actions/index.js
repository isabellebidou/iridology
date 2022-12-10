import axios from "axios";
import { FETCH_USER , FETCH_READINGS} from "./types";


export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const handleToken = token => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitReading = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/readings", values);
  history.push('/readings');
  dispatch({ type: FETCH_USER, payload: res.data})
}
export const fetchReadings = () => async (dispatch) => {
  const res = await axios.get("/api/readings");
  dispatch({ type: FETCH_READINGS, payload: res.data });
};
