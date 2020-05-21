import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getData, deleteData } from "../../services/callDynamo";

export function* getUserRequest(action) {
  const params = {
    ProjectionExpression: "UserId, Username, Address, Dob, UserType",
    TableName: "UserProfile"
  };
  try {
    const response = yield call(getData, params);
    if (response) {
      yield put(actions.getUserSuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.getUserError());
  }
}

export function* deleteUserRequest(action) {
  const params = {
    Key: {
      "UserId": {
        S: action.payload
      }
    },
    TableName: "UserProfile"
  }
  try {
    const response = yield call(deleteData, params);
    if (response) {
      yield put(actions.getUser());
      yield put(actions.deleteUserSuccess(response));
    }
  } catch (error) {
    yield put(actions.deleteUserError());
  }
}