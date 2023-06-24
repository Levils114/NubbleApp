import {z} from 'zod';
import {getEmailAttributeSchema} from '../../../helpers/Form/getFormSchemaAttribute';

export const forgotPasswordFormSchema = z.object({
  email: getEmailAttributeSchema(),
});

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;
