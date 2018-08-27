import constants from "./constants";
import { takeLatest } from "redux-saga";
import addDriverOrAssistantRequest from "./addDriverOrAssistant/action";
import addSupplierRequest from "./addSupplier/action";

function* watchActions() {
  yield takeLatest(constants.ADD_DRIVER_OR_ASSISTANT, addDriverOrAssistantRequest);
  yield takeLatest(constants.ADD_SUPPLIER, addSupplierRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}
