import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../Storage';

import {SearchHistoryService} from './searchHistoryType';

const useSearchHistoryStore = create<SearchHistoryService>()(
  persist(
    (set, get) => ({
      userList: [],
      addUser: user => {
        const userList = get().userList;

        const userAlreadyInList = userList.find(
          userFromList => userFromList.id === user.id,
        );

        if (!userAlreadyInList) {
          const newList = [user, ...userList];

          set({userList: newList});
        }
      },
      deleteUser: userId => {
        const userList = get().userList;
        const newList = userList.filter(user => user.id !== userId);

        set({userList: newList});
      },
      clearUserList: () => {
        set({userList: []});
      },
    }),
    {
      name: '@SearchHistory',
      storage: storage,
    },
  ),
);

export function useSearchHistory(): SearchHistoryService['userList'] {
  const userList = useSearchHistoryStore(state => state.userList);

  return userList;
}

export function useSearchHistoryService(): Omit<
  SearchHistoryService,
  'userList'
> {
  const {addUser, deleteUser, clearUserList} = useSearchHistoryStore();

  return {addUser, deleteUser, clearUserList};
}
