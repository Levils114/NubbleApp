import {formatDifferenceBetweenDates} from '@helpers';

import {PostCommentApi, PostComment} from '..';

export function postCommentDto(postCommentApi: PostCommentApi): PostComment {
  return {
    id: postCommentApi.id,
    message: postCommentApi.message,
    createdAt: postCommentApi.created_at,
    createdAtRelative: formatDifferenceBetweenDates(postCommentApi.created_at),
    author: {
      id: postCommentApi.user.id,
      name: postCommentApi.user.full_name,
      userName: postCommentApi.user.username,
      profileURL: postCommentApi.user.profile_url,
    },
    postData: {
      userId: postCommentApi.post?.user_id,
    },
  };
}
