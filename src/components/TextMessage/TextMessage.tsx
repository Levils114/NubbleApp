/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {
  Box,
  Text,
  textFontSizeMap,
  TouchableOpacityBox,
  textInputStyleDefault,
} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

interface TextMessage extends TextInputProps {
  value: string;
  onPressSend(): void;
}

export function TextMessage({value, onPressSend, ...props}: TextMessage) {
  const {colors} = useAppTheme();
  const {bottom} = useAppSafeArea();

  const isSendButtonDisabled = value?.trim().length !== 0;

  return (
    <Box
      flex={1}
      width="100%"
      position="absolute"
      left={24}
      bottom={bottom + 42}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12">
        <TextInput
          placeholder="Adicione um comentário"
          placeholderTextColor={colors.gray1}
          style={{
            ...textFontSizeMap.paragraphMedium,
            ...textInputStyleDefault,
            flex: 0.9,
          }}
          {...props}
        />
        <TouchableOpacityBox
          disabled={isSendButtonDisabled}
          onPress={onPressSend}>
          <Text
            color={isSendButtonDisabled ? 'gray2' : 'greenPrimary'}
            bold
            preset="paragraphSmall">
            Enviar
          </Text>
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
