/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@modules';

import {ScreenWrapper, PostItem} from '@components';

import {HomeHeader} from './components/HomeHeader/HomeHeader';

export function HomeScreen() {
  const [postList, setPostList] = React.useState<Post[]>([]);

  React.useEffect(() => {
    let isMounted = true;

    getPostList(isMounted);

    return () => {
      isMounted = false;
    };
  }, []);

  async function getPostList(isMounted: boolean): Promise<void> {
    const postListResult = await postService.getPostList();
    if (isMounted) {
      setPostList(postListResult);
    }
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  function renderListHeaderComponent() {
    return <HomeHeader />;
  }

  return (
    <ScreenWrapper
      style={{paddingHorizontal: 0, paddingTop: 0, paddingBottom: 0}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderListHeaderComponent}
      />
    </ScreenWrapper>
  );
}
