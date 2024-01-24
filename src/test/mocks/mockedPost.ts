import {Post} from '@modules';

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 2,
  reactionCount: 8,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    fullName: 'Maria Julia',
    profileUrl: 'https://example.com',
    username: 'mariajulia',
  },
};
