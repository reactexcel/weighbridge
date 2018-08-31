import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formData: {
    role: "",
    name: ""
  },
  isLoading: false,
  isSuccess: false,
  isError: false
};

const handleAddDriverOrAssistantFormData = (state, action) => {
  return update(state, {
    formData: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });
};

const handleAddDriverOrAssistantRequest = (state, action) => {
  return update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
};

const handleAddDriverOrAssistantRequestSuccess = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });
};

const handleAddDriverOrAssistantRequestError = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });
};

export default handleActions(
  {
    [constants.ADD_DRIVER_OR_ASSISTANT_FORM_DATA]: handleAddDriverOrAssistantFormData,
    [constants.ADD_DRIVER_OR_ASSISTANT]: handleAddDriverOrAssistantRequest,
    [constants.ADD_DRIVER_OR_ASSISTANT_SUCCESS]: handleAddDriverOrAssistantRequestSuccess,
    [constants.ADD_DRIVER_OR_ASSISTANT_ERROR]: handleAddDriverOrAssistantRequestError
  },
  initialState
);
