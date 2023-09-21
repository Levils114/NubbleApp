import React from 'react';
import {Keyboard} from 'react-native';

import {PostComment, usePostCommentCreate} from '@modules';

import {TextMessage} from '@components';

interface PostCommentTextMessageProps {
  postId: number;
  onCreateCommentSuccess: (element: PostComment) => void;
}

export function PostCommentTextMessage({
  postId,
  onCreateCommentSuccess,
}: PostCommentTextMessageProps) {
  const [message, setMessage] = React.useState('');

  const {createPost} = usePostCommentCreate(postId, {
    onSuccess: postComment => {
      onCreateCommentSuccess(postComment!);
    },
  });

  async function onPressSend() {
    await createPost(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextMessage
      value={message}
      onChangeValue={setMessage}
      onPressSend={onPressSend}
    />
  );
}
