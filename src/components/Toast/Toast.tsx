/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, ViewProps} from 'react-native';

import {IToast, useToast, useToastService} from '@services';

import {useAppSafeArea} from '@hooks';

import {IconProps} from '../Icon';

import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 2000; // 2 seconds

export function Toast() {
  const {hideToast} = useToastService();
  const {toast} = useToast();
  const {bottom, top} = useAppSafeArea();

  const fadeAnimated = React.useRef(new Animated.Value(0)).current;

  const runEntiringAnimation = React.useCallback(() => {
    Animated.timing(fadeAnimated, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimated]);

  const runExitingAnimation = React.useCallback(() => {
    Animated.timing(fadeAnimated, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(hideToast);
  }, [fadeAnimated, hideToast]);

  React.useEffect(() => {
    let toastTimeout: NodeJS.Timeout;

    if (toast) {
      const toastDuration = toast?.duration || DEFAULT_DURATION;

      runEntiringAnimation();

      toastTimeout = setTimeout(() => {
        runExitingAnimation();
      }, toastDuration);
    }

    return () => {
      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }
    };
  }, [toast, hideToast, runEntiringAnimation, runExitingAnimation]);

  const toastPositionStyles: Record<
    Required<IToast>['position'],
    ViewProps['style']
  > = {
    top: {
      top: top + 42,
    },
    bottom: {
      bottom: bottom + 42,
    },
  };

  const toastIcon: Record<IToast['type'], IconProps['name']> = {
    success: 'checkRound',
    error: 'errorRound',
  };

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      testID="toast-message"
      style={[
        {
          position: 'absolute',
          alignSelf: 'center',
          opacity: fadeAnimated,
        },
        toastPositionStyles[toast?.position || 'bottom'],
      ]}>
      <ToastContent toast={toast} toastIcon={toastIcon[toast.type]} />
    </Animated.View>
  );
}
