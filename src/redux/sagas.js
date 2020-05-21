import constants from "./constants";
import { takeLatest } from "redux-saga";
import signupRequest from "./signup/action";
import loginRequest from "./login/action";
import {
  weighEntryRequest,
  lorryDataRequest,
  supplierDataRequest,
  getTicketNumberRequest
} from "./weightEntry/action";
import { setBatchDataRequest } from "./dashboard/action";
import { addLorryRequest, deleteLorryRequest } from "./addLorry/action";
import {
  addDriverOrAssistantRequest,
  deleteDOARequest
} from "./addDriverOrAssistant/action";
import {
  addSupplierRequest,
  deleteSupplierRequest
} from "./addSupplier/action";
import addUserRequest from "./adduser/action";
import { getUserRequest, deleteUserRequest } from "./modifyuserinfo/action";
import getSearchEditRequest from "./searchnedit/action";

function* watchActions() {
  yield takeLatest(constants.WEIGH_ENTRY, weighEntryRequest);
  yield takeLatest(constants.GET_LORRY, lorryDataRequest);
  yield takeLatest(constants.GET_SUPPLIER, supplierDataRequest);
  yield takeLatest(constants.ADD_LORRY, addLorryRequest);
  yield takeLatest(constants.DELETE_LORRY, deleteLorryRequest);
  yield takeLatest(constants.DELETE_SUPPLIER, deleteSupplierRequest);
  yield takeLatest(constants.DELETE_DOA, deleteDOARequest);
  yield takeLatest(constants.SET_BATCH_DATA, setBatchDataRequest);
  yield takeLatest(constants.LOGIN, loginRequest);
  yield takeLatest(constants.SIGNUP, signupRequest);
  yield takeLatest(
    constants.ADD_DRIVER_OR_ASSISTANT,
    addDriverOrAssistantRequest
  );
  yield takeLatest(constants.ADD_SUPPLIER, addSupplierRequest);
  yield takeLatest(constants.ADD_USER, addUserRequest);
  yield takeLatest(constants.GET_USER, getUserRequest);
  yield takeLatest(constants.DELETE_USER, deleteUserRequest);
  yield takeLatest(constants.GET_SEARCH_EDIT, getSearchEditRequest);
  yield takeLatest(constants.GET_TICKET_NUMBER, getTicketNumberRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}
