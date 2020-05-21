import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putData, putDocData } from "../../services/callDynamo";

export default function* addUserRequest(action) {
  const params = {
      Item: {
        "UserId": action.payload.email,
        "Username": action.payload.username,
        "Password": action.payload.password,
        "Address": action.payload.address,
        "Dob": action.payload.dob,
        "UserType": action.payload.usertype
      },
      TableName: "UserProfile"
  }
  try {
    const response = yield call(putDocData, params);
    if (response) {
      yield put(actions.addUserSuccess());
    }
  } catch (error) {
    yield put(actions.addUserError());
  }
}
