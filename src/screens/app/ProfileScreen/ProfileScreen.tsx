import React from 'react';

import {AppTabNavigatorScreenParams} from '@types';

import {Button, ScreenWrapper, Text} from '@components';

export function ProfileScreen({
  navigation,
}: AppTabNavigatorScreenParams<'ProfileScreen'>) {
  function handleGoToSettingsScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <ScreenWrapper>
      <Text preset="headingLarge" textAlign="center">
        ProfileScreen
      </Text>
      <Button text="Settings" onPress={handleGoToSettingsScreen} />
    </ScreenWrapper>
  );
}