import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {
  renderScreen,
  server,
  fireEvent,
  mateusAuthCredentials,
  mateusPostCommentAPI,
  waitForElementToBeRemoved,
  resetInMemoryResponse,
  waitFor,
  act,
} from '@test';

import {PostCommentScreen} from '../../PostCommentScreen';

describe('integration: PostCommentScreen', () => {
  beforeAll(() => {
    server.listen();
    jest.useFakeTimers();
  });
  afterEach(() => {
    server.resetHandlers();
    resetInMemoryResponse();
  });
  afterAll(() => {
    server.close();
    jest.useRealTimers();
  });

  test('When ADDING a comment the list is automatically updated', async () => {
    const screen = renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
          },
        }}
      />,
    );

    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    fireEvent.changeText(inputText, 'Novo comentário');

    const sendCommentButton = screen.getByText('Enviar');
    fireEvent.press(sendCommentButton);

    const newCommentary = await screen.findByText(/Novo comentário/i);
    const comments = await screen.findAllByTestId('post-comment-item-id');

    expect(newCommentary).toBeTruthy();
    expect(comments.length).toEqual(3);
  });

  test('When DELETING a comment, the list should uptade wihout comment and toast should appear', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((_, __, buttons) => {
        if (buttons && buttons[1]) {
          mockedConfirm = buttons[1].onPress;
        }
      });

    const screen = renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(mateusPostCommentAPI.message, {
      exact: false,
    });

    expect(comment).toBeTruthy();

    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();

    mockedConfirm && mockedConfirm();

    await waitForElementToBeRemoved(() =>
      screen.getByText(mateusPostCommentAPI.message, {
        exact: false,
      }),
    );

    const comments = await screen.findAllByTestId('post-comment-item-id');
    expect(comments.length).toEqual(1);

    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy(),
    );

    act(() => jest.runAllTimers());

    const toast = screen.queryByTestId('toast-message');

    expect(toast).toBeNull();
  });
});
