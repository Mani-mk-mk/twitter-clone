import { PostTypeFB, UserFB } from "./PostTypes";

export interface BookmarksType {
  id: string;
  userId: number;
  postId: number;
  user: UserFB;
  post: PostTypeFB;
}
