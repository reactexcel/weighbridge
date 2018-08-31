import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putData } from "../../services/callDynamo";

function* addDriverOrAssistantRequest(action) {
  let params = {
    Item: {
      "Id": {
        S: action.payload.id
      },
      "Name": {
        S: action.payload.data.name
      },
      "Role": {
        S: action.payload.data.role
      }
    },
    TableName: "DriverAndAssistant"
  };
  try{
    const response = yield call(putData, params);
    if(response){
      yield put(actions.addDriverOrAssistantSuccess(response));
    }
  } catch(error){
    yield put(actions.addDriverOrAssistantError());
  }
  
}

export default addDriverOrAssistantRequest;