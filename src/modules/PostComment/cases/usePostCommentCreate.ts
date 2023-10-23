import {QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {PostComment, postCommentService} from '..';

export function usePostCommentCreate(postId: number) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, error} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: ({message}) =>
      postCommentService.createComment({post_id: postId, message}),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      }),
  });

  /* const {mutate, isLoading, error} = useMutation(
    postCommentService.createComment,
    options,
  ); */

  async function createPost(message: string): Promise<PostComment | void> {
    mutate({
      message,
    });
  }

  return {
    isLoading,
    error,
    createPost,
  };
}
