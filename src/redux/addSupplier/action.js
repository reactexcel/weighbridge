import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putData, deleteData } from "../../services/callDynamo";

let i = 0;
export function* addSupplierRequest(action) {
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
  console.log(i);
  
  const data = {
    key: i++,
    id: action.payload.id,
    name: action.payload.data.name,
    dob: action.payload.data.dob,
    phoneno: action.payload.data.phoneno
  };
  try{
    const response = yield call(putData, params);
    if(response){
      console.log(data);
      
      yield put(actions.addSupplierSuccess(data));
    }
  } catch(error){
    yield put(actions.addSupplierError());
  }
  
}
export function* deleteSupplierRequest(action){
  const params = {
    Key: {
      "Supplier Id": {
        S: action.payload
      }
    },
    TableName: "Supplier"
  };
  try {
    const response = yield call(deleteData, params);
    if (response) {
      yield put(actions.deleteSupplierSuccess(action.payload));
    }
  } catch (error) {
    yield put(actions.deleteSupplierError(error));
  }
}

//export default addSupplierRequest;
