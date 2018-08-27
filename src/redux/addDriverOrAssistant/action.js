import { dynamodb } from "../../config";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

function* addDriverOrAssistantRequest(action) {
  let params = {
    Item: {
      "Id": {
        S: action.payload.id
      },
      "Name": {
        S: action.payload.name
      },
      "Role": {
        S: action.payload.role
      }
    },
    TableName: "DriverAndAssistant"
  };
  dynamodb.putItem(params, function(err, data) {
    if (err) {
      yield put(actions.addDriverOrAssistantError())
    } else {
      yield put(actions.addDriverOrAssistantSuccess())
    }
  });
}

export default addDriverOrAssistantRequest;