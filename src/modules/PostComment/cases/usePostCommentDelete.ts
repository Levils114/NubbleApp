import {useMutation, UseMutationOptions} from '@infra';

import {PostComment, postCommentService} from '..';

export function usePostCommentDelete(
  postComment: PostComment,
  options?: UseMutationOptions<PostComment>,
) {
  const {mutate, isLoading, error} = useMutation(
    postCommentService.deleteComment,
    options,
  );

  async function deleteComment() {
    return await mutate(postComment);
  }

  return {
    isLoading,
    error,
    deleteComment,
  };
}
