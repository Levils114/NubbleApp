import {IAuthCredentials} from '@modules';

export interface IAuthCredentialsService {
  authCredentials: IAuthCredentials | null;
  saveCredentials: (authCredentials: IAuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
