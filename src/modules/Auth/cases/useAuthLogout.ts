import {useAuthCredentials, useSearchHistoryService} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authServices} from '../services/authServices';

export function useAuthLogout() {
  const {clearUserList} = useSearchHistoryService();
  const {removeCredentials} = useAuthCredentials();

  const {mutate, isLoading} = useMutation<string, unknown, void>({
    mutationFn: authServices.authLogout,
    retry: false,
    onSettled: async () => {
      await removeCredentials();
      clearUserList();
    },
  });

  return {
    isLoading,
    authLogout: () => mutate(),
  };
}
