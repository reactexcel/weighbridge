import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getData, putData, queryDb } from "../../services/callDynamo";
import storageHelper from "../../services/offlineService";

export function* signupRequest(action) {
    var param = {
        ExpressionAttributeValues: {
         ":v1": {
           S: action.payload.email
          }
        }, 
        KeyConditionExpression: "User Id = :v1", 
        ProjectionExpression: "SongTitle", 
        TableName: "Music"
       };
  let params = {
      Item: {
          "User Id": { 
              "S": action.payload.userid
          },
          "name": {
              "S": action.payload.name
          },
          "password": {
              "S": action.payload.password
          }
      },
    TableName: "UserProfile"
  };
  try {
      const res = yield call(queryDb, params);
   // const response = yield call(putData, params);
    if(res){
        console.log(res);
        
       // yield put(actions.logInSuccess(response));
    }
  } catch (error) {
      console.log(error);
      
      //yield put(actions.logInError());
  }
}
