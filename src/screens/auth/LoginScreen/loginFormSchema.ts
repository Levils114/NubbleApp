import {z} from 'zod';
import {getEmailAttributeSchema, getPasswordAttributeSchema} from '@helpers';

export const loginFormSchema = z.object({
  email: getEmailAttributeSchema(),
  password: getPasswordAttributeSchema(),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
