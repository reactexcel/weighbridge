import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getData, queryDb, getDocBatchData } from "../../services/callDynamo";

export default function* getSearchEditRequest(action) {
  console.log(action);
  let attributeN;
  if (action.payload.search === "Lorry") {
    attributeN = "Number Plate";
  } else if (action.payload.search === "WeighTable") {
    attributeN = "Ticket No";
  }
  console.log(attributeN);
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
  /* const params = {
        RequestItems: {
            'Lorry': {
              Keys: [{
                  "Number Plate": action.payload.value
              }]},
            'WeighTable': {
                Keys: [{
                    "Ticket No": action.payload.value
                }]
            }
            }
    }; */
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
    //KeyConditionExpression:
    ExpressionAttributeNames: {
      "#em": "Name"
    },
    ExpressionAttributeValues: {
      ":v1": {
        S: action.payload.value
      }
    },
    FilterExpression: "#em = :v1"
    //KeyConditionExpression: "#em = :v1",
    // QueryFilter: {
    //     'Name': {

    //         ComparisonOperator: "EQ",
    //     AttributeValueList: [{S: action.payload.value}]
    // }
  };
  // const param = {}
  console.log("=========");
  try {
    const response = yield call(queryDb, weighparams);
    const response2 = yield call(getData, supplierparams);

    const response3 = yield call(queryDb, lorryparams);

    if (response && response2 && response3) {
      console.log(...response.Items);
      console.log(...response2.Items);
      console.log(...response3.Items);

      yield put(
        actions.searchEditSuccess(
          ...response.Items,
          ...response2.Items,
          ...response3.Items
        )
      );
    }
  } catch (error) {
    console.log(error);

    //yield put(actions.searchEditError());
  }
  console.log("here");

  /* try {
        const response = yield call(getDocBatchData, params);
        if (response) {
            console.log(response);
            
         // yield put(actions.searchEditSuccess(response.Items));
        }
      } catch (error) {
          console.log(error);
          
        //yield put(actions.searchEditError());
      } */
}
