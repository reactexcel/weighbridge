import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  data: []
};

const getUserRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
});
const getUserSuccess = (state, action) =>{
 return update(state, {
    data: { $set: action.payload },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
  });
}
const getUserError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });

export default handleActions(
  {
    [constants.GET_USER]: getUserRequest,
    [constants.GET_USER_SUCCESS]: getUserSuccess,
    [constants.GET_USER_ERROR]: getUserError
  },
  initialState
);
