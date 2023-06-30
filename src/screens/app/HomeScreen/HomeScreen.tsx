import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@modules';

import {ScreenWrapper, PostItem} from '@components';

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

  return (
    <ScreenWrapper paddingHorizontal="s0" paddingBottom="s0">
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </ScreenWrapper>
  );
}
