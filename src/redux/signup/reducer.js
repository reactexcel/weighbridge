import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../../redux/constants";

let initialState = {
  formdata: {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    checked: false
  },
  data: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  validateMessage: "",
  checkTC: ""
};
const userSignUpFormData = (state, action) =>
  update(state, {
    formdata: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });
const userSignUpRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: "" }
  });
const userSignUpSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: "SignUp success" }
  });
const userSignUpError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });
const signUpRedirect = (state, action) =>
  update(state, {
    isSuccess: { $set: false },
    formdata: {
      name: { $set: "" },
      email: { $set: "" },
      password: { $set: "" },
      confirmpassword: { $set: "" },
      checked: {$set: false}
    },
    message: { $set: "" }
  });
const passwordDontMatch = (state, action) =>
  update(state, {
    validateMessage: { $set: "Passwords dont Match" }
  });
const userSignUpCheck = (state, action) =>
  update(state, {
    checkTC: {$set: ""},
    formdata: {
      checked: {$set: action.payload}
    }
  })
const checkTandC = (state, action) =>
  update(state, {
    checkTC: { $set: "Please Check Terms and Conditions" }
  });

export default handleActions(
  {
    [constants.SIGNUP]: userSignUpRequest,
    [constants.SIGNUP_SUCCESS]: userSignUpSuccess,
    [constants.SIGNUP_ERROR]: userSignUpError,
    [constants.SIGNUP_FORMDATA]: userSignUpFormData,
    [constants.SIGNUP_REDIRECT]: signUpRedirect,
    [constants.SIGNUP_PASSWORD_MATCH_ERROR]: passwordDontMatch,
    [constants.SIGNUP_TC_CHECK]: checkTandC,
    [constants.SIGNUP_CHECKED]: userSignUpCheck
  },
  initialState
);
