import {MMKV} from 'react-native-mmkv';

import {Storage} from '..';

const mmkvStorageInstance = new MMKV();

export const mmkvStorage: Storage = {
  setItem: async <T>(key: string, value: T) => {
    const valueToString = JSON.stringify(value);

    mmkvStorageInstance.set(key, valueToString);
  },
  getItem: async <T>(key: string): Promise<T | null> => {
    const response = mmkvStorageInstance.getString(key);

    if (response) {
      return JSON.parse(response);
    }

    return null;
  },
  removeItem: async (key: string) => mmkvStorageInstance.delete(key),
};
