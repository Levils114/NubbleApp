import React from 'react';

import {AppTabNavigatorScreenParams} from '@types';

import {Button, ScreenWrapper, Text} from '@components';

export function FavoritesScreen({
  navigation,
}: AppTabNavigatorScreenParams<'FavoritesScreen'>) {
  function handleGoToSettingsScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <ScreenWrapper>
      <Text preset="headingLarge" textAlign="center">
        FavoritesScreen
      </Text>
      <Button text="Settings" onPress={handleGoToSettingsScreen} />
    </ScreenWrapper>
  );
}
