import { dynamodb } from "../config";

export async function getdata(params) {
  let a = await dynamodb.scan(params, (err, data) => {
      if (err) {
        return err;
      } else {
        return data;
      }
    })
    return a;
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
