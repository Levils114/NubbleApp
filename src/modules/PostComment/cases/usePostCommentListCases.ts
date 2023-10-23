import {QueryKeys, usePaginatedList} from '@infra';

import {PostComment, postCommentService} from '..';

export function usePostCommentListCases(postId: number) {
  async function getPostCommentList(page: number) {
    return await postCommentService.getPostCommentList(postId, page);
  }

  return usePaginatedList<PostComment>(
    [QueryKeys.PostCommentList, postId],
    getPostCommentList,
  );
}
