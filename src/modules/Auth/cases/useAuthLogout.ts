import {useMutation} from '@tanstack/react-query';

import {authServices} from '../services/authServices';

export function useAuthLogout() {
  const {mutate, isLoading} = useMutation<string, unknown, void>({
    mutationFn: authServices.authLogout,
    retry: false,
  });

  return {
    isLoading,
    authLogout: () => mutate(),
  };
}
