import {Post} from '@modules';

import {postListMock} from './../mock/postListMock';

async function getPostList(): Promise<Post[]> {
  return await new Promise(resolve =>
    setTimeout(() => resolve(postListMock), 1000),
  );
}

export const postApi = {
  getPostList,
};
