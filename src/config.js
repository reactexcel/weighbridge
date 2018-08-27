import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIAJO47LOOLEI26LN3A",
    secretAccessKey: "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"
  }
});
export const dynamodb = new AWS.DynamoDB();
