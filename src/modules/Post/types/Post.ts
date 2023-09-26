export interface Post {
  id: number;
  text: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}
