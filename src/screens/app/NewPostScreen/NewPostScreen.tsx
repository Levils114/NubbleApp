import React from 'react';
import {FlatList, ListRenderItemInfo, Image, Dimensions} from 'react-native';

import {useCameraRoll} from '@services';
import {AppTabNavigatorScreenParams} from '@types';

import {ScreenWrapper} from '@components';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const COLUMNS_NUMBER = 4;
const ITEM_SIZE = SCREEN_WIDTH / COLUMNS_NUMBER;

export function NewPostScreen({}: AppTabNavigatorScreenParams<'NewPostScreen'>) {
  const {photosList} = useCameraRoll();

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Image
        source={{uri: item}}
        style={{width: ITEM_SIZE, height: ITEM_SIZE}}
      />
    );
  }

  return (
    <ScreenWrapper title="Novo post" canGoBack noPaddingHorizontal>
      <FlatList
        numColumns={COLUMNS_NUMBER}
        keyExtractor={item => item}
        data={photosList}
        renderItem={renderItem}
        ListHeaderComponent={
          <Header imageUri={photosList[0]} imageSize={SCREEN_WIDTH} />
        }
      />
    </ScreenWrapper>
  );
}
