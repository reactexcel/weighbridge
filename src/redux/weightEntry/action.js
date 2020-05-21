import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getData, putData, updateData, putDocData } from "../../services/callDynamo";
import storageHelper from "../../services/offlineService";

export function* getTicketNumberRequest(action) {
  let params = {
    TableName: "values",
    Key: { valueName: "nextTicketNumber" },
    ExpressionAttributeNames: { "#a": "value" },
    UpdateExpression: "set #a = #a + :x",
    ReturnValues: "ALL_OLD",
    ExpressionAttributeValues: {
      ":x": 1
    }
  };
  try {
    const response = yield call(updateData, params);
    if (response) {
      yield put(actions.getTicketNumberSuccess(response.Attributes.value));
    }
  } catch (error) {
    yield put(actions.getTicketNumberError());
  }
}

export function* lorryDataRequest(action) {
  let params = {
    TableName: "Lorry"
  };
  try {
    const response = yield call(getData, params);
    if (response) {
      yield call(storageHelper, "lorryData", response.Items);
      yield put(actions.getLorrySuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.getLorryError(error));
  }
}

export function* supplierDataRequest(action) {
  let params = {
    TableName: "SupplierTable"
  };
  try {
    const response = yield call(getData, params);
    if (response) {
      yield call(storageHelper, "supplierData", response.Items);
      yield put(actions.getSupplierSuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.getSupplierError(error));
  }
}

export function* weighEntryRequest(action) {
  /* let ticketnumber = action.payload.ticketnumber;
  if(action.payload.ticketnumber === ""){
    let params = {
      TableName: "values",
      Key: { valueName: "nextTicketNumber" },
      ExpressionAttributeNames: { "#a": "value" },
      UpdateExpression: "set #a = #a + :x",
      ReturnValues: "ALL_OLD",
      ExpressionAttributeValues: {
        ":x": 1
      }
    };
    try {
      const response = yield call(updateData, params);
      if(response){
        ticketnumber = response.Attributes.value;
      }
    } catch(error){
      yield 
    }
  } */
  let a = {};
  let p = {
    "Ticket No": action.payload.ticketnumber,
    "Lorry Number": action.payload.lorrynumber,
    "Supplier Origin": action.payload.supplierorigin,
    "supplier Name": action.payload.suppliername,
    "Driver Name1": action.payload.drivername1,
    "Driver Name2": action.payload.drivername2,
    "Co-Driver1": action.payload.assistantname1,
    "Co-Driver2": action.payload.assistantname2,
    "with Load": action.payload.wload,
    "w/o Load": action.payload.woload,
    "Unripe": action.payload.unripe,
    "Net Weight": action.payload.netweight,
    "Deduct": action.payload.deduct
  };
  let arr = Object.keys(p);
  arr.forEach(val => {
    if (p[val] != "") a[val] = p[val];
  });
  let params = {
    Item: a,
    TableName: "WeighTable"
  };
  try {
    const response = yield call(putDocData, params);
    if (response) {
      yield put(actions.getTicketNumber());
      yield put(actions.weighEntrySuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.weighEntryError(error));
  }
}
