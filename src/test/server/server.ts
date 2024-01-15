import {setupServer} from 'msw/node';

import {postCommentHandlers} from './PostComment';

export const server = setupServer(...postCommentHandlers);
