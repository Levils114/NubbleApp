import React from 'react';

import {authCredentialsStorage} from '@services';
import {
  mockedUserAuthenticated,
  renderScreen,
  fireEvent,
  server,
  userMocked,
  act,
} from '@test';

import {AppRoutes} from '@routes';

jest.unmock('@react-navigation/native');

describe('<SearchScreen />', () => {
  beforeAll(() => {
    server.listen();
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedUserAuthenticated);
    jest.useFakeTimers();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
    jest.clearAllMocks();
    jest.useRealTimers();
  });
  it('Search Flow', async () => {
    const screen = renderScreen(<AppRoutes initialRouteName="SearchScreen" />);

    const inputText = screen.getByPlaceholderText(/Digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers());

    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    fireEvent.press(user1);

    const userFullName = await screen.findByText(userMocked.user1.full_name);
    expect(userFullName).toBeTruthy();

    const comebackButton = screen.getByText(/voltar/i);
    fireEvent.press(comebackButton);

    const inputTextComeback = screen.getByPlaceholderText(/Digite sua busca/i);
    fireEvent.changeText(inputTextComeback, '');
    act(() => jest.runAllTimers());

    const user1History = screen.getByText(userMocked.user1.username);
    expect(user1History).toBeTruthy();

    const trashButton = screen.getByTestId('trash-button');
    fireEvent.press(trashButton);

    const user1DeletedFromHistory = screen.queryByText(
      userMocked.user1.username,
    );
    expect(user1DeletedFromHistory).toBeFalsy();
  });
});
