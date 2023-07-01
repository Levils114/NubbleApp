/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {KeyboardAvoidingView, ViewProps} from 'react-native';

import {Theme} from '@global/theme/lightTheme';
import {useNavigation} from '@react-navigation/native';
import {BoxProps} from '@shopify/restyle';

import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {useAppSafeArea, useIsAndroid, useAppTheme} from '@hooks';

import {getContainer} from './components/ScreenContainer';

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
          {...props}
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
            },
            props.style,
          ]}>
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
