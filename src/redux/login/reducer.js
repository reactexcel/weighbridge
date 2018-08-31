import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../../redux/constants";

let initialState = {
  data: {},
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};

const userLoginRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: "" }
  });
const userLoginSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isLoggedIn: { $set: true },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: "Login success" }
  });
const userLoginError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });

export default handleActions(
  {
    [constants.LOGIN]: userLoginRequest,
    [constants.LOGIN_SUCCESS]: userLoginSuccess,
    [constants.LOGIN_ERROR]: userLoginError
  },
  initialState
);
