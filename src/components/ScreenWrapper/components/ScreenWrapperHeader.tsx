import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenWrapper} from '../ScreenWrapper';

type ScreenWrapperHeaderProps = Pick<
  ScreenWrapper,
  'title' | 'canGoBack' | 'HeaderComponent'
>;

const ICON_SIZE = 20;

export function ScreenWrapperHeader({
  HeaderComponent,
  canGoBack,
  title,
}: ScreenWrapperHeaderProps) {
  const {goBack} = useNavigation();

  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box
      mb="s24"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          marginRight="s10"
          onPress={goBack}>
          <Icon width="s20" height="s20" name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text ml="s8" semibold>
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && (
        <Text black preset="headingSmall">
          {title}
        </Text>
      )}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
