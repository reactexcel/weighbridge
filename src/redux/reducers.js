import { combineReducers } from "redux";
import weighentry from "../redux/weightEntry/reducer";
import addlorry from "../redux/addLorry/reducer";
import dashboard from "../redux/dashboard/reducer";
import login from "../redux/login/reducer";
import signup from "../redux/signup/reducer";

const makeRootReducer = combineReducers({
  weighentry: weighentry,
  addlorry: addlorry,
  dashboard: dashboard,
  login: login,
  signup: signup
});

export default makeRootReducer;
