import joi from 'joi';
const systemSchema = joi
  .object({
    SECRET_KEY: joi.string().required(),
  })
  .unknown();

interface systemVariable {
  secretKey: string;
}
export const system = (): systemVariable => {
  const { value, error } = systemSchema.validate(process.env);

  if (error) {
    throw new Error(`validation error  ${error}`);
  }
  return {
    secretKey: value.SECRET_KEY,
  };
};
