/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';

import {useAppSafeArea} from '@hooks';

import {Box} from '../Box';
import {Icon} from '../Icon';
import {Text} from '../Text';

const MAX_WIDTH = Dimensions.get('window').width * 0.9;

export function Toast() {
  const {bottom} = useAppSafeArea();

  return (
    <Box
      position="absolute"
      alignSelf="center"
      bottom={bottom + 24}
      backgroundColor="background"
      maxWidth={MAX_WIDTH}
      borderRadius="s16"
      padding="s16"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      shadowColor="backgroundContrast"
      shadowOffset={{width: 0, height: -3}}
      shadowOpacity={0.05}
      shadowRadius={12}
      elevation={10}
      opacity={0.95}>
      <Icon name="checkRound" width="s32" height="s32" />
      <Text ml="s16" preset="paragraphMedium" bold style={{flexShrink: 1}}>
        Toast component Toast component Toast component Toast component Toast
        component Toast component
      </Text>
    </Box>
  );
}
