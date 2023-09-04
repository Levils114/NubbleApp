import React from 'react';

import {PostComment} from '@modules';

import {Box, Text, UserAvatar} from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: PostCommentItemProps) {
  return (
    <Box
      gap="s16"
      mb="s32"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start">
      <UserAvatar userAvatar={postComment.author.profileURL} />

      <Box flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.name}
        </Text>

        <Text preset="paragraphSmall">
          {`${postComment.message} - ${postComment.createdAtRelative}`}
        </Text>
      </Box>
    </Box>
  );
}
