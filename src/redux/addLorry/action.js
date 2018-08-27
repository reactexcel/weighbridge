import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putdata } from "../../services/callDynamo";

function* addLorryRequest(action) {
  let params = {
    Item: {
      "Number Plate": {
        S: action.payload.lorrynumber
      },
      "Weight W/o Load": {
        S: action.payload.wwload
      },
      "Driver Name1": {
        S: action.payload.drivername1
      },
      "Driver Name2": {
        S: action.payload.drivername2
      },
      "Co-Driver1": {
        S: action.payload.codriver1
      },
      "Co-Driver2": {
        S: action.payload.codriver2
      }
    },
    TableName: "Lorry"
  };
  try {
    const response = yield call(putdata, params);
    if (response) {
      yield put(actions.addLorrySuccess(response));
    }
  } catch (error) {
    yield put(actions.addLorryError(error));
  }
}

export default addLorryRequest;
