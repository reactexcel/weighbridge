import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formData: {
    role: "",
    name: ""
  },
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const handleAddDriverOrAssistantFormData = (state, action) =>
  update(state, {
    formData: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });

const handleAddDriverOrAssistantRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "Driver or Assistant Added" }
  });

const handleAddDriverOrAssistantRequestSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    data: { $push: [action.payload] }
  });

const handleAddDriverOrAssistantRequestError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });

const addDriverOrAssistantReset = (state, action) =>
  update(state, {
    formData: {
      role: { $set: "" },
      name: { $set: "" }
    }
  });

const handleAddDriverOrAssistantRefresh = (state, action) =>
  update(state, {
    message: { $set: "" }
  });
const handleDeleteDOAInState = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    message: { $set: "" }
  });

export default handleActions(
  {
    [constants.ADD_DRIVER_OR_ASSISTANT_FORM_DATA]: handleAddDriverOrAssistantFormData,
    [constants.ADD_DRIVER_OR_ASSISTANT]: handleAddDriverOrAssistantRequest,
    [constants.ADD_DRIVER_OR_ASSISTANT_SUCCESS]: handleAddDriverOrAssistantRequestSuccess,
    [constants.ADD_DRIVER_OR_ASSISTANT_ERROR]: handleAddDriverOrAssistantRequestError,
    [constants.ADD_DRIVER_OR_ASSISTANT_RESET]: addDriverOrAssistantReset,
    [constants.ADD_DRIVER_OR_ASSISTANT_REFRESH]: handleAddDriverOrAssistantRefresh,
    [constants.DELETE_DOA_IN_STATE]: handleDeleteDOAInState
  },
  initialState
);
