import React from 'react';

import {
  ActivityIndicator,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  Text,
} from '@components';

import {buttonPresets, ButtonPresets} from './buttonPresets';

export interface ButtonsProps extends TouchableOpacityBoxProps {
  text: string;
  loading?: boolean;
  preset?: ButtonPresets;
}
export function Button({
  text,
  loading,
  preset = 'primary',
  disabled,
  ...props
}: ButtonsProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      alignItems="center"
      justifyContent="center"
      height={50}
      paddingHorizontal="s20"
      borderRadius="s16"
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...props}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content.color!} />
      ) : (
        <Text bold preset="paragraphLarge" {...buttonPreset.content}>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
