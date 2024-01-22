import {BASE_URL, PageApi} from '@api';
import {UserApi, USER_ENDPOINT} from '@modules';
import {http, HttpResponse} from 'msw';

import {userMocked} from './mocks';

const FULL_ENDPOINT = `${BASE_URL}${USER_ENDPOINT}`;

export const userHandlers = [
  http.get(FULL_ENDPOINT, async () => {
    const response: PageApi<UserApi> = userMocked.mockedUserResponse;

    return HttpResponse.json(response, {status: 200});
  }),
  http.get<{userId: string}>(`${FULL_ENDPOINT}/:userId`, async ({params}) => {
    const userApi = userMocked.userList.find(
      user => user.id.toString() === params.userId,
    );

    return HttpResponse.json(userApi, {status: 200});
  }),
];
