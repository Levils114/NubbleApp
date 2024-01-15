import {metadataDto} from '@api';
import {Post} from '@modules';
import {Page} from 'src/@types/Pages';

import {postDto} from '../dtos/PostDto';

import {postApi} from './../api/postApi';

async function getPostList(page: number): Promise<Page<Post>> {
  const postList = await postApi.getPostList({page, per_page: 10});

  const postMapped = postList.data.map(postDto);
  const metaMapped = metadataDto(postList.meta);

  return {
    data: postMapped,
    meta: metaMapped,
  };
}

export const postService = {
  getPostList,
};
