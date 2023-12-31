import { BookmarksType } from "./StatsType";

export interface PostProps {
  tweet?: string;
  images?: string[];
  stats?: StatsProps;
}
export interface PostType extends PostProps {
  id: number;
  userId: number;
  postId?: number;
  user?: User;
  likes?: number[] | null;
  bookmarks?: number[] | null;
}
export interface User {
  id: number;
  userName: string;
  postId: number[];
  profilePictureUri: string;
  profileName: string;
  bannerUri: string;
  bio?: string;
  location?: string;
  joiningDate?: string;
  followers: number[];
  following: number[];
}

export interface Comments extends PostType {
  postId: number;
  replies: Comments[] | [];
}

export interface StatsProps {
  likes: number;
  comments: number | string;
  views: number | string;
  retweets: number | string;
}

export interface ObjectType {
  [key: string]: string;
}

export interface ProfileDataType {
  id: number;
  userName: string;
  postId: number[];
  profilePictureUri: string;
  profileName: string;
  bannerUri: string;
  bio?: string;
  following: number[];
  followers: number[];
  location?: string;
  joiningDate: string;
  attachments?: string;
}

export interface PostsByUserDataType extends ProfileDataType {
  posts: PostType[];
}

export interface LikePostsByUserDataType extends BookmarksType {
  post: PostType;
  user: User;
}
