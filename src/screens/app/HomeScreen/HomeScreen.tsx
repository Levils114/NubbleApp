/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

import {Post, usePostListCases} from '@modules';
import {useScrollToTop} from '@react-navigation/native';

import {ScreenWrapper, PostItem} from '@components';

import {HomeEmpty} from './components/HomeEmpty/HomeEmpty';
import {HomeHeader} from './components/HomeHeader/HomeHeader';

export function HomeScreen() {
  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);
  const {postList, error, isLoading, refresh, fetchNextPage} =
    usePostListCases();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  function renderListHeaderComponent() {
    return <HomeHeader />;
  }

  function renderListEmptyComponent() {
    return (
      <HomeEmpty isLoading={isLoading} error={error} handleRefetch={refresh} />
    );
  }

  return (
    <ScreenWrapper
      style={{paddingHorizontal: 0, paddingTop: 0, paddingBottom: 0, flex: 1}}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderListHeaderComponent}
        ListEmptyComponent={renderListEmptyComponent}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        refreshing={isLoading}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{flex: postList.length <= 0 ? 1 : undefined}}
      />
    </ScreenWrapper>
  );
}
