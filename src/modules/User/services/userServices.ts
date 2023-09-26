import {UserType} from '..';
import {userApi} from '../api/userApi';
import {UserDto} from '../dtos/UserDto';

async function getUser(id: number): Promise<UserType> {
  const response = await userApi.getUser(id);

  const userFormatted = UserDto(response);

  return userFormatted;
}

export const userServices = {
  getUser,
};
