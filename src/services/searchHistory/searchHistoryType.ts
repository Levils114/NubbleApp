import {UserType} from '@modules';

export interface SearchHistoryService {
  userList: UserType[];
  addUser(user: UserType): void;
  deleteUser(userId: UserType['id']): void;
  clearUserList(): void;
}
