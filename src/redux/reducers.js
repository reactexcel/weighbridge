import { combineReducers } from "redux";
import addDriverOrAssistant from "./addDriverOrAssistant/reducer";
import addSupplier from "./addSupplier/reducer";

const makeRootReducer = combineReducers({
    addDriverOrAssistant: addDriverOrAssistant,
    addSupplier: addSupplier
});

export default makeRootReducer;