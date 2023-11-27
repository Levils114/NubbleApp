import AsyncStorage from '@react-native-async-storage/async-storage';

import {Storage} from '..';

export const asyncStorage: Storage = {
  setItem: async <T>(key: string, value: T) => {
    const valueToString = JSON.stringify(value);

    await AsyncStorage.setItem(key, valueToString);
  },
  getItem: async <T>(key: string): Promise<T | null> => {
    const response = await AsyncStorage.getItem(key);

    if (response) {
      return JSON.parse(response);
    }

    return null;
  },
  removeItem: async (key: string) => await AsyncStorage.removeItem(key),
};
