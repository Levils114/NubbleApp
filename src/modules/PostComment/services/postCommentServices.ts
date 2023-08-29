import {metadataDto} from '@api/';
import {Page} from 'src/@types/Pages';

import {PostComment} from '..';
import {postCommentApi} from '../api/postCommentApi';
import {postCommentDto} from '../dtos/PostCommentDto';

async function getPostList(
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

export const postService = {
  getPostList,
};
