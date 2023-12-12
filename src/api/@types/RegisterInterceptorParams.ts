import {IAuthCredentials} from '@modules';

export interface RegisterInterceptorParams {
  authCredentials: IAuthCredentials | null;
  saveCredentials: (authCredentialsObject: IAuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
}
