import {mmkvStorage} from './implementation/MMKVStorage';

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage = mmkvStorage;

export function initializeStorage(storageToInitialize: Storage) {
  storage = storageToInitialize;
}
