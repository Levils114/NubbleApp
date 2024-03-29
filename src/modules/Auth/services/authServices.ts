import {api} from '@api';
import {UserDto, UserType} from '@modules';

import {authApi} from '../api/authApi';
import {authAdapter} from '../dtos/authAdapter';
import {IAuthCredentials} from '../types/IAuthCredentials';
import {IAuthRefreshTokenBody} from '../types/IAuthRefreshTokenBody';
import {IAuthSignUpForm} from '../types/IAuthSignUp';

export async function authLogin(
  email: string,
  password: string,
): Promise<IAuthCredentials> {
  try {
    const authApiReponse = await authApi.authLogin(email, password);
    const authCredential = authAdapter.toAuthCredential(authApiReponse);

    return authCredential;
  } catch (error) {
    throw new Error('Email ou senha inválido');
  }
}

export async function authLogout(): Promise<string> {
  try {
    const authLogoutResponse = await authApi.authLogout();

    return authLogoutResponse.message;
  } catch (error) {
    throw new Error('Problema ao tentar deslogar. Tente novamente!');
  }
}

export async function authSignUp(
  authSignUpProps: IAuthSignUpForm,
): Promise<UserType> {
  try {
    const authApiReponse = await authApi.authSignUp(authSignUpProps);
    const authApiResponseFormatted = UserDto(authApiReponse);

    return authApiResponseFormatted;
  } catch (error) {
    throw new Error('Ocorreu um erro! Tente novamente');
  }
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUserNameAvailable({username});
  return isAvailable;
}
async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function forgotPassword(email: string): Promise<string> {
  try {
    const message = await authApi.forgotPassword(email);

    return message;
  } catch (error) {
    throw new Error('Ocorreu um erro! Tente novamente');
  }
}

async function refreshToken(
  body: IAuthRefreshTokenBody,
): Promise<IAuthCredentials> {
  try {
    const apiResponse = await authApi.refreshToken(body);
    const authCredential = authAdapter.toAuthCredential(apiResponse);

    return authCredential;
  } catch (error) {
    throw new Error('Erro ao tentar reativar token');
  }
}

export const authServices = {
  authLogin,
  authLogout,
  authSignUp,
  isUserNameAvailable,
  isEmailAvailable,
  updateToken,
  removeToken,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};
