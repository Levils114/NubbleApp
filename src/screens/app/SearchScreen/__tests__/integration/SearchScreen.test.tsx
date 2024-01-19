import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockedUserAuthenticated, renderScreen, fireEvent} from '@test';

import {AppRoutes} from '@routes';

beforeAll(() => {
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockedUserAuthenticated);
});

afterAll(() => {
  jest.clearAllMocks();
});

describe('<SearchScreen />', () => {
  it('Search Flow', () => {
    const screen = renderScreen(<AppRoutes initialRouteName="SearchScreen" />);

    const inputText = screen.getByPlaceholderText(/Digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');
  });
});
