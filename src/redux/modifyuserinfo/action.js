import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getData } from "../../services/callDynamo";

export default function* getUserRequest(action) {
  console.log(action);
  const params = {
    ProjectionExpression: "UserId, Username, Address, Dob, UserType",
    TableName: "UserProfile"
  };
  try {
    const response = yield call(getData, params);
    if (response) {
        console.log(response);
        
      yield put(actions.getUserSuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.getUserError());
  }
}
