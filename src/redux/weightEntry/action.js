import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getData, putData } from "../../services/callDynamo";
import storageHelper from "../../services/offlineService";

export function* lorryDataRequest(action) {
  let params = {
    TableName: "Lorry"
  };
  try {
    const response = yield call(getData, params);
    if (response) {
      yield call(storageHelper,"lorryData",response.Items);
      yield put(actions.getLorrySuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.getLorryError(error));
  }
}

export function* supplierDataRequest(action) {
  let params = {
    TableName: "Supplier"
  };
  try {
    const response = yield call(getData, params);
    if (response) {
      yield call(storageHelper,"supplierData",response.Items);
      yield put(actions.getSupplierSuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.getSupplierError(error));
  }
}


export function* weighEntryRequest(action) {
  let params = {
    Item: {
      "Ticket No": {
        "S": action.payload.ticketnumber
      },
      "Lorry Number": {
        "S": action.payload.lorrynumber
      },
      "Supplier Origin": {
        "S": action.payload.supplierorigin
      },
      "supplier Name": {
        "S": action.payload.suppliername
      },
      "Driver Name1": {
        "S": action.payload.drivername1
      },
      "Driver Name2": {
        "S": action.payload.drivername2
      },
      "Co-Driver1": {
        "S": action.payload.assistantname1
      },
      "Co-Driver2": {
        "S": action.payload.assistantname2
      },
      "with Load": {
        "N": action.payload.wload
      },
      "w/o Load": {
        "N": action.payload.woload
      },
      "Unripe": {
        "S": action.payload.unripe
      },
      "Net Weight": {
        "N": action.payload.netweight
      },
      "Deduct": {
        "S": action.payload.deduct
      }
    },
    TableName: "WeighTable"
  };
  try {
    const response = yield call(putData, params);
    if (response) {
      yield put(actions.weighEntrySuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.weighEntryError(error));
  }
}
