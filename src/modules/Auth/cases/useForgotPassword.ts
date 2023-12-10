import {UseMutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authServices} from '..';

export function useForgotPassword(
  options?: UseMutationOptions<{email: string}>,
) {
  const {mutate, isLoading} = useMutation<string, Error, {email: string}>({
    mutationFn: ({email}) => authServices.forgotPassword(email),
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
    mutate,
    isLoading,
  };
}
