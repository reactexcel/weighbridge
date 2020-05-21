import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formData: {
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
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  isDeleteLoading: false,
  isDeleteSuccess: false,
  isDeleteError: false,

  message: ""
};

const handleAddSupplierFormData = (state, action) =>
  update(state, {
    formData: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });

const handleAddSupplierRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "Supplier Added" }
  });

const handleAddSupplierRequestSuccess = (state, action) => {
  return update(state, {
    data: { $push: [action.payload] },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });
};
const handleAddSupplierRequestError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });
const addSupplierResetSuccess = (state, action) =>
  update(state, {
    isSuccess: { $set: false }
  });

const handleAddSupplierReset = (state, action) => {
  
  return update(state, {
    formData: {
      name: { $set: "" },
      ic: { $set: "" },
      dob: { $set: "" },
      address1: { $set: "" },
      address2: { $set: "" },
      poskod: { $set: "" },
      phoneno: { $set: "" },
      race: { $set: "" },
      sex: { $set: "" },
      spousename: { $set: "" },
      spousedob: { $set: "" },
      licenseno: { $set: "" },
      licenseexpirydate: { $set: "" }
    }
  });
};
const handleAddSupplierRefresh = (state, action) =>
  update(state, {
    message: { $set: "" }
  });
const deleteSupplierRequest = (state, action) =>
  update(state, {
    isDeleteLoading: { $set: true },
    isDeleteSuccess: { $set: false },
    isDeleteError: { $set: false }
  });
const deleteSupplierSuccess = (state, action) =>
  update(state, {
    isDeleteLoading: { $set: false },
    isDeleteSuccess: { $set: true },
    isDeleteError: { $set: false }
  });
const deleteSupplierError = (state, action) =>
  update(state, {
    isDeleteLoading: { $set: false },
    isDeleteSuccess: { $set: false },
    isDeleteError: { $set: true }
  });
const handleDeleteSupplierInState = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    message: { $set: "" }
  });

export default handleActions(
  {
    [constants.ADD_SUPPLIER_FORM_DATA]: handleAddSupplierFormData,
    [constants.ADD_SUPPLIER]: handleAddSupplierRequest,
    [constants.ADD_SUPPLIER_SUCCESS]: handleAddSupplierRequestSuccess,
    [constants.ADD_SUPPLIER_ERROR]: handleAddSupplierRequestError,
    [constants.ADD_SUPPLIER_RESET]: handleAddSupplierReset,
    [constants.ADD_SUPPLIER_REFRESH]: handleAddSupplierRefresh,
    [constants.ADD_SUPPLIER_RESET_SUCCESS]: addSupplierResetSuccess,
    [constants.DELETE_LORRY]: deleteSupplierRequest,
    [constants.DELETE_LORRY_SUCCESS]: deleteSupplierSuccess,
    [constants.DELETE_LORRY_ERROR]: deleteSupplierError,
    [constants.DELETE_DOA_IN_STATE]: handleDeleteSupplierInState
  },
  initialState
);
