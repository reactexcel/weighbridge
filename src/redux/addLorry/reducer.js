import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formdata: {
    lorrynumber: "",
    wwload: "",
    drivername1: "",
    drivername2: "",
    codriver1: "",
    codriver2: ""
  },
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  isDeleteLoading: false,
  isDeleteSuccess: false,
  isDeleteError: false,
  msg: ""
};
const addLorryFormData = (state, action) =>
  update(state, {
    formdata: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });
const addLorryRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "Lorry Added" }
  });
const addLorrySuccess = (state, action) =>
  update(state, {
    data: { $push: [action.payload] },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });
const addLorryError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });
const addLorryReset = (state, action) =>
  update(state, {
    formdata: {
      lorrynumber: { $set: "" },
      wwload: { $set: "" },
      drivername1: { $set: "" },
      drivername2: { $set: "" },
      codriver1: { $set: "" },
      codriver2: { $set: "" }
    }
  });
const addLorryResetSuccess = (state, action) =>
  update(state, {
    isSuccess: { $set: false }
  });
const deleteLorryRequest = (state, action) =>
  update(state, {
    isDeleteLoading: { $set: true },
    isDeleteSuccess: { $set: false },
    isDeleteError: { $set: false }
  });
const deleteLorrySuccess = (state, action) =>
  update(state, {
    isDeleteLoading: { $set: false },
    isDeleteSuccess: { $set: true },
    isDeleteError: { $set: false }
  });
const deleteLorryError = (state, action) =>
  update(state, {
    isDeleteLoading: { $set: false },
    isDeleteSuccess: { $set: false },
    isDeleteError: { $set: true }
  });
const handleLorryRefresh = (state, action) =>
  update(state, {
    message: { $set: "" }
  });
const handleDeleteLorryInState = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    message: {$set: ""}
  });
export default handleActions(
  {
    [constants.ADD_LORRY]: addLorryRequest,
    [constants.ADD_LORRY_SUCCESS]: addLorrySuccess,
    [constants.ADD_LORRY_ERROR]: addLorryError,
    [constants.ADD_LORRY_FORMDATA]: addLorryFormData,
    [constants.ADD_LORRY_RESET]: addLorryReset,
    [constants.ADD_LORRY_RESET_SUCCESS]: addLorryResetSuccess,
    [constants.DELETE_LORRY]: deleteLorryRequest,
    [constants.DELETE_LORRY_SUCCESS]: deleteLorrySuccess,
    [constants.DELETE_LORRY_ERROR]: deleteLorryError,
    [constants.ADD_LORRY_REFRESH]: handleLorryRefresh,
    [constants.DELETE_LORRY_IN_STATE]: handleDeleteLorryInState
  },
  initialState
);
