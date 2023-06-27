import {getEmailAttributeSchema, getPasswordAttributeSchema} from '@helpers';
import {z} from 'zod';

export const loginFormSchema = z.object({
  email: getEmailAttributeSchema(),
  password: getPasswordAttributeSchema(),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
