import {
  check as RNPCheck,
  request as RNPRequest,
  PERMISSIONS as RNP_PERMISSIONS,
  Permission as RNP_Permission,
  PermissionStatus as RNP_PermissionStatus,
} from 'react-native-permissions';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

const mapPermissionName: Record<PermissionName, RNP_Permission> = {
  photosLibrary: RNP_PERMISSIONS.IOS.PHOTO_LIBRARY,
  camera: RNP_PERMISSIONS.IOS.CAMERA,
};

const mapPermissionStatus: Record<RNP_PermissionStatus, PermissionStatus> = {
  denied: 'denied',
  granted: 'granted',
  unavailable: 'unavailable',
  blocked: 'never_ask_again',
  limited: 'granted',
};

async function check(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapPermissionName[name];

  const checkStatus = await RNPCheck(permission);

  return mapPermissionStatus[checkStatus];
}

async function request(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapPermissionName[name];

  const requestStatus = await RNPRequest(permission);

  return mapPermissionStatus[requestStatus];
}

export const permissionService: PermissionService = {
  check,
  request,
};
