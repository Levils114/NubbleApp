/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {KeyboardAvoidingView, ViewProps} from 'react-native';

import {Theme} from '@global/theme/lightTheme';
import {BoxProps} from '@shopify/restyle';

import {Box} from '@components';
import {useAppSafeArea, useIsAndroid, useAppTheme} from '@hooks';

import {getContainer} from './components/ScreenContainer';
import {ScreenWrapperHeader} from './components/ScreenWrapperHeader';

export interface ScreenWrapper extends BoxProps<Theme>, ViewProps {
  canGoBack?: boolean;
  isScrollable?: boolean;
  title?: string;
}

export function ScreenWrapper({
  children,
  canGoBack,
  isScrollable = false,
  title,
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
          {...props}
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
            },
            props.style,
          ]}>
          <ScreenWrapperHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
