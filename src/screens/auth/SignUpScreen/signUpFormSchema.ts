import {
  getEmailAttributeSchema,
  getSignUpPasswordAttributeSchema,
} from '@helpers';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpFormSchema = z.object({
  username: z.string().regex(userNameRegex, 'Username inválido').toLowerCase(),
  firstName: z.string().nonempty('Nome obrigatório'),
  lastName: z.string().nonempty('Nome obrigatório'),
  email: getEmailAttributeSchema(),
  password: getSignUpPasswordAttributeSchema(),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
