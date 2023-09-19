import {PageApi, PageParams} from '@api/';
import {api} from '@api/';

import {CreateCommentParams, PostCommentApi} from '..';

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

async function createComment({
  post_id,
  message,
}: CreateCommentParams): Promise<PostCommentApi> {
  const {data} = await api.post<PostCommentApi>('/user/post_comment', {
    post_id,
    message,
  });

  return data;
}

export const postCommentApi = {
  getCommentPostList,
  createComment,
};
