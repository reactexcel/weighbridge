import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putData, deleteData } from "../../services/callDynamo";

let i = 0;
export function* addDriverOrAssistantRequest(action) {
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
  let data = {
    key: i++,
    id: action.payload.id,
    name: action.payload.data.name,
    role: action.payload.data.role
  }
  try{
    const response = yield call(putData, params);
    if(response){
      yield put(actions.addDriverOrAssistantSuccess(data));
    }
  } catch(error){
    yield put(actions.addDriverOrAssistantError());
  }
  
}

export function* deleteDOARequest(action) {
  const params = {
    Key: {
      "Id": {
        S: action.payload
      }
    },
    TableName: "DriverAndAssistant"
  };
  try {
    const response = yield call(deleteData, params);
    if (response) {
      yield put(actions.deleteDOASuccess(action.payload));
    }
  } catch (error) {
    yield put(actions.deleteDOAError(error));
  }
}