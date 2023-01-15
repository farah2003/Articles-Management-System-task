import joi from 'joi';
const databaseSchema = joi
  .object({
    DB_URL: joi.string().required(),
  })
  .unknown();

/// why we need unknown because if there all the envoirment variable withour DB_URL allow to be and at give as this error database validate error ValidationError: "GJS_DEBUG_TOPICS" is not allowed
///the return value here is not turec
interface DatabaseUrl {
  url: string;
}

export const database = (): DatabaseUrl => {
  const { error, value } = databaseSchema.validate(process.env);
  // enven if there is an error there will be a value so that we search about error first and thorw to not continue

  if (error) throw new Error(`database validate error ${error}`);
  return {
    url: value.DB_URL,
  };
};
