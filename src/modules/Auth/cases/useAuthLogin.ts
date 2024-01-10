import {useAuthCredentials} from '@services';
import {MutationOptions, useMutation} from '@tanstack/react-query';

import {authServices} from '../services/authServices';
import {IAuthCredentials} from '../types/IAuthCredentials';

interface Variables {
  email: string;
  password: string;
}

export function useAuthLogin(
  options?: MutationOptions<IAuthCredentials, string>,
) {
  const {saveCredentials} = useAuthCredentials();

  const {mutate, isLoading, isSuccess} = useMutation<
    IAuthCredentials,
    Error,
    Variables
  >({
    mutationFn: ({email, password}) => authServices.authLogin(email, password),
    retry: false,
    onSuccess: async authCredentials => {
      if (options?.onSuccess) {
        options.onSuccess;
      }

      await saveCredentials(authCredentials);
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message, undefined, {});
      }
    },
  });

  return {
    isLoading,
    isSuccess,
    authLogin: (variables: Variables) => mutate(variables),
  };
}
