import React from 'react';

import {AppTabNavigatorScreenParams} from '@types';

import {Button, ScreenWrapper, Text} from '@components';

export function HomeScreen({
  navigation,
}: AppTabNavigatorScreenParams<'HomeScreen'>) {
  function handleGoToSettingsScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <ScreenWrapper>
      <Text preset="headingLarge" textAlign="center">
        HomeScreen
      </Text>
      <Button text="Settings" onPress={handleGoToSettingsScreen} />
    </ScreenWrapper>
  );
}
