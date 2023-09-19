import {metadataDto} from '@api/';
import {Page} from 'src/@types/Pages';

import {CreateCommentParams, PostComment} from '..';
import {postCommentApi} from '../api/postCommentApi';
import {postCommentDto} from '../dtos/PostCommentDto';

async function getPostCommentList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageList = await postCommentApi.getCommentPostList(postId, {
    page,
    per_page: 10,
  });

  const postCommentPageMapped = postCommentPageList.data.map(postCommentDto);
  const metaMapped = metadataDto(postCommentPageList.meta);

  return {
    data: postCommentPageMapped,
    meta: metaMapped,
  };
}

async function createComment({
  post_id,
  message,
}: CreateCommentParams): Promise<PostComment> {
  const postCommentFromApi = await postCommentApi.createComment({
    post_id,
    message,
  });

  return postCommentDto(postCommentFromApi);
}

export const postCommentService = {
  getPostCommentList,
  createComment,
};
