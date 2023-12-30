import { PostType, User } from "./PostTypes";

export interface BookmarksType {
  id: number;
  userId: number;
  postId: number;
  user: User;
  post: PostType;
}
