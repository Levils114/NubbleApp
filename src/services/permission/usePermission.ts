import React from 'react';

import {permissionService} from './permissionService';
import {PermissionName, PermissionStatus} from './permissionTypes';

export function usePermission(permissionName: PermissionName) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [status, setStatus] = React.useState<PermissionStatus>();

  async function checkPermission() {
    try {
      const initialStatus = await permissionService.check(permissionName);

      if (initialStatus === 'denied') {
        const requestStatus = await permissionService.request(permissionName);

        setStatus(requestStatus);
      } else {
        setStatus(initialStatus);
      }
    } catch (error) {
      setStatus('unavailable');
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    status,
  };
}
