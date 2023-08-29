import React from 'react';
import {Image} from 'react-native';

import {formatDifferenceBetweenDates} from '@helpers';
import {PostComment} from '@modules';

import {Box} from '@components';

import {Text} from '../Text';

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
      <Image
        width={32}
        height={32}
        borderRadius={14}
        source={{uri: postComment.author.profileURL}}
      />

      <Box flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.name}
        </Text>

        <Text preset="paragraphSmall">
          {`${postComment.message} - ${formatDifferenceBetweenDates(
            postComment.createdAt,
          )}`}
        </Text>
      </Box>
    </Box>
  );
}
