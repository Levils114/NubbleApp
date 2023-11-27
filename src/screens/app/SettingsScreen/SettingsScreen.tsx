import React from 'react';

import {useAuthLogout} from '@modules';

import {Button, ScreenWrapper, Text} from '@components';

export function SettingsScreen() {
  const {authLogout, isLoading} = useAuthLogout();

  return (
    <ScreenWrapper canGoBack>
      <Text>Settings Screen</Text>
      <Button text="Sair da conta" onPress={authLogout} loading={isLoading} />
    </ScreenWrapper>
  );
}
