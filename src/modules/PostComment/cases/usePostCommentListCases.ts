import {usePaginatedList} from '@modules';

import {PostComment, postCommentService} from '..';

export function usePostCommentListCases(postId: number) {
  async function getPostCommentList(page: number) {
    return await postCommentService.getPostCommentList(postId, page);
  }
  return usePaginatedList<PostComment>(getPostCommentList);
}
