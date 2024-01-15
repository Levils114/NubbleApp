import {api} from '@api';

import {UserApi} from '../@types/UserApi';

const ENDPOINT = '/users';

async function getUser(id: number): Promise<UserApi> {
  const {data} = await api.get<UserApi>(`${ENDPOINT}/${id}`);

  return data;
}

export const userApi = {getUser};
