import {PageApi, PageParams} from '@api/';
import {api} from '@api/';

import {PostCommentApi} from '..';

async function getCommentPostList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageApi<PostCommentApi>> {
  const {data} = await api.get<PageApi<PostCommentApi>>('/user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });

  return data;
}

export const postCommentApi = {
  getCommentPostList,
};
