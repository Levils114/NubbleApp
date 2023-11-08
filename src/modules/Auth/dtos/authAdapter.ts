import {IAuthApi} from '../types/IAuthApi';
import {IAuthCredentials} from '../types/IAuthCredentials';

export function toAuthCredential(authApi: IAuthApi): IAuthCredentials {
  return {
    token: authApi.auth.token,
    user: {
      ...authApi.user,
      firstName: authApi.user.first_name,
      lastName: authApi.user.last_name,
      fullName: authApi.user.full_name,
      isOnline: authApi.user.is_online,
      profileUrl: authApi.user.profile_url,
      rememberMeToken: authApi.user.remember_me_token,
      rememberMeTokenCreatedAt: authApi.user.remember_me_token_created_at,
      tempToken: authApi.user.temp_token,
      tempTokenCreatedAt: authApi.user.temp_token_created_at,
    },
  };
}

export const authAdapter = {
  toAuthCredential,
};
