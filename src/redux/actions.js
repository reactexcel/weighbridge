import { createAction } from "redux-actions";
import constants from "./constants";

export const logIn = createAction(constants.LOGIN);
export const logInSuccess = createAction(constants.LOGIN_SUCCESS);
export const logInError = createAction(constants.LOGIN_ERROR);
export const logInFormData = createAction(constants.LOGIN_FORMDATA);

export const signUp = createAction(constants.SIGNUP);
export const signUpSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signUpError = createAction(constants.SIGNUP_ERROR);
export const signUpFormData = createAction(constants.SIGNUP_FORMDATA);

export const weighEntry = createAction(constants.WEIGH_ENTRY);
export const weighEntrySuccess = createAction(constants.WEIGH_ENTRY_SUCCESS);
export const weighEntryError = createAction(constants.WEIGH_ENTRY_ERROR);
export const weighEntryFormData = createAction(constants.WEIGH_ENTRY_FORMDATA);
export const weighEntryReset = createAction(constants.WEIGH_ENTRY_RESET);

export const addLorry = createAction(constants.ADD_LORRY);
export const addLorrySuccess = createAction(constants.ADD_LORRY_SUCCESS);
export const addLorryError = createAction(constants.ADD_LORRY_ERROR);
export const addLorryFormData = createAction(constants.ADD_LORRY_FORMDATA);
export const addLorryReset = createAction(constants.ADD_LORRY_RESET);

export const getLorry = createAction(constants.GET_LORRY);
export const getLorrySuccess = createAction(constants.GET_LORRY_SUCCESS);
export const getLorryError = createAction(constants.GET_LORRY_ERROR);

export const getLocalLorry = createAction(constants.GET_LOCAL_LORRY);

export const setBatchData = createAction(constants.SET_BATCH_DATA);
export const setBatchDataSuccess = createAction(constants.SET_BATCH_DATA_SUCCESS);
export const setBatchDataError = createAction(constants.SET_BATCH_DATA_ERROR);

export const setLorryInfo = createAction(constants.SET_LORRY_INFO);


export const addDriverOrAssistant = createAction(constants.ADD_DRIVER_OR_ASSISTANT);
export const addDriverOrAssistantSuccess = createAction(constants.ADD_DRIVER_OR_ASSISTANT_SUCCESS);
export const addDriverOrAssistantError = createAction(constants.ADD_DRIVER_OR_ASSISTANT_ERROR);
export const addDriverOrAssistantFormData = createAction(constants.ADD_DRIVER_OR_ASSISTANT_FORM_DATA);

export const addSupplier = createAction(constants.ADD_SUPPLIER);
export const addSupplierSuccess = createAction(constants.ADD_SUPPLIER_SUCCESS);
export const addSupplierError = createAction(constants.ADD_SUPPLIER_ERROR);
export const addSupplierFormData = createAction(constants.ADD_SUPPLIER_FORM_DATA);
