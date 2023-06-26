/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BoxProps} from '@shopify/restyle';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {
  Box,
  TouchableOpacityBox,
  Text,
  textFontFamilyMap,
  textFontSizeMap,
} from '@components';
import {Theme} from '@global/theme/lightTheme';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  boxProps?: BoxProps<Theme>;
  rightComponent?: () => React.JSX.Element;
}

export function TextInput({
  label,
  errorMessage,
  rightComponent: RightComponent,
  boxProps,
  ...props
}: TextInputProps) {
  const textInputRef = React.useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  const hasError = !!errorMessage;

  function handleTextInputFocus() {
    textInputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={handleTextInputFocus}>
        <Text mb="s4">{label}</Text>

        <Box
          borderWidth={hasError ? 2 : 1}
          borderRadius="s12"
          padding="s16"
          borderColor={hasError ? 'error' : 'gray4'}
          mb="s4"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <RNTextInput
            ref={textInputRef}
            placeholderTextColor={colors.gray2}
            autoCapitalize="none"
            style={{
              padding: 0,
              flexGrow: 1,
              flexShrink: 1,
              fontFamily: textFontFamilyMap.satoshiRegular,
              ...textFontSizeMap.paragraphMedium,
            }}
            {...props}
          />

          {RightComponent && (
            <TouchableOpacityBox ml="s16">
              <RightComponent />
            </TouchableOpacityBox>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}
