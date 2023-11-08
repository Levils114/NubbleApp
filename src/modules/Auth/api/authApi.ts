import {api} from '@api/';

import {IAuthApi} from '../types/IAuthApi';
import {IAuthLogoutResponse} from '../types/IAuthLogoutResponse';

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

export const authApi = {
  authLogin,
  authLogout,
};
