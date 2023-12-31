import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {UserType} from '..';
import {userServices} from '../services/userServices';

export function useUserGetInfo(id: number) {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<UserType>({
    queryKey: [QueryKeys.UserGetInfo, id],
    queryFn: () => userServices.getUser(id),
    staleTime: 30000, // 30 seconds
  });

  return {
    isLoading,
    error,
    user,
  };
}
