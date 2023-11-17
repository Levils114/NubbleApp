import {api} from '@api/';

import {authApi} from '../api/authApi';
import {authAdapter} from '../dtos/authAdapter';
import {IAuthCredentials} from '../types/IAuthCredentials';

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

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

export const authServices = {
  authLogin,
  authLogout,
  updateToken,
  removeToken,
};
