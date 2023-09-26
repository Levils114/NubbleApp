import {UserType} from '..';
import {UserApi} from '../@types/UserApi';

export function UserDto(userApi: UserApi): UserType {
  return {
    id: userApi.id,
    email: userApi.email,
    firstName: userApi.first_name,
    fullName: userApi.full_name,
    isOnline: userApi.is_online,
    lastName: userApi.last_name,
    profileUrl: userApi.profile_url,
    username: userApi.username,
  };
}
