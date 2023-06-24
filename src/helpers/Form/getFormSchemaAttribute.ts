import {z} from 'zod';

export function getEmailAttributeSchema() {
  return z.string().email('E-mail inválido');
}

export function getPasswordAttributeSchema() {
  return z.string().min(6, 'Senha deve conter pelo menos 6 dígitos');
}
