import React from 'react';

import {AppTabNavigatorScreenParams} from '@types';

import {Button, ScreenWrapper, Text} from '@components';

export function NewPostScreen({
  navigation,
}: AppTabNavigatorScreenParams<'NewPostScreen'>) {
  function handleGoToSettingsScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <ScreenWrapper>
      <Text preset="headingLarge" textAlign="center">
        NewPostScreen
      </Text>
      <Button text="Settings" onPress={handleGoToSettingsScreen} />
    </ScreenWrapper>
  );
}
