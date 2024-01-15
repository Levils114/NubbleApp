import {BASE_URL, PageApi} from '@api';
import {PostCommentApi, POST_COMMENT_ENDPOINT} from '@modules';
import {mockedData} from '@test';
import {http, HttpResponse} from 'msw';

export const postCommentHandlers = [
  http.get(`${BASE_URL}${POST_COMMENT_ENDPOINT}`, async () => {
    const response: PageApi<PostCommentApi> =
      mockedData.mockedPostCommentResponse;

    return HttpResponse.json(response, {status: 200});
  }),
];
