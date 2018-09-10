import { createAction } from "redux-actions";
import constants from "./constants";

export const login = createAction(constants.LOGIN);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginError = createAction(constants.LOGIN_ERROR);
export const loginFormData = createAction(constants.LOGIN_FORMDATA);
export const loginRedirect = createAction(constants.LOGIN_REDIRECT);

export const logoutSuccess  = createAction(constants.LOGOUT_SUCCESS);

export const signUp = createAction(constants.SIGNUP);
export const signUpSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signUpError = createAction(constants.SIGNUP_ERROR);
export const signUpFormData = createAction(constants.SIGNUP_FORMDATA);
export const signupRedirect = createAction(constants.SIGNUP_REDIRECT);
export const signupChecked = createAction(constants.SIGNUP_CHECKED);
export const passwordDontMatch = createAction(constants.SIGNUP_PASSWORD_MATCH_ERROR);
export const TandCCheck = createAction(constants.SIGNUP_TC_CHECK);

export const weighEntry = createAction(constants.WEIGH_ENTRY);
export const weighEntrySuccess = createAction(constants.WEIGH_ENTRY_SUCCESS);
export const weighEntryError = createAction(constants.WEIGH_ENTRY_ERROR);
export const weighEntryFormData = createAction(constants.WEIGH_ENTRY_FORMDATA);
export const weighEntryReset = createAction(constants.WEIGH_ENTRY_RESET);
export const weighEntryRefresh = createAction(constants.WEIGH_ENTRY_REFRESH);

export const lorryModalOpen = createAction(constants.LORRY_MODAL_OPEN);
export const lorryModalClose = createAction(constants.LORRY_MODAL_CLOSE);

export const addLorry = createAction(constants.ADD_LORRY);
export const addLorrySuccess = createAction(constants.ADD_LORRY_SUCCESS);
export const addLorryError = createAction(constants.ADD_LORRY_ERROR);
export const addLorryFormData = createAction(constants.ADD_LORRY_FORMDATA);
export const addLorryReset = createAction(constants.ADD_LORRY_RESET);
export const addLorryResetSuccess = createAction(constants.ADD_LORRY_RESET_SUCCESS);
export const addLorryRefresh = createAction(constants.ADD_LORRY_REFRESH);

export const deleteLorry = createAction(constants.DELETE_LORRY);
export const deleteLorryInState = createAction(constants.DELETE_LORRY_IN_STATE);
export const deleteLorrySuccess = createAction(constants.DELETE_LORRY_SUCCESS);
export const deleteLorryError = createAction(constants.DELETE_LORRY_ERROR);

export const deleteDOA = createAction(constants.DELETE_DOA);
export const deleteDOAInState = createAction(constants.DELETE_DOA_IN_STATE);
export const deleteDOASuccess = createAction(constants.DELETE_DOA_SUCCESS);
export const deleteDOAError = createAction(constants.DELETE_DOA_ERROR);

export const deleteSupplier = createAction(constants.DELETE_SUPPLIER);
export const deleteSupplierInState = createAction(constants.DELETE_SUPPLIER_IN_STATE);
export const deleteSupplierSuccess = createAction(constants.DELETE_SUPPLIER_SUCCESS);
export const deleteSupplierError = createAction(constants.DELETE_SUPPLIER_ERROR);

export const getLorry = createAction(constants.GET_LORRY);
export const getLorrySuccess = createAction(constants.GET_LORRY_SUCCESS);
export const getLorryError = createAction(constants.GET_LORRY_ERROR);

export const getLocalLorry = createAction(constants.GET_LOCAL_LORRY);

export const getSupplier = createAction(constants.GET_SUPPLIER);
export const getSupplierSuccess = createAction(constants.GET_SUPPLIER_SUCCESS);
export const getSupplierError = createAction(constants.GET_SUPPLIER_ERROR);

export const getLocalSupplier = createAction(constants.GET_LOCAL_SUPPLIER);

export const setBatchData = createAction(constants.SET_BATCH_DATA);
export const setBatchDataSuccess = createAction(constants.SET_BATCH_DATA_SUCCESS);
export const setBatchDataError = createAction(constants.SET_BATCH_DATA_ERROR);

export const setSupplierInfo = createAction(constants.SET_SUPPLIER_INFO);
export const setLorryInfo = createAction(constants.SET_LORRY_INFO);

export const addDriverOrAssistant = createAction(constants.ADD_DRIVER_OR_ASSISTANT);
export const addDriverOrAssistantSuccess = createAction(constants.ADD_DRIVER_OR_ASSISTANT_SUCCESS);
export const addDriverOrAssistantError = createAction(constants.ADD_DRIVER_OR_ASSISTANT_ERROR);
export const addDriverOrAssistantFormData = createAction(constants.ADD_DRIVER_OR_ASSISTANT_FORM_DATA);
export const addDriverOrAssistantReset = createAction(constants.ADD_DRIVER_OR_ASSISTANT_RESET);
export const addDriverOrAssistantRefresh = createAction(constants.ADD_DRIVER_OR_ASSISTANT_REFRESH);

export const addSupplier = createAction(constants.ADD_SUPPLIER);
export const addSupplierSuccess = createAction(constants.ADD_SUPPLIER_SUCCESS);
export const addSupplierError = createAction(constants.ADD_SUPPLIER_ERROR);
export const addSupplierFormData = createAction(constants.ADD_SUPPLIER_FORM_DATA);
export const addSupplierReset = createAction(constants.ADD_SUPPLIER_RESET);
export const addSupplierResetSuccess = createAction(constants.ADD_SUPPLIER_RESET_SUCCESS);
export const addSupplierRefresh = createAction(constants.ADD_SUPPLIER_REFRESH);

export const addUser = createAction(constants.ADD_USER);
export const addUserSuccess = createAction(constants.ADD_USER_SUCCESS);
export const addUserError = createAction(constants.ADD_USER_ERROR);
export const addUserFormData = createAction(constants.ADD_USER_FORMDATA);

export const getUser = createAction(constants.GET_USER);
export const getUserSuccess = createAction(constants.GET_USER_SUCCESS);
export const getUserError = createAction(constants.GET_USER_ERROR);

export const getTicketNumber = createAction(constants.GET_TICKET_NUMBER);
export const getTicketNumberSuccess = createAction(constants.GET_TICKET_NUMBER_SUCCESS);
export const getTicketNumberError = createAction(constants.GET_TICKET_NUMBER_ERROR);

export const searchEditFormData = createAction(constants.SEARCH_EDIT_FORMDATA);
export const searchEdit = createAction(constants.GET_SEARCH_EDIT);
export const searchEditSuccess = createAction(constants.GET_SEARCH_EDIT_SUCCESS);
export const searchEditError = createAction(constants.GET_SEARCH_EDIT_ERROR);
