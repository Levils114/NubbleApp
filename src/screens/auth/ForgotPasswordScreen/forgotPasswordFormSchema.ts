import {z} from 'zod';
import {getEmailAttributeSchema} from '@helpers';

export const forgotPasswordFormSchema = z.object({
  email: getEmailAttributeSchema(),
});

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;
