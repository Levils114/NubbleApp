/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';

import {useToast} from '@services';

import {useAppSafeArea} from '@hooks';

import {Box} from '../Box';
import {Icon} from '../Icon';
import {Text} from '../Text';

const MAX_WIDTH = Dimensions.get('window').width * 0.9;

export function Toast() {
  const {toast, hideToast} = useToast();
  const {bottom} = useAppSafeArea();

  React.useEffect(() => {
    const toastTimeout = setTimeout(() => {
      hideToast();
    }, 2000);

    return () => {
      clearTimeout(toastTimeout);
    };
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }

  return (
    <Box
      position="absolute"
      bottom={bottom + 24}
      backgroundColor="background"
      borderRadius="s16"
      padding="s16"
      alignItems="center"
      alignSelf="center"
      shadowColor="backgroundContrast"
      justifyContent="flex-start"
      flexDirection="row"
      {...toastStyles}>
      <Icon name="checkRound" width="s32" height="s32" />
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
