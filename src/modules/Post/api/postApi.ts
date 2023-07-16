import {PageApi, PageParams} from '@api/';
import {api} from '@api/';

import {PostAPI} from '../types/PostApi';

async function getPostList(params?: PageParams): Promise<PageApi<PostAPI>> {
  const {data} = await api.get<PageApi<PostAPI>>('/user/post', {
    params,
  });

  return data;
}

export const postApi = {
  getPostList,
};
