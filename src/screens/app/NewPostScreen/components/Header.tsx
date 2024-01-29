/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground} from 'react-native';

import {Box, Button, Icon, Text} from '@components';

interface Props {
  imageUri: string;
  imageSize: number;
}

export function Header({imageSize, imageUri}: Props) {
  return (
    <Box>
      <ImageBackground
        source={{uri: imageUri}}
        style={{
          width: imageSize,
          height: imageSize,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Button text="Escolher essa" mb="s24" preset="ghost" />
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
