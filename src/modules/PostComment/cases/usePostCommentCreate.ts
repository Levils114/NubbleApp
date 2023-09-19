/* eslint-disable no-catch-shadow */
import React from 'react';

import {PostComment, postCommentService} from '..';

export function usePostCommentCreate(postId: number) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<unknown>();

  async function createPost(message: string): Promise<PostComment | undefined> {
    setIsLoading(true);
    setError(null);

    try {
      const postComment = await postCommentService.createComment({
        post_id: postId,
        message,
      });

      return postComment;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    createPost,
  };
}
