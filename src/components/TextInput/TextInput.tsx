import React from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {Theme} from '@global/theme/lightTheme';
import {BoxProps} from '@shopify/restyle';

import {
  Box,
  TouchableOpacityBox,
  Text,
  textFontFamilyMap,
  textFontSizeMap,
} from '@components';
import {useAppTheme} from '@hooks';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  boxProps?: BoxProps<Theme>;
  RightComponent?: () => JSX.Element;
  LeftComponent?: React.ReactNode;
  containerProps?: BoxProps<Theme>;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  LeftComponent,
  boxProps,
  containerProps,
  ...props
}: TextInputProps) {
  const textInputRef = React.useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  const hasError = !!errorMessage;

  function handleTextInputFocus() {
    textInputRef.current?.focus();
  }

  return (
    <Box flexGrow={1} flexShrink={1} {...boxProps}>
      <Pressable onPress={handleTextInputFocus}>
        {label && <Text mb="s4">{label}</Text>}

        <Box
          borderWidth={hasError ? 2 : 1}
          borderRadius="s12"
          padding="s16"
          borderColor={hasError ? 'error' : 'gray4'}
          mb="s4"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          {...containerProps}>
          {LeftComponent && (
            <TouchableOpacityBox mr="s16">{LeftComponent}</TouchableOpacityBox>
          )}
          <RNTextInput
            ref={textInputRef}
            placeholderTextColor={colors.gray2}
            autoCapitalize="none"
            style={{
              fontFamily: textFontFamilyMap.satoshiRegular,
              ...textInputStyleDefault,
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

export const textInputStyleDefault = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
};
