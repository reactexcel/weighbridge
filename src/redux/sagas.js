import constants from "./constants";
import { takeLatest } from "redux-saga";
import signupRequest from "./signup/action";
import { weighEntryRequest, lorryDataRequest } from "./weightEntry/action";
import addLorryRequest from "./addLorry/action";

function* watchActions() {
  yield takeLatest(constants.SIGNUP, signupRequest);
  yield takeLatest(constants.WEIGH_ENTRY, weighEntryRequest);
  yield takeLatest(constants.GET_LORRY, lorryDataRequest);
  yield takeLatest(constants.ADD_LORRY, addLorryRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}
