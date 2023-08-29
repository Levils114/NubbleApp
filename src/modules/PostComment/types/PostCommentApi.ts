import {UserApi} from '@modules';

export interface PostCommentApi {
  id: number;
  message: string;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  user: UserApi;
  meta: any;
}
