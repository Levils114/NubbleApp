/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput} from 'react-native';

import {Box, Text, textFontSizeMap} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

export function PostCommentFooter() {
  const {colors} = useAppTheme();
  const {bottom} = useAppSafeArea();

  return (
    <Box
      flex={1}
      width="100%"
      paddingHorizontal="s24"
      position="absolute"
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
            flex: 0.9,
          }}
        />
        <Text color="greenPrimary" bold preset="paragraphSmall">
          Enviar
        </Text>
      </Box>
    </Box>
  );
}
