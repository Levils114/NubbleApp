export interface Post {
  id: number;
  text: string;
  author: {
    id: number;
    profileUrl: string;
    fullName: string;
    username: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}
