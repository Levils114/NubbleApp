import {QueryKeys, usePaginatedList} from '@infra';

import {Post, postService} from '..';

export function usePostListCases() {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getPostList);
}
