import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putData } from "../../services/callDynamo";

function* addSupplierRequest(action) {
  let params = {
    Item: {
      "Supplier Id": {
        S: action.payload.id
      },
      "Name": {
        S: action.payload.data.name
      },
      "Ic": {
        S: action.payload.data.ic
      },
      "Date Of Birth": {
        S: action.payload.data.dob
      },
      "Address 1": {
        S: action.payload.data.address1
      },
      "Address 2": {
        S: action.payload.data.address2
      },
      "Poskod": {
        S: action.payload.data.poskod
      },
      "Phone No": {
        N: action.payload.data.phoneno
      },
      "Race": {
        S: action.payload.data.race
      },
      "Sex": {
        S: action.payload.data.sex
      },
      "Spouse Date Of Birth": {
        S: action.payload.data.spousedob
      },
      "License": {
        S: action.payload.data.licenseno
      },
      "Expiry Date": {
        S: action.payload.data.licenseexpirydate
      }
    },
    TableName: "Supplier"
  };
  try{
    const response = yield call(putData, params);
    if(response){
      yield put(actions.addSupplierSuccess(response));
    }
  } catch(error){
    yield put(actions.addSupplierError());
  }
  
}

export default addSupplierRequest;
