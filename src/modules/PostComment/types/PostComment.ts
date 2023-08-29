export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}
