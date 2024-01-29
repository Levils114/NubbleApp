import React from 'react';

import {Theme} from '@global/theme/lightTheme';
import {useNavigation} from '@react-navigation/native';
import {BoxProps} from '@shopify/restyle';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenWrapper} from '../ScreenWrapper';

type ScreenWrapperHeaderProps = Pick<
  ScreenWrapper,
  'title' | 'canGoBack' | 'HeaderComponent'
> &
  BoxProps<Theme>;

const ICON_SIZE = 20;

export function ScreenWrapperHeader({
  HeaderComponent,
  canGoBack,
  title,
  ...boxProps
}: ScreenWrapperHeaderProps) {
  const {goBack} = useNavigation();

  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box
      mb="s24"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...boxProps}>
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
