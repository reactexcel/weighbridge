import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formdata: {
    ticketnumber: "",
    lorrynumber: "",
    supplierorigin: "",
    suppliername: "",
    drivername1: "",
    assistantname1: "",
    drivername2: "",
    assistantname2: "",
    wload: "",
    woload: "",
    unripe: "",
    netweight: "",
    deduct: ""
  },
  data: "",
  isLoadingWeighEntry: false,
  isSuccessWeighEntry: false,
  isErrorWeighEntry: false,
  isLoadingGetLorry: false,
  isSuccessGetLorry: false,
  isErrorGetLorry: false,
  msg: ""
};
const weighEntryFormData = (state, action) =>
  update(state, {
    formdata: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });
const weighEntryRequest = (state, action) =>
  update(state, {
    isLoadingWeighEntry: { $set: true },
    isSuccessWeighEntry: { $set: false },
    isErrorWeighEntry: { $set: false }
  });
const weighEntrySuccess = (state, action) =>
  update(state, {
    isLoadingWeighEntry: { $set: false },
    isSuccessWeighEntry: { $set: true },
    isErrorWeighEntry: { $set: false }
  });
const weighEntryError = (state, action) =>
  update(state, {
    isLoadingWeighEntry: { $set: false },
    isSuccessWeighEntry: { $set: false },
    isErrorWeighEntry: { $set: true }
  });
const getLorryRequest = (state, action) =>
  update(state, {
    isLoadingGetLorry: { $set: true },
    isSuccessGetLorry: { $set: false },
    isErrorGetLorry: { $set: false }
  });
const getLorrySuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isLoadingGetLorry: { $set: false },
    isSuccessGetLorry: { $set: true },
    isErrorGetLorry: { $set: false }
  });
const getLorryError = (state, action) =>
  update(state, {
    isLoadingGetLorry: { $set: false },
    isSuccessGetLorry: { $set: false },
    isErrorGetLorry: { $set: true }
  });
const getLocalLorryData = (state, action) =>
  update(state, { data: { $set: action.payload } });
const setLorryInfo = (state, action) =>
  update(state, {
    formdata: {
      lorrynumber: {
        $set: action.payload.lorryData[action.payload.id]["Number Plate"].S
      },
      drivername1: {
        $set: action.payload.lorryData[action.payload.id]["Driver Name1"].S
      },
      assistantname1: {
        $set: action.payload.lorryData[action.payload.id]["Co-Driver1"].S
      },
      drivername2: {
        $set: action.payload.lorryData[action.payload.id]["Driver Name2"].S
      },
      assistantname2: {
        $set: action.payload.lorryData[action.payload.id]["Co-Driver2"].S
      },
      woload: {
        $set: action.payload.lorryData[action.payload.id]["Weight W/o Load"].N
      }
    }
  });
export default handleActions(
  {
    [constants.WEIGH_ENTRY]: weighEntryRequest,
    [constants.WEIGH_ENTRY_SUCCESS]: weighEntrySuccess,
    [constants.WEIGH_ENTRY_ERROR]: weighEntryError,
    [constants.WEIGH_ENTRY_FORMDATA]: weighEntryFormData,
    [constants.GET_LORRY]: getLorryRequest,
    [constants.GET_LORRY_SUCCESS]: getLorrySuccess,
    [constants.GET_LORRY_ERROR]: getLorryError,
    [constants.GET_LOCAL_LORRY]: getLocalLorryData,
    [constants.SET_LORRY_INFO]: setLorryInfo
  },
  initialState
);
