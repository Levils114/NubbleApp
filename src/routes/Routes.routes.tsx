import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AuthRoutes, AppRoutes} from '@routes';

export function Routes() {
  const {authCredentials} = useAuthCredentials();

  return (
    <NavigationContainer>
      {authCredentials ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
