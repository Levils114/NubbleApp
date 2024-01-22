import {setupServer} from 'msw/node';

import {postCommentHandlers} from './PostComment';
import {userHandlers} from './User';

export const server = setupServer(...postCommentHandlers, ...userHandlers);
