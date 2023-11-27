import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {ActivityIndicator, Box} from '@components';
import {AuthRoutes, AppRoutes} from '@routes';

export function Routes() {
  const {authCredentials, isLoading} = useAuthCredentials();

  if (isLoading) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator size={'large'} />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
