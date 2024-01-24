import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@modules';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

export function PostBottom({
  id,
  author,
  text,
  commentCount,
}: Pick<Post, 'id' | 'author' | 'text' | 'commentCount'>) {
  const {navigate} = useNavigation();

  function handleGoToPostComment() {
    navigate('PostCommentScreen', {postId: id});
  }

  return (
    <Box paddingHorizontal="s24">
      <Text bold>{author.username}</Text>
      <Text mb="s8" color="gray1">
        {text}
      </Text>

      {commentCount > 0 && (
        <Pressable onPress={handleGoToPostComment}>
          <Text
            color="primary"
            bold
            preset="paragraphSmall">{`ver ${commentCount} comentários`}</Text>
        </Pressable>
      )}
    </Box>
  );
}
