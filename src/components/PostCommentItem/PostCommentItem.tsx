import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, usePostCommentDelete} from '@modules';
import {useToastService} from '@services';
import {useAuthCredentialsContextVersion} from '@services';

import {Box, Text, UserAvatar} from '@components';

interface PostCommentItemProps {
  postId: number;
  postComment: PostComment;
}

export function PostCommentItem({postId, postComment}: PostCommentItemProps) {
  const {showToast} = useToastService();
  const {authCredentials} = useAuthCredentialsContextVersion();
  const {deleteComment} = usePostCommentDelete(postId, postComment, {
    onSuccess: () => {
      showToast({
        type: 'success',
        message: 'Comentário deletado',
      });
    },
  });

  function handleDeleteComment() {
    const userId = authCredentials?.user.id;
    const postAuthor = postComment.author.id;
    const commentAuthor = postComment.postData.userId;

    if (postAuthor === userId || commentAuthor === userId) {
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
