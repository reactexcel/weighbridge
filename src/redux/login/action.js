import { queryDb } from "../../services/callDynamo";
import { put, call } from "redux-saga/effects";
import * as actions from "../actions";

export default function* loginRequest(action) {
  let params = {
    TableName: "UserProfile",
    KeyConditionExpression: "#em = :v1",
    ExpressionAttributeNames: {
      "#em": "UserId"
    },
    ExpressionAttributeValues: {
      ":v1": {
        S: action.payload.name
      }
    }
  };
  try {
    const response = yield call(queryDb, params);
    if (response) {
      if (response.Count === 0) {
        yield put(actions.loginError("Email or Password do not match"));
      } else {
        if (response.Items[0].Password.S == action.payload.password) {
          yield put(
            actions.loginSuccess({
              username: response.Items[0].Username,
              type: response.Items[0].UserType
            })
          );
        } else {
          yield put(actions.loginError("Incorrect Password"));
        }
      }
    }
  } catch (error) {
    yield put(actions.loginError("Server Error"));
  }
}
