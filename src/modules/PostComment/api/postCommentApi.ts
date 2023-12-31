import {PageApi, PageParams} from '@api/';
import {api} from '@api/';

import {CreateCommentParams, PostCommentApi} from '..';

const ENDPOINT = '/user/post_comment';

async function getCommentPostList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageApi<PostCommentApi>> {
  const {data} = await api.get<PageApi<PostCommentApi>>(ENDPOINT, {
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
  const {data} = await api.post<PostCommentApi>(ENDPOINT, {
    post_id,
    message,
  });

  return data;
}

async function deleteComment(comment_id: number) {
  await api.delete(`${ENDPOINT}/${comment_id}`);
}

export const postCommentApi = {
  getCommentPostList,
  createComment,
  deleteComment,
};
