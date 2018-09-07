import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formdata: {
    usertype: "",
    username: "",
    email: "",
    password: "",
    address: "",
    dob: ""
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const addUserRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
});
const addUserSuccess = (state, action) =>{
    console.log(state);
    
 return update(state, {
    // data: { $push: [action.payload] },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    formdata: {
        usertype: { $set: "" },
        username: { $set: "" },
        email: { $set: "" },
        password: { $set: "" },
        address: { $set: "" },
        dob: { $set: "" },
        message: { $set: "User Added" }
    }
  });
}
const addUserError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });

const addUserFormData = (state, action) =>
  update(state, {
    formdata: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });

export default handleActions(
  {
    [constants.ADD_USER]: addUserRequest,
    [constants.ADD_USER_SUCCESS]: addUserSuccess,
    [constants.ADD_USER_ERROR]: addUserError,
    [constants.ADD_USER_FORMDATA]: addUserFormData
  },
  initialState
);
