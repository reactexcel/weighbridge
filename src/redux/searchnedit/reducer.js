import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  searchwhat: "WeighTable",
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {}
};

const searchneditFormData = (state, action) =>
  update(state, {
    searchwhat: { $set: action.payload }
  });

const searchEditRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const searchEditSuccess = (state, action) => {
    return update(state, {
    data: {$set: action.payload},
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false }
    });
};
const searchEditError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });

export default handleActions(
  {
    [constants.SEARCH_EDIT_FORMDATA]: searchneditFormData,
    [constants.GET_SEARCH_EDIT]: searchEditRequest,
    [constants.GET_SEARCH_EDIT_SUCCESS]: searchEditSuccess,
    [constants.GET_SEARCH_EDIT_ERROR]: searchEditError
  },
  initialState
);
