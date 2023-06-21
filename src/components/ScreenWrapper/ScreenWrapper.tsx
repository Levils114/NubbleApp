/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {KeyboardAvoidingView, ViewProps} from 'react-native';
import {BoxProps} from '@shopify/restyle';

import {getContainer} from './components/ScreenContainer';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useIsAndroid} from '../../hooks/useIsAndroid';
import {useAppTheme} from '../../hooks/useAppTheme';

import {Theme} from '../../global/theme/lightTheme';

import {Box} from '../Box';
import {Icon} from '../Icon';
import {Text} from '../Text';

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
            <Box mb="s24" flexDirection="row" alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text ml="s8" semibold>
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
