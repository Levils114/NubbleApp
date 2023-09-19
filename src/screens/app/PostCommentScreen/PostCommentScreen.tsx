import React from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

import {PostComment, usePostCommentListCases} from '@modules';
import {useScrollToTop} from '@react-navigation/native';
import {AppNativeStackScreenParams} from '@types';

import {ScreenWrapper, PostCommentItem} from '@components';
import {useAppSafeArea} from '@hooks';

import {PostCommentTextMessage} from './PostCommentTextMessage/PostCommentTextMessage';

export function PostCommentScreen({
  route,
}: AppNativeStackScreenParams<'PostCommentScreen'>) {
  const {bottom} = useAppSafeArea();
  const {postId} = route.params;
  const {list, isLoading, fetchNextPage, refresh} =
    usePostCommentListCases(postId);
  const flatListRef = React.useRef<FlatList<PostComment>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  function rendeRefreshControl() {
    return <RefreshControl refreshing={isLoading} onRefresh={refresh} />;
  }

  return (
    <ScreenWrapper canGoBack title="Comentários" position="relative">
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        refreshControl={rendeRefreshControl()}
        refreshing={isLoading}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{paddingBottom: bottom + 42}}
      />
      <PostCommentTextMessage postId={postId} />
    </ScreenWrapper>
  );
}
