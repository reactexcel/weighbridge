import { dynamodb } from "../config";

export function getdata(params) {
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

export function putdata(params) {
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
