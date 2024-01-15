import {mockedAuthCredentialsSuccess, renderHook, waitFor} from '@test';

import {authServices} from '../..';
import {useAuthLogin} from '../useAuthLogin';

const mockedSaveCredentials = jest.fn();
jest.mock('@services', () => ({
  useAuthCredentials: () => ({
    saveCredentials: mockedSaveCredentials,
  }),
}));

describe('useAuthLogin', () => {
  it('should saves credentials when login works', async () => {
    // Given
    jest
      .spyOn(authServices, 'authLogin')
      .mockResolvedValueOnce(mockedAuthCredentialsSuccess);

    const mockedOnSuccess = jest.fn();
    const {result} = renderHook(() =>
      useAuthLogin({onSuccess: mockedOnSuccess}),
    );

    // When
    result.current.authLogin({
      email: 'levils114@gmail.com',
      password: '123456',
    });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(mockedOnSuccess).toHaveBeenCalledWith(
      mockedAuthCredentialsSuccess,
      undefined,
      undefined,
    );
    expect(mockedSaveCredentials).toHaveBeenCalledWith(
      mockedAuthCredentialsSuccess,
    );
  });

  it('should calls onError when login dont work', async () => {
    // Given
    const errorMessage = 'invalid user';
    jest
      .spyOn(authServices, 'authLogin')
      .mockRejectedValueOnce(new Error(errorMessage));
    const mockedOnError = jest.fn();
    const {result} = renderHook(() => useAuthLogin({onError: mockedOnError}));

    // When
    result.current.authLogin({
      email: 'levils114@gmail.com',
      password: '123456',
    });

    await waitFor(() => expect(result.current.isError).toBeTruthy());
    expect(mockedOnError).toHaveBeenCalledWith(errorMessage, undefined, {});
  });
});
