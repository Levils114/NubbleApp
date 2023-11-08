import {
  getEmailAttributeSchema,
  getLoginPasswordAttributeSchema,
} from '@helpers';
import {z} from 'zod';

export const loginFormSchema = z.object({
  email: getEmailAttributeSchema(),
  password: getLoginPasswordAttributeSchema(),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
