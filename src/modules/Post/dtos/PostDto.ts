import {Post, PostAPI} from '..';

export function postDto(postApi: PostAPI): Post {
  return {
    id: postApi.id,
    text: postApi.text,
    imageURL: postApi.image_url,
    commentCount: Number(postApi.meta.comments_count),
    favoriteCount: Number(postApi.meta.favorite_count),
    reactionCount: Number(postApi.meta.like_count),
    author: {
      id: postApi.user.id,
      fullName: postApi.user.full_name,
      username: postApi.user.username,
      profileUrl: postApi.user.profile_url,
    },
  };
}
