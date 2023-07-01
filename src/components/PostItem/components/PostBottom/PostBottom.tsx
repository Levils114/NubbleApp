import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@modules';

import {Box, Text} from '@components';

export function PostBottom({
  author,
  text,
  commentCount,
}: Pick<Post, 'author' | 'text' | 'commentCount'>) {
  return (
    <Box paddingHorizontal="s24">
      <Text bold>{author.userName}</Text>
      <Text mb="s8" color="gray1">
        {text}
      </Text>

      {commentCount > 0 && (
        <Pressable>
          <Text
            color="primary"
            bold
            preset="paragraphSmall">{`ver ${commentCount} comentários`}</Text>
        </Pressable>
      )}
    </Box>
  );
}
