import {usePaginatedList} from '@infra';

import {Post, postService} from '..';

export function usePostListCases() {
  return usePaginatedList<Post>(postService.getPostList);
}
