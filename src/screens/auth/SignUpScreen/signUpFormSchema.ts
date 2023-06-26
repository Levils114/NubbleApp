import {z} from 'zod';
import {getEmailAttributeSchema, getPasswordAttributeSchema} from '@helpers';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpFormSchema = z.object({
  username: z.string().regex(userNameRegex, 'Username inválido').toLowerCase(),
  fullname: z.string().nonempty('Nome completo obrigatório'),
  email: getEmailAttributeSchema(),
  password: getPasswordAttributeSchema(),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
