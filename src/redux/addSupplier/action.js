import { dynamodb } from "../../config";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

function* addSupplierRequest(action) {
  let params = {
    Item: {
      "Supplier Id": {
        S: action.payload.id
      },
      Name: {
        S: action.payload.name
      },
      Ic: {
        S: action.payload.ic
      },
      "Date Of Birth": {
        S: action.payload.dob
      },
      "Address 1": {
        S: action.payload.address1
      },
      "Address 2": {
        S: action.payload.address2
      },
      Poskod: {
        S: action.payload.poskod
      },
      "Phone No": {
        N: action.payload.phoneno
      },
      Race: {
        S: action.payload.race
      },
      Sex: {
        S: action.payload.sex
      },
      "Spouse Date Of Birth": {
        S: action.payload.spousedob
      },
      License: {
        S: action.payload.licenseno
      },
      "Expiry Date": {
        S: action.payload.licenseexpirydate
      }
    },
    TableName: "Supplier"
  };
  dynamodb.putItem(params, function(err, data) {
    if (err) {
      yield put(actions.addDriverOrAssistantError())
    } else {
      yield put(actions.addDriverOrAssistantSuccess())
    }
  });
}

export default addSupplierRequest;
