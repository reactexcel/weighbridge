import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  isLoadingBatchData: false,
  isSuccessBatchData: false,
  isErrorBatchData: false
};

const setBatchDataRequest = (state, action) =>
  update(state, {
    isLoadingBatchData: { $set: true },
    isSuccessBatchData: { $set: false },
    isErrorBatchData: { $set: false }
  });
const setBatchDataSuccess = (state, action) =>
  update(state, {
    isLoadingBatchData: { $set: false },
    isSuccessBatchData: { $set: true },
    isErrorBatchData: { $set: false }
  });
const setBatchDataError = (state, action) =>
  update(state, {
    isLoadingBatchData: { $set: false },
    isSuccessBatchData: { $set: false },
    isErrorBatchData: { $set: true }
  });

export default handleActions(
  {
    [constants.SET_BATCH_DATA]: setBatchDataRequest,
    [constants.SET_BATCH_DATA_SUCCESS]: setBatchDataSuccess,
    [constants.SET_BATCH_DATA_ERROR]: setBatchDataError
  },
  initialState
);
