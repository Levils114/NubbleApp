import {useMutation, UseMutationOptions} from '@infra';

import {PostComment, postCommentService} from '..';

export function usePostCommentCreate(
  postId: number,
  options?: UseMutationOptions<PostComment>,
) {
  const {mutate, isLoading, error} = useMutation(
    postCommentService.createComment,
    options,
  );

  async function createPost(message: string): Promise<PostComment | void> {
    const postComment = await mutate({
      post_id: postId,
      message,
    });

    if (postComment) {
      return postComment;
    }
  }

  return {
    isLoading,
    error,
    createPost,
  };
}
