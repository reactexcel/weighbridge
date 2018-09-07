import { combineReducers } from "redux";
import weighentry from "./weightEntry/reducer";
import addlorry from "./addLorry/reducer";
import dashboard from "./dashboard/reducer";
import login from "./login/reducer";
import signup from "./signup/reducer";
import addDriverOrAssistant from "./addDriverOrAssistant/reducer";
import addSupplier from "./addSupplier/reducer";
import adduser from "./adduser/reducer";
import modifyuserinfo from "./modifyuserinfo/reducer";

const makeRootReducer = combineReducers({
  weighentry: weighentry,
  addlorry: addlorry,
  dashboard: dashboard,
  login: login,
  signup: signup,
  addDriverOrAssistant: addDriverOrAssistant,
  addSupplier: addSupplier,
  adduser: adduser,
  modifyuserinfo: modifyuserinfo
});

export default makeRootReducer;
