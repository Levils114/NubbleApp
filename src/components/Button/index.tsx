import React from 'react';
import {ActivityIndicator} from 'react-native';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box';

import {Text} from '../Text';

interface ButtonsProps extends TouchableOpacityBoxProps {
  text: string;
  loading?: boolean;
}

export function Button({text, loading, ...props}: ButtonsProps) {
  return (
    <TouchableOpacityBox
      alignItems="center"
      justifyContent="center"
      backgroundColor="buttonPrimary"
      height={50}
      paddingHorizontal="s20"
      borderRadius="s16"
      {...props}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text color="background" bold preset="paragraphLarge">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
