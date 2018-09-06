import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../../redux/constants";

let initialState = {
  formdata:{
    name: "",
    password: ""
  },
  data: {},
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};

const userLoginFormData = (state, action) =>
  update(state, {
    formdata: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });
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
const loginRedirect = (state, action) =>
  update(state, {
    formdata: {
      name: {$set: ""},
      password: {$set: ""}
    },
    message: {$set: ""}
  });
const logoutSuccess = (state, action) =>
  {
    return update(state, {
    isSuccess: {$set: false},
    message: {$set: ""}
  })
}

export default handleActions(
  {
    [constants.LOGIN]: userLoginRequest,
    [constants.LOGIN_SUCCESS]: userLoginSuccess,
    [constants.LOGIN_ERROR]: userLoginError,
    [constants.LOGIN_FORMDATA]: userLoginFormData,
    [constants.LOGIN_REDIRECT]: loginRedirect,
    [constants.LOGOUT_SUCCESS]: logoutSuccess
  },
  initialState
);
