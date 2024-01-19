import {metadataDto} from '@api';
import {Page} from '@types';

import {UserType} from '..';
import {userApi} from '../api/userApi';
import {UserDto} from '../dtos/UserDto';

async function getUser(id: number): Promise<UserType> {
  const response = await userApi.getUser(id);

  const userFormatted = UserDto(response);

  return userFormatted;
}

async function getUsersList(userSearched: string): Promise<Page<UserType>> {
  const {meta, data} = await userApi.getUsersList(userSearched);

  const usersFormatted = data.map(user => UserDto(user));
  const metaFormatted = metadataDto(meta);

  return {meta: metaFormatted, data: usersFormatted};
}

export const userServices = {
  getUser,
  getUsersList,
};
