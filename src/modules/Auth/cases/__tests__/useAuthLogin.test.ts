import {mockedAuthCredentialsSuccess, renderHook, waitFor} from '@test';

import {authServices} from '../..';
import {useAuthLogin} from '../useAuthLogin';

const mockedSaveCredentials = jest.fn();
jest.mock('@services', () => ({
  useAuthCredentials: () => ({
    saveCredentials: mockedSaveCredentials,
  }),
}));
jest.mock('@infra', () => ({
  QueryKeys: {
    PostList: 'PostList',
    PostCommentList: 'PostCommentList',
    UserGetInfo: 'UserGetInfo',
    IsUserNameAvailable: 'IsUserNameAvailable',
    IsEmailAvailable: 'IsEmailAvailable',
  },
}));

describe('useAuthLogin', () => {
  it('should saves credentials when login works', async () => {
    jest
      .spyOn(authServices, 'authLogin')
      .mockResolvedValueOnce(mockedAuthCredentialsSuccess);

    const {result} = renderHook(() => useAuthLogin());
    result.current.authLogin({
      email: 'levils114@gmail.com',
      password: '123456',
    });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(mockedSaveCredentials).toHaveBeenCalledWith(
      mockedAuthCredentialsSuccess,
    );
  });

  it('should calls onError when login dont work', () => {
    const {result} = renderHook(() => useAuthLogin());
  });
});
