import { createAction } from "redux-actions";
import constants from "./constants";

export const addDriverOrAssistant = createAction(constants.ADD_DRIVER_OR_ASSISTANT);
export const addDriverOrAssistantSuccess = createAction(constants.ADD_DRIVER_OR_ASSISTANT_SUCCESS);
export const addDriverOrAssistantError = createAction(constants.ADD_DRIVER_OR_ASSISTANT_ERROR);
export const addDriverOrAssistantFormData = createAction(constants.ADD_DRIVER_OR_ASSISTANT_FORM_DATA);

export const addSupplier = createAction(constants.ADD_SUPPLIER);
export const addSupplierSuccess = createAction(constants.ADD_SUPPLIER_SUCCESS);
export const addSupplierError = createAction(constants.ADD_SUPPLIER_ERROR);
export const addSupplierFormData = createAction(constants.ADD_SUPPLIER_FORM_DATA);