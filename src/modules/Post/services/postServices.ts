import {Post} from '@modules';

import {postApi} from './../api/postApi';

async function getPostList(): Promise<Post[]> {
  const postList = await postApi.getPostList();
  return postList;
}

export const postService = {
  getPostList,
};
