import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formData: {
    id: "",
    name: "",
    ic: "",
    dob: "",
    address1: "",
    address2: "",
    poskod: "",
    phoneno: "",
    race: "",
    sex: "",
    spousename: "",
    spousedob: "",
    licenseno: "",
    licenseexpirydate: ""
  },
  isLoading: false,
  isSuccess: false,
  isError: false
};

const handleAddSupplierFormData = (state, action) => {
  return update(state, {
    formData: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });
};

const handleAddSupplierRequest = (state, action) => {
  return update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
};

const handleAddSupplierRequestSuccess = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });
};

const handleAddSupplierRequestError = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });
};

export default handleActions(
  {
    [constants.ADD_SUPPLIER_FORM_DATA]: handleAddSupplierFormData,
    [constants.ADD_SUPPLIER]: handleAddSupplierRequest,
    [constants.ADD_SUPPLIER_SUCCESS]: handleAddSupplierRequestSuccess,
    [constants.ADD_SUPPLIER_ERROR]: handleAddSupplierRequestError
  },
  initialState
);
