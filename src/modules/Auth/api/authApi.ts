import {api} from '@api/';
import {UserApi} from '@modules';
import {AxiosRequestConfig} from 'axios';

import {IAuthApi} from '../types/IAuthApi';
import {IAuthLogoutResponse} from '../types/IAuthLogoutResponse';
import {IAuthRefreshTokenBody} from '../types/IAuthRefreshTokenBody';
import {IAuthSignUpForm} from '../types/IAuthSignUp';
import {IFieldIsAvailableApi} from '../types/IFieldIsAvailableApi';

const PREFIX_ENDPOINT = '/auth';

export async function authLogin(
  email: string,
  password: string,
): Promise<IAuthApi> {
  const {data} = await api.post<IAuthApi>(`${PREFIX_ENDPOINT}/login`, {
    email,
    password,
  });

  return data;
}

export async function authLogout(): Promise<IAuthLogoutResponse> {
  const {data} = await api.get<IAuthLogoutResponse>(
    `${PREFIX_ENDPOINT}/profile/logout`,
  );

  return data;
}

export async function authSignUp(
  authSignUpProps: IAuthSignUpForm,
): Promise<UserApi> {
  const {data} = await api.post<UserApi>(
    `${PREFIX_ENDPOINT}/register`,
    authSignUpProps,
  );

  return data;
}

async function isUserNameAvailable(params: {
  username: string;
}): Promise<IFieldIsAvailableApi> {
  const response = await api.get<IFieldIsAvailableApi>(
    `${PREFIX_ENDPOINT}/validate-username`,
    {
      params,
    },
  );

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<IFieldIsAvailableApi> {
  const response = await api.get<IFieldIsAvailableApi>(
    `${PREFIX_ENDPOINT}/validate-email`,
    {
      params,
    },
  );

  return response.data;
}

async function forgotPassword(email: string): Promise<string> {
  const {data} = await api.post<{message: string}>(
    `${PREFIX_ENDPOINT}/forgot-password`,
    undefined,
    {
      params: {email},
    },
  );

  return data.message;
}

async function refreshToken(body: IAuthRefreshTokenBody): Promise<IAuthApi> {
  const {data} = await api.post<IAuthApi>(
    `${PREFIX_ENDPOINT}/refresh-token`,
    body,
  );

  return data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  return request.url!.includes(`${PREFIX_ENDPOINT}/refresh-token`);
}

export const authApi = {
  authLogin,
  authLogout,
  authSignUp,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest,
};
