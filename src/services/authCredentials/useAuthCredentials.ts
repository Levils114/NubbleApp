import {IAuthCredentialsService} from './authCredentialsTypes';
import {useAuthCredentialsContextVersion} from './Providers/AuthCredentialsProviders';

export function useAuthCredentials(): IAuthCredentialsService {
  return useAuthCredentialsContextVersion();
}
