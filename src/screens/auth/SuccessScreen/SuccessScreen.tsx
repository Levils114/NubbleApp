import React from 'react';

import {AuthNativeStackScreenProps} from '@types';

import {Button, Icon, ScreenWrapper, Text} from '@components';

export function SuccessScreen({
  route: {params},
  navigation,
}: AuthNativeStackScreenProps<'SuccessScreen'>) {
  function handleGoToBegin() {
    navigation.goBack();
  }

  return (
    <ScreenWrapper>
      <Icon size="s48" {...params.icon} />
      <Text preset="headingLarge" mt="s24" mb="s16">
        {params.title}
      </Text>

      <Text preset="paragraphLarge" mb="s40">
        {params.subtitle}
      </Text>

      <Button text="Voltar ao início" onPress={handleGoToBegin} />
    </ScreenWrapper>
  );
}
