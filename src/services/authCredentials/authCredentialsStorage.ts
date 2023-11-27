import {AsyncStorageKeys} from '@global/asyncStorageKeys/keys';
import {IAuthCredentials} from '@modules';

import {storage} from '../Storage';

async function save(authCredentials: IAuthCredentials): Promise<void> {
  await storage.setItem(AsyncStorageKeys.AUTH, authCredentials);
}

async function remove(): Promise<void> {
  await storage.removeItem(AsyncStorageKeys.AUTH);
}

async function get(): Promise<IAuthCredentials | null> {
  return await storage.getItem(AsyncStorageKeys.AUTH);
}

export const authCredentialsStorage = {
  save,
  remove,
  get,
};
