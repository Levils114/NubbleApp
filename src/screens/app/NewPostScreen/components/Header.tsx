/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground} from 'react-native';

import {images} from '@assets/index';
import {useNavigation} from '@react-navigation/native';

import {Box, Button, Icon, Text} from '@components';

interface Props {
  imageUri?: string;
  imageSize: number;
}

export function Header({imageSize, imageUri}: Props) {
  const {navigate} = useNavigation();

  function onChooseImage() {
    if (imageUri) {
      navigate('PublishPostScreen', {imageUri});
    }
  }

  function navigateToCameraScreen() {
    navigate('CameraScreen');
  }

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
            onPress={onChooseImage}
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
        <Icon name="camera" onPress={navigateToCameraScreen} />
      </Box>
    </Box>
  );
}
