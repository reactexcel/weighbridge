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
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
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
    isError: { $set: false }
  });
const addLorrySuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
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
export default handleActions(
  {
    [constants.ADD_LORRY]: addLorryRequest,
    [constants.ADD_LORRY_SUCCESS]: addLorrySuccess,
    [constants.ADD_LORRY_ERROR]: addLorryError,
    [constants.ADD_LORRY_FORMDATA]: addLorryFormData,
    [constants.ADD_LORRY_RESET]: addLorryReset
  },
  initialState
);
