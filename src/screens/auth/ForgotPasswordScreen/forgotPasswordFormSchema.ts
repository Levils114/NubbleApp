import {getEmailAttributeSchema} from '@helpers';
import {z} from 'zod';

export const forgotPasswordFormSchema = z.object({
  email: getEmailAttributeSchema(),
});

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;
