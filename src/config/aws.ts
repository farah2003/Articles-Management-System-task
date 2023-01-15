import Joi from 'joi';

const awsCredentialsSchema = Joi.object({
  aws_access_key_id: Joi.string().required(),
  aws_secret_access_key: Joi.string().required(),
  aws_region: Joi.string().required(),
  aws_bucket_name: Joi.string().required(),
}).unknown();

interface AwsCredntials {
  awsAccessKeyId: string;
  awsSecretAccessKey: string;
  awsRegion: string;
  awsBucketName: string;
}

export const aws = (): AwsCredntials => {
  const { error, value } = awsCredentialsSchema.validate(process.env);
  if (error) throw new Error(`aws validate error${error}`);
  return {
    awsAccessKeyId: value.aws_access_key_id,
    awsSecretAccessKey: value.aws_secret_access_key,
    awsRegion: value.aws_region,
    awsBucketName: value.aws_bucket_name,
  };
};
