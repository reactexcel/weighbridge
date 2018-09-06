import { dynamodb, docClient } from "../config";


export function getDocBatchData(params) {
  return new Promise((resolve, reject) => {
    docClient.batchGet(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}


export function queryDb(params) {
  return new Promise((resolve, reject) => {
    dynamodb.query(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function putDocData(params) {
  return new Promise((resolve, reject) => {
    docClient.put(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function deleteData(params) {
  return new Promise((resolve, reject) => {
    dynamodb.deleteItem(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function getData(params) {
  return new Promise((resolve, reject) =>
    dynamodb.scan(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  );
}

export function putBatchData(params) {
  return new Promise((resolve, reject) => {
    dynamodb.batchWriteItem(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function putData(params) {
  return new Promise((resolve, reject) => {
    dynamodb.putItem(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
