import React from 'react';

import {UserType} from '..';
import {userServices} from '../services/userServices';

export function useUserGetInfo(id: number) {
  const [user, setUser] = React.useState<UserType>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<unknown>(null);

  const getUserInfo = React.useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await userServices.getUser(id);

      setUser(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return {
    isLoading,
    error,
    user,
  };
}
