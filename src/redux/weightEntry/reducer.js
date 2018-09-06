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
  lorrydata: "",
  supplierdata: "",
  isLoadingWeighEntry: false,
  isSuccessWeighEntry: false,
  isErrorWeighEntry: false,
  isLoadingGetLorry: false,
  isSuccessGetLorry: false,
  isErrorGetLorry: false,
  isLoadingGetSupplier: false,
  isSuccessGetSupplier: false,
  isErrorGetSupplier: false,
  message: "",
  lorryModal: false
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
    isErrorWeighEntry: { $set: false },
    message: { $set: "weigh Entry Success" }
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
    lorrydata: { $set: action.payload },
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
  update(state, { lorrydata: { $set: action.payload } });

const setLorryInfo = (state, action) => {
  return update(state, {
    formdata: {
      lorrynumber: {
        $set: action.payload.lorryData[action.payload.id]["Number Plate"].S
      },
      drivername1: {
        $set: action.payload.lorryData[action.payload.id]["Driver Name1"].S
      },
      assistantname1: {
        $set: action.payload.lorryData[action.payload.id]["Co-Driver1"]
          ? action.payload.lorryData[action.payload.id]["Co-Driver1"].S
          : ""
      },
      drivername2: {
        $set: action.payload.lorryData[action.payload.id]["Driver Name2"]
          ? action.payload.lorryData[action.payload.id]["Driver Name2"].S
          : ""
      },
      assistantname2: {
        $set: action.payload.lorryData[action.payload.id]["Co-Driver2"]
          ? action.payload.lorryData[action.payload.id]["Co-Driver2"].S
          : ""
      },
      woload: {
        $set: action.payload.lorryData[action.payload.id]["Weight W/o Load"].S
      }
    }
  });
};
const getSupplierRequest = (state, action) =>
  update(state, {
    isLoadingGetSupplier: { $set: true },
    isSuccessGetSupplier: { $set: false },
    isErrorGetSupplier: { $set: false }
  });
const getSupplierSuccess = (state, action) =>
  update(state, {
    supplierdata: { $set: action.payload },
    isLoadingGetSupplier: { $set: false },
    isSuccessGetSupplier: { $set: true },
    isErrorGetSupplier: { $set: false }
  });
const getSupplierError = (state, action) =>
  update(state, {
    isLoadingGetSupplier: { $set: false },
    isSuccessGetSupplier: { $set: false },
    isErrorGetSupplier: { $set: true }
  });
const getLocalSupplierData = (state, action) => {
  return update(state, { supplierdata: { $set: action.payload } });
};
const setSupplierInfo = (state, action) =>
  update(state, {
    formdata: {
      suppliername: {
        $set: action.payload.supplierData[action.payload.id]["Name"].S
      }
    }
  });
const weighEntryReset = (state, action) =>
  update(state, {
    formdata: {
      ticketnumber: { $set: action.payload.ticketnumber },
      supplierorigin: { $set: "" },
      suppliername: { $set: "" },
      wload: { $set: "" },
      unripe: { $set: "" },
      netweight: { $set: "" },
      deduct: { $set: "" }
    }
  });
const weighEntryRefresh = (state, action) =>
  update(state, {
    message: { $set: "" }
  });
const lorryModalOpen = (state, action) =>
  update(state, {
    lorryModal: { $set: true }
  });
const lorryModalClose = (state, action) =>
  update(state, {
    lorryModal: { $set: false }
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
    [constants.SET_LORRY_INFO]: setLorryInfo,
    [constants.WEIGH_ENTRY_RESET]: weighEntryReset,
    [constants.WEIGH_ENTRY_REFRESH]: weighEntryRefresh,
    [constants.GET_SUPPLIER]: getSupplierRequest,
    [constants.GET_SUPPLIER_SUCCESS]: getSupplierSuccess,
    [constants.GET_SUPPLIER_ERROR]: getSupplierError,
    [constants.GET_LOCAL_SUPPLIER]: getLocalSupplierData,
    [constants.SET_SUPPLIER_INFO]: setSupplierInfo,
    [constants.LORRY_MODAL_OPEN]: lorryModalOpen,
    [constants.LORRY_MODAL_CLOSE]: lorryModalClose
  },
  initialState
);
