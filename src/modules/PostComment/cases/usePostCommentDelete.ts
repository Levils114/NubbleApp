import {QueryKeys, UseMutationOptions} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {PostComment, postCommentService} from '..';

export function usePostCommentDelete(
  postId: number,
  postComment: PostComment,
  options?: UseMutationOptions<PostComment>,
) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, error} = useMutation({
    mutationFn: () => postCommentService.deleteComment(postComment.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });

      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
  });

  async function deleteComment() {
    mutate();
  }

  return {
    isLoading,
    error,
    deleteComment,
  };
}
