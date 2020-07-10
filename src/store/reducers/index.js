import userReducer from "./user";
import complaintsReducer from "./complaints";
import { combineReducers } from "redux";

const reducers = {
  user: userReducer,
  complaints: complaintsReducer
};
const allReducers = combineReducers(reducers);
export default allReducers;
