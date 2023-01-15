import { CustomError } from './../error/customeError';
import sgMail from '@sendgrid/mail';
import config from '../../config';
import { ResponseError } from '@sendgrid/helpers/classes';

const { apiKey, adminEmail } = config.system;

sgMail.setApiKey(apiKey);

export default async (
  email: string,
  dynamicData: object,
  templateId: string
): Promise<void> => {
  try {
    const message = {
      to: email,
      from: adminEmail,
      templateId,
      dynamic_template_data: dynamicData,
    };

    await sgMail.send(message);
  } catch (error) {
    if (error instanceof ResponseError) {
      throw CustomError(error.message, error.code);
    }
    throw error;
  }
};
