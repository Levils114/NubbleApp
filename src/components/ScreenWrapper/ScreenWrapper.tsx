/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {KeyboardAvoidingView, ViewProps} from 'react-native';
import {BoxProps} from '@shopify/restyle';
import {useNavigation} from '@react-navigation/native';

import {getContainer} from './components/ScreenContainer';

import {useAppSafeArea, useIsAndroid, useAppTheme} from '@hooks';
import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {Theme} from '@global/theme/lightTheme';

interface ScreenWrapper extends BoxProps<Theme>, ViewProps {
  canGoBack?: boolean;
  isScrollable?: boolean;
}

export function ScreenWrapper({
  children,
  canGoBack,
  isScrollable = false,
  ...props
}: ScreenWrapper) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const {goBack} = useNavigation();

  const Container = getContainer(isScrollable);

  return (
    <KeyboardAvoidingView
      behavior={useIsAndroid() ? undefined : 'padding'}
      style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}
          {...props}>
          {canGoBack && (
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              alignItems="center"
              width={70}
              onPress={goBack}>
              <Icon name="arrowLeft" color="primary" />
              <Text ml="s8" semibold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
