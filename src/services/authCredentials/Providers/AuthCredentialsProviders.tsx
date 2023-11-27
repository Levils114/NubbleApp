import React from 'react';

import {authServices, IAuthCredentials} from '@modules';

import {IAuthCredentialsService} from '..';
import {authCredentialsStorage} from '../authCredentialsStorage';

const AuthCredentialsContext = React.createContext<IAuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    React.useState<IAuthCredentials | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      const authCredentialsFromStorage = await authCredentialsStorage.get();

      if (authCredentialsFromStorage) {
        authServices.updateToken(authCredentialsFromStorage.token);
        setAuthCredentials(authCredentialsFromStorage);
      }
    } catch (error) {
      // TODO handle error
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(
    authCredentialsObject: IAuthCredentials,
  ): Promise<void> {
    authServices.updateToken(authCredentialsObject.token);
    await authCredentialsStorage.save(authCredentialsObject);

    setAuthCredentials(authCredentialsObject);
  }

  async function removeCredentials(): Promise<void> {
    authServices.removeToken();
    await authCredentialsStorage.remove();

    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}

export function useAuthCredentialsContextVersion(): IAuthCredentialsService {
  const context = React.useContext(AuthCredentialsContext);

  if (!context) {
    throw new Error(
      'AuthCredential should be used within a AuthCredentialsProvider',
    );
  }

  return context;
}
