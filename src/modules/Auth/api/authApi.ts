import {api} from '@api/';
import {UserApi} from '@modules';

import {IAuthApi} from '../types/IAuthApi';
import {IAuthLogoutResponse} from '../types/IAuthLogoutResponse';
import {IAuthSignUpForm} from '../types/IAuthSignUp';

export async function authLogin(
  email: string,
  password: string,
): Promise<IAuthApi> {
  const {data} = await api.post<IAuthApi>('/login', {
    email,
    password,
  });

  return data;
}

export async function authLogout(): Promise<IAuthLogoutResponse> {
  const {data} = await api.get<IAuthLogoutResponse>('/profile/logout');

  return data;
}

export async function authSignUp(
  authSignUpProps: IAuthSignUpForm,
): Promise<UserApi> {
  const {data} = await api.post<UserApi>('/register', authSignUpProps);

  return data;
}

export const authApi = {
  authLogin,
  authLogout,
  authSignUp,
};
