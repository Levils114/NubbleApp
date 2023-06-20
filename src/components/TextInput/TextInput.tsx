import React from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';

import {Box} from '../Box';
import {Text, textFontFamilyMap, textFontSizeMap} from '../Text';

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
}

export function TextInput({label, errorMessage, ...props}: TextInputProps) {
  const textInputRef = React.useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  const hasError = !!errorMessage;

  function handleTextInputFocus() {
    textInputRef.current?.focus();
  }

  return (
    <Pressable onPress={handleTextInputFocus}>
      <Text mb="s4">{label}</Text>

      <Box
        borderWidth={hasError ? 2 : 1}
        borderRadius="s12"
        padding="s16"
        borderColor={hasError ? 'error' : 'gray4'}
        mb="s4">
        <RNTextInput
          ref={textInputRef}
          placeholderTextColor={colors.gray2}
          style={{
            padding: 0,
            fontFamily: textFontFamilyMap.satoshiRegular,
            ...textFontSizeMap.paragraphMedium,
          }}
          {...props}
        />
      </Box>
      {errorMessage && (
        <Text preset="paragraphSmall" bold color="error">
          {errorMessage}
        </Text>
      )}
    </Pressable>
  );
}
