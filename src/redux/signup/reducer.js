import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../../redux/constants";

let initialState = {
    formdata:{
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    },
  data: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
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

export default handleActions(
  {
    [constants.SIGNUP]: userSignUpRequest,
    [constants.SIGNUP_SUCCESS]: userSignUpSuccess,
    [constants.SIGNUP_ERROR]: userSignUpError,
    [constants.SIGNUP_FORMDATA]: userSignUpFormData
  },
  initialState
);
