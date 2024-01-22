import React from 'react';

import {authCredentialsStorage} from '@services';
import {
  mockedUserAuthenticated,
  renderScreen,
  fireEvent,
  server,
  userMocked,
} from '@test';

import {AppRoutes} from '@routes';

describe('<SearchScreen />', () => {
  beforeAll(() => {
    server.listen();
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedUserAuthenticated);
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
    jest.clearAllMocks();
  });
  it('Search Flow', async () => {
    const screen = renderScreen(<AppRoutes initialRouteName="SearchScreen" />);

    const inputText = screen.getByPlaceholderText(/Digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');

    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();
  });
});
