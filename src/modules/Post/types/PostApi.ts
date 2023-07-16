import {UserApi} from '@modules';

export interface PostMetaApi {
  like_count: string; // '9';
  favorite_count: string; // '1';
  comments_count: string; // '2';
}

export interface PostAPI {
  id: number; // 1;
  text: string; // 'Bom dia!';
  user_id: number; // 1;
  image_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg';
  is_fixed: boolean; // false;
  is_activated: boolean; // true;
  created_at: string; // '2023-07-11T13:05:55.318+10:00';
  updated_at: string; // '2023-07-11T13:05:55.333+10:00';
  user: UserApi;
  status: string; // 'published';
  meta: PostMetaApi;
}
