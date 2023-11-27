import {useAuthCredentials} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authServices} from '../services/authServices';

export function useAuthLogout() {
  const {removeCredentials} = useAuthCredentials();

  const {mutate, isLoading} = useMutation<string, unknown, void>({
    mutationFn: authServices.authLogout,
    retry: false,
    onSuccess: async () => {
      await removeCredentials();
    },
  });

  return {
    isLoading,
    authLogout: () => mutate(),
  };
}
