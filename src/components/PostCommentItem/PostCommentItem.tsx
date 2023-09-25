import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, usePostCommentDelete} from '@modules';
import {useToast} from '@services';

import {Box, Text, UserAvatar} from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
  onDeleteCommentSuccess: (element: PostComment) => void;
}

export function PostCommentItem({
  postComment,
  onDeleteCommentSuccess,
}: PostCommentItemProps) {
  const {showToast} = useToast();
  const {deleteComment} = usePostCommentDelete(postComment, {
    onSuccess: () => {
      onDeleteCommentSuccess(postComment);
      showToast({
        type: 'success',
        message: 'Comentário deletado',
      });
    },
  });

  function handleDeleteComment() {
    if (postComment.author.id === 1 || postComment.postData.userId === 1) {
      Alert.alert('Tem certeza que deseja deletar o comentário?', undefined, [
        {text: 'Não', onPress: () => {}},
        {text: 'Sim', onPress: deleteComment},
      ]);
    }
  }

  return (
    <Pressable onLongPress={handleDeleteComment}>
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
    </Pressable>
  );
}
