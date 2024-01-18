import {QueryKeys, usePaginatedList} from '@infra';

import {userServices} from '../services/userServices';

export function useUsersGetList(userSearched: string) {
  return usePaginatedList(
    [QueryKeys.UsersGetList, userSearched],
    () => userServices.getUsersList(userSearched),
    {
      enabled: userSearched.length > 0,
      staleTime: 30000, //30seg
    },
  );
}
