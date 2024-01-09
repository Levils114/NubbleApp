import React from 'react';

import {render, fireEvent, mockedPost} from '@test';

import {PostBottom} from '../PostBottom';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should not show commentary link when post has not comments', () => {
    // Given
    const component = render(<PostBottom {...mockedPost} commentCount={0} />);
    const commentLinkElement = component.queryByText(/comentários/);

    expect(commentLinkElement).toBeFalsy();
  });

  it('should called correctly navigate when commentary link is pressed', () => {
    // Given
    const component = render(<PostBottom {...mockedPost} />);
    const commentLinkElement = component.getByText(/comentários/);

    // When
    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
    });
  });
});
