import {api, PageApi} from '@api';

import {UserApi} from '../@types/UserApi';

const ENDPOINT = '/users';

async function getUser(id: number): Promise<UserApi> {
  const {data} = await api.get<UserApi>(`${ENDPOINT}/${id}`);

  return data;
}

async function getUsersList(userSearched: string): Promise<PageApi<UserApi>> {
  const {data} = await api.get<PageApi<UserApi>>(ENDPOINT, {
    params: {
      search: userSearched,
    },
  });

  return data;
}

export const userApi = {getUser, getUsersList};
