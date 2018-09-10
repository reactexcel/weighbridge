import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getData, queryDb, getDocBatchData } from "../../services/callDynamo";

export default function* getSearchEditRequest(action) {
  let attributeN;
  if (action.payload.search === "Lorry") {
    attributeN = "Number Plate";
  } else if (action.payload.search === "WeighTable") {
    attributeN = "Ticket No";
  }
  const lorryparams = {
    TableName: "Lorry",
    ExpressionAttributeNames: {
      "#em": "Number Plate"
    },
    ExpressionAttributeValues: {
      ":v1": {
        S: action.payload.value
      }
    },
    KeyConditionExpression: "#em = :v1"
  };
  const weighparams = {
    TableName: "WeighTable",
    ExpressionAttributeNames: {
      "#em": "Ticket No"
    },
    ExpressionAttributeValues: {
      ":v1": {
        S: action.payload.value
      }
    },
    KeyConditionExpression: "#em = :v1"
  };

  const supplierparams = {
    TableName: "SupplierTable",
    ExpressionAttributeNames: {
      "#em": "Name"
    },
    ExpressionAttributeValues: {
      ":v1": {
        S: action.payload.value
      }
    },
    FilterExpression: "#em = :v1"
  };
  try {
    const response = yield call(queryDb, weighparams);
    const response2 = yield call(getData, supplierparams);

    const response3 = yield call(queryDb, lorryparams);

    if (response && response2 && response3) {
      yield put(
        actions.searchEditSuccess(
          ...response.Items,
          ...response2.Items,
          ...response3.Items
        )
      );
    }
  } catch (error) {
    yield put(actions.searchEditError());
  }
}
