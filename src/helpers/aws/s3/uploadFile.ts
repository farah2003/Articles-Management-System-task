import fs from 'fs';
import AWS from 'aws-sdk';
import config from '../../../config';

const { awsAccessKeyId, awsSecretAccessKey, awsRegion, awsBucketName } =
  config.aws;
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: awsRegion,
  credentials: {
    accessKeyId: awsAccessKeyId,
    secretAccessKey: awsSecretAccessKey,
  },
});

export const uploadFile = async (file: any): Promise<any> => {
  const fileStream = fs.createReadStream(file.path);
  try {
    const result = await s3
      .upload({
        Body: fileStream,
        Bucket: awsBucketName,
        Key: file.originalname,
      })
      .promise();
    console.log(
      'Successfully uploaded data to ' + 'farahawsbucket' + '/' + 'keyName'
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};
