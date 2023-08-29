import {usePaginatedList} from '@modules';

import {Post, postService} from '..';

export function usePostListCases() {
  return usePaginatedList<Post>(postService.getPostList);
}
