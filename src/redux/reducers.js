import { combineReducers } from "redux";
import weighentry from "../redux/weightEntry/reducer";
import addlorry from "../redux/addLorry/reducer";

const makeRootReducer = combineReducers({
  weighentry: weighentry,
  addlorry: addlorry
});

export default makeRootReducer;
