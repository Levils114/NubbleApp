import React from 'react';

import {Post} from '@modules';

import {Box, Text} from '@components';

import {PostActions} from './components/PostActions/PostActions';
import {PostHeader} from './components/PostHeader/PostHeader';
import {PostImage} from './components/PostImage/PostImage';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box gap="s16" mb="s32">
      <PostHeader author={post.author} />

      <PostImage imageURL={post.imageURL} />

      <PostActions
        favoriteCount={post.favoriteCount}
        commentCount={post.commentCount}
        reactionCount={post.reactionCount}
      />

      <Box paddingHorizontal="s24">
        <Text>{post.author.userName}</Text>
        <Text>{post.text}</Text>
        <Text>{`ver ${post.commentCount} comentários`}</Text>
      </Box>
    </Box>
  );
}
