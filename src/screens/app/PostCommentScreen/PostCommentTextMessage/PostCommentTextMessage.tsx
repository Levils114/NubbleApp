import React from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@modules';

import {TextMessage} from '@components';

interface PostCommentTextMessageProps {
  postId: number;
}

export function PostCommentTextMessage({postId}: PostCommentTextMessageProps) {
  const [message, setMessage] = React.useState('');

  const {createPost} = usePostCommentCreate(postId);

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
