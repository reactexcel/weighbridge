import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { putBatchData } from "../../services/callDynamo";
import storageHelper from "../../services/offlineService";

export function* setBatchDataRequest(action){  
    const lorryItems = [];
    const weighItems = [];
    const supplierItems = [];
    const driverOrAssistantItems = [];
   
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
    console.log(action.payload.driverOrAssistantData);
    action.payload.driverOrAssistantData.forEach(item =>{
      
      driverOrAssistantItems.push(
      {
        PutRequest: {
          Item: {
            "Id": {
              S: item.id
            },
            "Name": {
              S: item.data.name
            },
            "Role": {
              S: item.data.role
            }
          }
        }
      });
    })
    action.payload.supplierData.forEach(item => {
      supplierItems.push(
        {
          PutRequest: {
            Item: {
              "Supplier Id": {
                S: item.id
              },
              "Name": {
                S: item.data.name
              },
              "Ic": {
                S: item.data.ic
              },
              "Date Of Birth": {
                S: item.data.dob
              },
              "Address 1": {
                S: item.data.address1
              },
              "Address 2": {
                S: item.data.address2
              },
              "Poskod": {
                S: item.data.poskod
              },
              "Phone No": {
                N: item.data.phoneno
              },
              "Race": {
                S: item.data.race
              },
              "Sex": {
                S: item.data.sex
              },
              "Spouse Date Of Birth": {
                S: item.data.spousedob
              },
              "License": {
                S: item.data.licenseno
              },
              "Expiry Date": {
                S: item.data.licenseexpirydate
              }
            }
          }
        })
    })
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
    const requestArray = [
      { "Lorry": lorryItems },
      { "WeighTable": weighItems },
      { "Supplier": supplierItems },
      { "DriverAndAssistant": driverOrAssistantItems }
    ];
    let requestItems = {};
    requestArray.forEach(function(requestArrayItem){
      let keys = Object.keys(requestArrayItem);
      keys.forEach(function(key){
        if(requestArrayItem[key].length !== 0)
        requestItems[key] = requestArrayItem[key];
      })
    });
    const params = {
      RequestItems: requestItems
    }
    console.log(params);
    
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
  