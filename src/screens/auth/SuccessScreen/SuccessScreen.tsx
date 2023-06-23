import React from 'react';

import {AuthNativeStackScreenProps} from '../../../@types/AuthNativeStackScreenProps';

import {Button} from '../../../components/Button';
import {Icon, IconProps} from '../../../components/Icon';
import {ScreenWrapper} from '../../../components/ScreenWrapper/ScreenWrapper';
import {Text} from '../../../components/Text';

export interface SuccessScreenParams {
  icon: Pick<IconProps, 'name' | 'color'>;
  title: string;
  subtitle: string;
}

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
