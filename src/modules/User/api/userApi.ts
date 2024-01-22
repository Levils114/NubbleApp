import {api, PageApi} from '@api';

import {UserApi} from '../@types/UserApi';

export const USER_ENDPOINT = '/users';

async function getUser(id: number): Promise<UserApi> {
  const {data} = await api.get<UserApi>(`${USER_ENDPOINT}/${id}`);

  return data;
}

async function getUsersList(userSearched: string): Promise<PageApi<UserApi>> {
  const {data} = await api.get<PageApi<UserApi>>(USER_ENDPOINT, {
    params: {
      search: userSearched,
    },
  });

  return data;
}

export const userApi = {getUser, getUsersList};
