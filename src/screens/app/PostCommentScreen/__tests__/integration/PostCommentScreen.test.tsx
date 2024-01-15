import React from 'react';

import {renderScreen, server} from '@test';

import {PostCommentScreen} from '../../PostCommentScreen';

describe('integration: PostCommentScreen', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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

    const comment = await screen.findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();
  });
});
