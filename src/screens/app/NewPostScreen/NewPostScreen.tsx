/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ListRenderItemInfo, Image, Dimensions} from 'react-native';

import {useCameraRoll} from '@services';
import {AppTabNavigatorScreenParams} from '@types';

import {PressableBox, ScreenWrapper} from '@components';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const COLUMNS_NUMBER = 4;
const ITEM_SIZE = SCREEN_WIDTH / COLUMNS_NUMBER;

export function NewPostScreen({
  navigation,
}: AppTabNavigatorScreenParams<'NewPostScreen'>) {
  const [imageSelected, setImageSelected] = React.useState<string>();

  const {photosList, fetchNextPage} = useCameraRoll(true, setImageSelected);

  const flatListRef = React.useRef<FlatList>(null);

  function onSelectImage(image: string) {
    setImageSelected(image);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function onChooseImage() {
    if (imageSelected) {
      navigation.navigate('PublishPostScreen', {imageUri: imageSelected});
    }
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <PressableBox onPress={() => onSelectImage(item)}>
        <Image
          source={{uri: item}}
          style={{width: ITEM_SIZE, height: ITEM_SIZE}}
        />
      </PressableBox>
    );
  }

  return (
    <ScreenWrapper
      title="Novo post"
      canGoBack
      noPaddingHorizontal
      headerStyles={{paddingHorizontal: 's24'}}>
      <FlatList
        ref={flatListRef}
        numColumns={COLUMNS_NUMBER}
        keyExtractor={item => item}
        data={photosList}
        renderItem={renderItem}
        ListHeaderComponent={
          <Header
            imageUri={imageSelected}
            imageSize={SCREEN_WIDTH}
            onPress={onChooseImage}
          />
        }
        onEndReachedThreshold={0.1}
        onEndReached={fetchNextPage}
      />
    </ScreenWrapper>
  );
}
