import constants from "./constants";
import { takeLatest } from "redux-saga";
import signupRequest from "./signup/action";
import loginRequest from "./login/action";
import { weighEntryRequest, lorryDataRequest } from "./weightEntry/action";
import { setBatchDataRequest } from "./dashboard/action";
import addLorryRequest from "./addLorry/action";

function* watchActions() {
  yield takeLatest(constants.SIGNUP, signupRequest);
  yield takeLatest(constants.WEIGH_ENTRY, weighEntryRequest);
  yield takeLatest(constants.GET_LORRY, lorryDataRequest);
  yield takeLatest(constants.ADD_LORRY, addLorryRequest);
  yield takeLatest(constants.SET_BATCH_DATA, setBatchDataRequest);
  yield takeLatest(constants.LOGIN, loginRequest);
  yield takeLatest(constants.SIGNUP, signupRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}
