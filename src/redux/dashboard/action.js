import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putBatchData } from "../../services/callDynamo";
import storageHelper from "../../services/offlineService";

export function* setBatchDataRequest(action){  
    const lorryItems = [];
    const weighItems = [];
    let params;
    action.payload.lorryData.forEach(item =>{
      lorryItems.push(
        {
          PutRequest: {
            Item:{
              "Number Plate": {
                S: item.lorrynumber
              },
              "Weight W/o Load": {
                N: item.wwload
              },
              "Driver Name1": {
                S: item.drivername1
              },
              "Driver Name2": {
                S: item.drivername2
              },
              "Co-Driver1": {
                S: item.codriver1
              },
              "Co-Driver2": {
                S: item.codriver2
              }
            }
          }
        }
      )
    });  
    action.payload.weighData.forEach(item => {
      weighItems.push( 
      {
        PutRequest: {
          Item: {
            "Ticket No": {
              "S": item.ticketnumber
            },
            "Lorry Number": {
              "S": item.lorrynumber
            },
            "Supplier Origin": {
              "S": item.supplierorigin
            },
            "supplier Name": {
              "S": item.suppliername
            },
            "Driver Name1": {
              "S": item.drivername1
            },
            "Driver Name2": {
              "S": item.drivername2
            },
            "Co-Driver1": {
              "S": item.assistantname1
            },
            "Co-Driver2": {
              "S": item.assistantname2
            },
            "with Load": {
              "N": item.wload
            },
            "w/o Load": {
              "N": item.woload
            },
            "Unripe": {
              "S": item.unripe
            },
            "Net Weight": {
              "N": item.netweight
            },
            "Deduct": {
              "S": item.deduct
            }
          }
        }
      });
    });
    if(weighItems.length !== 0 && lorryItems.length !== 0){
      params = {
        RequestItems: {
        "WeighTable": weighItems,
        "Lorry": lorryItems
        }
      }
    } else if(weighItems.length !==0){
      params = {
        RequestItems: {
          "WeighTable": weighItems
        }
      }
    }
    else if(lorryItems.length !== 0){
      params = {
        RequestItems: {
        "Lorry": lorryItems
        }
      }
    }    
    try{
      const response = yield call(putBatchData, params);
      yield call(storageHelper);
      if(response){
        yield put(actions.setBatchDataSuccess(response));        
      }
    }
    catch(error){
      yield put(actions.setBatchDataError());
    } 
  }
  