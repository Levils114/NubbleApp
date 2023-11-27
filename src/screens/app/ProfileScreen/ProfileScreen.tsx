import React from 'react';

import {AppTabNavigatorScreenParams} from '@types';

import {Icon, ScreenWrapper} from '@components';

export function ProfileScreen({
  navigation,
}: AppTabNavigatorScreenParams<'ProfileScreen'>) {
  function handleGoToSettingsScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <ScreenWrapper>
      <Icon name="settings" onPress={handleGoToSettingsScreen} />
    </ScreenWrapper>
  );
}
