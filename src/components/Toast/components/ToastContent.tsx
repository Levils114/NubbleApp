/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';

import {IToast} from '@services';

import {Box} from '../../Box';
import {Icon, IconProps} from '../../Icon';
import {Text} from '../../Text';

interface ToastContentProps {
  toast: IToast;
  toastIcon: IconProps['name'];
}

const MAX_WIDTH = Dimensions.get('window').width * 0.9;

export function ToastContent({toast, toastIcon}: ToastContentProps) {
  return (
    <Box
      backgroundColor="background"
      borderRadius="s16"
      padding="s16"
      alignItems="center"
      alignSelf="center"
      shadowColor="backgroundContrast"
      justifyContent="flex-start"
      flexDirection="row"
      {...toastStyles}>
      <Icon name={toastIcon} width="s32" height="s32" />
      <Text ml="s16" preset="paragraphMedium" bold style={{flexShrink: 1}}>
        {toast?.message}
      </Text>
    </Box>
  );
}

const toastStyles = {
  maxWidth: MAX_WIDTH,
  shadowOffset: {width: 0, height: -3},
  shadowOpacity: 0.05,
  shadowRadius: 12,
  elevation: 10,
  opacity: 0.95,
};
