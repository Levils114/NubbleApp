import {api} from '@api/';
import {UserApi} from '@modules';

import {IAuthApi} from '../types/IAuthApi';
import {IAuthLogoutResponse} from '../types/IAuthLogoutResponse';
import {IAuthSignUpForm} from '../types/IAuthSignUp';
import {IFieldIsAvailableApi} from '../types/IFieldIsAvailableApi';

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

async function isUserNameAvailable(params: {
  username: string;
}): Promise<IFieldIsAvailableApi> {
  const response = await api.get<IFieldIsAvailableApi>('/validate-username', {
    params,
  });

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<IFieldIsAvailableApi> {
  const response = await api.get<IFieldIsAvailableApi>('/validate-email', {
    params,
  });

  return response.data;
}

async function forgotPassword(email: string): Promise<string> {
  const {data} = await api.post<{message: string}>(
    '/forgot-password',
    undefined,
    {
      params: {email},
    },
  );

  return data.message;
}

export const authApi = {
  authLogin,
  authLogout,
  authSignUp,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
};
