/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground} from 'react-native';

import {images} from '@assets/index';

import {Box, Button, Icon, Text} from '@components';

interface Props {
  imageUri?: string;
  imageSize: number;
  onPress(): void;
}

export function Header({imageSize, imageUri, onPress}: Props) {
  return (
    <Box>
      <ImageBackground
        source={imageUri ? {uri: imageUri} : images.imagePlaceholder}
        style={{
          width: imageSize,
          height: imageSize,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        {imageUri && (
          <Button
            text="Escolher essa"
            mb="s24"
            preset="ghost"
            onPress={onPress}
          />
        )}
      </ImageBackground>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="s24"
        paddingVertical="s16">
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}
