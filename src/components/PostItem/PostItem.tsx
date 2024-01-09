import React from 'react';

import {Post} from '@modules';

import {Box} from '@components';

import {PostActions} from './components/PostActions/PostActions';
import {PostBottom} from './components/PostBottom/PostBottom';
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
        id={post.id}
        favoriteCount={post.favoriteCount}
        commentCount={post.commentCount}
        reactionCount={post.reactionCount}
      />

      <PostBottom
        id={post.id}
        commentCount={post.commentCount}
        author={post.author}
        text={post.text}
      />
    </Box>
  );
}
