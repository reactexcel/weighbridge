import constants from "./constants";
import { takeLatest } from "redux-saga";
import signupRequest from "./signup/action";
import loginRequest from "./login/action";
import { weighEntryRequest, lorryDataRequest } from "./weightEntry/action";
import { setBatchDataRequest } from "./dashboard/action";
import addLorryRequest from "./addLorry/action";
import addDriverOrAssistantRequest from "./addDriverOrAssistant/action";
import addSupplierRequest from "./addSupplier/action";

function* watchActions() {
  yield takeLatest(constants.SIGNUP, signupRequest);
  yield takeLatest(constants.WEIGH_ENTRY, weighEntryRequest);
  yield takeLatest(constants.GET_LORRY, lorryDataRequest);
  yield takeLatest(constants.ADD_LORRY, addLorryRequest);
  yield takeLatest(constants.SET_BATCH_DATA, setBatchDataRequest);
  yield takeLatest(constants.LOGIN, loginRequest);
  yield takeLatest(constants.SIGNUP, signupRequest);
  yield takeLatest(constants.ADD_DRIVER_OR_ASSISTANT, addDriverOrAssistantRequest);
  yield takeLatest(constants.ADD_SUPPLIER, addSupplierRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}
