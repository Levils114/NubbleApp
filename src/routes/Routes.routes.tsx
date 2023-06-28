import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthRoutes, AppRoutes} from '@routes';

export function Routes() {
  const authenticated = true;

  return (
    <NavigationContainer>
      {authenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
