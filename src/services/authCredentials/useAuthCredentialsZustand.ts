import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../Storage';

import {IAuthCredentialsService} from '.';

export const useAuthCredentialsZustandVersion =
  create<IAuthCredentialsService>()(
    persist(
      set => ({
        authCredentials: null,
        isLoading: false,
        saveCredentials: async authCredentials => set({authCredentials}),
        removeCredentials: async () => set({authCredentials: null}),
      }),
      {
        name: '@Auth',
        storage: storage,
      },
    ),
  );
