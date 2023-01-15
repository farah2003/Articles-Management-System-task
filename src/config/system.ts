import joi from 'joi';
const systemSchema = joi
  .object({
    SECRET_KEY: joi.string().required(),
    ADMIN_PASSWORD: joi.string().required(),
    ADMIN_EMAIL: joi.string().required(),
    SENDGRID_API_KEY: joi.string().required(),
  })
  .unknown();

interface systemVariable {
  secretKey: string;
  adminPassword: string;
  adminEmail: string;
  apiKey: string;
}
export const system = (): systemVariable => {
  const { value, error } = systemSchema.validate(process.env);

  if (error) {
    throw new Error(`validation error  ${error}`);
  }
  return {
    secretKey: value.SECRET_KEY,
    adminPassword: value.ADMIN_PASSWORD,
    adminEmail: value.ADMIN_EMAIL,
    apiKey: value.SENDGRID_API_KEY,
  };
};
