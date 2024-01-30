/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Dimensions} from 'react-native';

import {AppNativeStackScreenParams} from '@types';

import {Button, ScreenWrapper, Text, TextInput} from '@components';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export function PublishPostScreen({
  route,
}: AppNativeStackScreenParams<'PublishPostScreen'>) {
  const {imageUri} = route.params;

  const [description, setDescription] = React.useState('');

  return (
    <ScreenWrapper isScrollable canGoBack title="Novo post">
      <Image
        source={{uri: imageUri}}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />

      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui..."
        containerProps={{borderWidth: 0}}
      />
      <Button mt="s56" text="Publicar post" />
    </ScreenWrapper>
  );
}
