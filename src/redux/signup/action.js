import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putData, queryDb } from "../../services/callDynamo";

export default function* signupRequest(action) {
    let param = {
        TableName: "UserProfile",
        KeyConditionExpression: "UserId = :v", 
        ExpressionAttributeValues: {
            ":v": {
                S: action.payload.email
            }
        }
    };
    let params = {
        Item: {
            "UserId": { 
                "S": action.payload.email
            },
            "Username": {
                "S": action.payload.name
            },
            "Password": {
                "S": action.payload.password
            }
        },
        TableName: "UserProfile"
    };
    try {
      const res = yield call(queryDb, param);
        if(res.Count >0){
            yield put(actions.signUpError("Email Already Exists"));
        } else {
            try{
                const response = yield call(putData, params);
                if(response){
                    yield put(actions.signUpSuccess(response));
                }
            } catch(error){
                yield put(actions.signUpError("Server Error")); 
            }

        }
  } catch (error) {
      yield put(actions.signUpError());
  }
}
