import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putData, deleteData, putDocData } from "../../services/callDynamo";

let i = 0;
export function* addLorryRequest(action) {
  let a = {};
  let p = {
    "Number Plate": action.payload.lorrynumber,
    "Weight W/o Load": action.payload.wwload,
    "Driver Name1": action.payload.drivername1,
    "Driver Name2": action.payload.drivername2,
    "Co-Driver1": action.payload.codriver1,
    "Co-Driver2": action.payload.codriver2
  };
  let arr = Object.keys(p);
  arr.forEach(val => {
    if (p[val] != "") a[val] = p[val];
  });

  let params = {
    Item: a,
    TableName: "Lorry"
  };
  console.log(i);
  
  let data = {
    key: i++,
    lorrynumber: action.payload.lorrynumber,
    wwload: action.payload.wwload,
    drivername1: action.payload.drivername1,
    drivername2: action.payload.drivername2,
    codriver1: action.payload.codriver1,
    codriver2: action.payload.codriver2
 
  } 
  try {
    const response = yield call(putDocData, params);
    if (response) {
      yield put(actions.addLorrySuccess(data));
    }
  } catch (error) {
    yield put(actions.addLorryError(error));
  }
}

export function* deleteLorryRequest(action) {
  const params = {
    Key: {
      "Number Plate": {
        S: action.payload
      }
    },
    TableName: "Lorry"
  };
  try {
    const response = yield call(deleteData, params);
    if (response) {
      yield put(actions.deleteLorrySuccess(action.payload));
    }
  } catch (error) {
    yield put(actions.deleteLorryError(error));
  }
}
