import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authServices} from '..';

interface Params {
  username: string;
  enabled: boolean;
}

export function useAuthIsValueAvailable({username, enabled}: Params) {
  const usenameDebounced = useDebounce(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUserNameAvailable, usenameDebounced],
    queryFn: () => authServices.isUserNameAvailable(usenameDebounced),
    retry: false,
    staleTime: 20000,
    enabled: enabled && usenameDebounced.length > 0,
  });

  const isDebouncing = usenameDebounced !== username;

  return {
    isUnavailable: data === false,
    isLoading: isFetching || isDebouncing,
  };
}
