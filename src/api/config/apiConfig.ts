import {StatusCode} from '@infra';
import {authServices} from '@modules';
import axios from 'axios';

import {RegisterInterceptorParams} from '../@types/RegisterInterceptorParams';

export const BASE_URL = 'http://127.0.0.1:3333';
export const api = axios.create({
  baseURL: BASE_URL,
});

export function registerInterceptor({
  authCredentials,
  saveCredentials,
  removeCredentials,
}: RegisterInterceptorParams) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const {status} = responseError.response;

      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest = authServices.isRefreshTokenRequest(
        responseError.config,
      );
      const alreadyTryToRefreshToken = responseError.config.sent;

      if (status === StatusCode.UNAUTHORIZED) {
        if (
          hasNotRefreshToken ||
          isRefreshTokenRequest ||
          alreadyTryToRefreshToken
        ) {
          await removeCredentials();

          return Promise.reject(responseError);
        }

        const failedRequest = responseError.config;
        failedRequest.sent = true;

        const newAuthCredentials = await authServices.refreshToken({
          refreshToken: authCredentials!.refreshToken,
        });

        await saveCredentials(newAuthCredentials);
        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );

  return () => {
    api.interceptors.response.eject(interceptor);
  };
}
