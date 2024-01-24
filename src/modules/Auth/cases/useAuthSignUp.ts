import {UseMutationOptions} from '@infra';
import {UserType} from '@modules';
import {useMutation} from '@tanstack/react-query';

import {authServices} from '..';
import {IAuthSignUpForm} from '../types/IAuthSignUp';

export function useAuthSignUp(options?: UseMutationOptions<IAuthSignUpForm>) {
  const {mutate, isLoading} = useMutation<UserType, Error, IAuthSignUpForm>({
    mutationFn: authSignUpForm => authServices.authSignUp(authSignUpForm),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error);
      }
    },
  });

  return {
    signUp: mutate,
    isLoading,
  };
}
