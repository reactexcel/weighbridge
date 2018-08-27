import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getdata, putdata } from "../../services/callDynamo";

export function* lorryDataRequest(action) {
  let params = {
    TableName: "Lorry"
  };
  try {
    const response = yield call(getdata, params);
    if (response) {
      yield put(actions.getLorrySuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.getLorryError(error));
  }
}

export function* weighEntryRequest(action) {
  let params = {
    Item: {
      "Ticket No": {
        S: action.payload.ticketnumber
      },
      "Lorry Number": {
        S: action.payload.lorrynumber
      },
      "Supplier Origin": {
        S: action.payload.supplierorigin
      },
      "supplier Name": {
        S: action.payload.suppliername
      },
      "Driver Name1": {
        S: action.payload.drivername1
      },
      "Driver Name2": {
        S: action.payload.drivername2
      },
      "Co-Driver1": {
        S: action.payload.assistantname1
      },
      "Co-Driver2": {
        S: action.payload.assistantname2
      },
      "with Load": {
        S: action.payload.wload
      },
      "w/o Load": {
        S: action.payload.woload
      },
      Unripe: {
        S: action.payload.unripe
      },
      "Net Weight": {
        S: action.payload.netweight
      },
      Deduct: {
        S: action.payload.deduct
      }
    },
    TableName: "WeighTable"
  };
  try {
    const response = yield call(putdata, params);
    if (response) {
      yield put(actions.weighEntrySuccess(response.Items));
    }
  } catch (error) {
    yield put(actions.weighEntryError(error));
  }
}
