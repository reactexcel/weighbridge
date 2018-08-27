import { createAction } from "redux-actions";
import constants from "./constants";

export const logIn = createAction(constants.LOGIN);

export const signUp = createAction(constants.SIGNUP);

export const weighEntry = createAction(constants.WEIGH_ENTRY);
export const weighEntrySuccess = createAction(constants.WEIGH_ENTRY_SUCCESS);
export const weighEntryError = createAction(constants.WEIGH_ENTRY_ERROR);
export const weighEntryFormData = createAction(constants.WEIGH_ENTRY_FORMDATA);

export const addLorry = createAction(constants.ADD_LORRY);
export const addLorrySuccess = createAction(constants.ADD_LORRY_SUCCESS);
export const addLorryError = createAction(constants.ADD_LORRY_ERROR);
export const addLorryFormData = createAction(constants.ADD_LORRY_FORMDATA);

export const getLorry = createAction(constants.GET_LORRY);
export const getLorrySuccess = createAction(constants.GET_LORRY_SUCCESS);
export const getLorryError = createAction(constants.GET_LORRY_ERROR);

