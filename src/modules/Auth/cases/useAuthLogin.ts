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
  const {mutate, isLoading} = useMutation<IAuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authServices.authLogin(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message, undefined, {});
      }
    },
  });

  return {
    isLoading,
    authLogin: (variables: Variables) => mutate(variables),
  };
}
