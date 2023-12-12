import {UseMutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authServices, IAuthCredentials} from '..';
import {IAuthRefreshTokenBody} from '../types/IAuthRefreshTokenBody';

export function useAuthRefreshToken(
  options?: UseMutationOptions<IAuthCredentials>,
) {
  const {} = useMutation<IAuthCredentials, Error, IAuthRefreshTokenBody>({
    mutationFn: async body => await authServices.refreshToken(body),
    retry: true,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError();
      }
    },
  });
}
