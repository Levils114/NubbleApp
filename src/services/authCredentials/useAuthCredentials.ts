import {create} from 'zustand';

import {IAuthCredentialsService} from './authCredentialsTypes';

export function useAuthCredentials(): IAuthCredentialsService {
  return useAuthCredentialsZustandVersion();
}

const useAuthCredentialsZustandVersion = create<IAuthCredentialsService>(
  set => ({
    authCredentials: null,
    isLoading: false,
    saveCredentials: async authCredentials => set({authCredentials}),
    removeCredentials: async () => set({authCredentials: null}),
  }),
);
