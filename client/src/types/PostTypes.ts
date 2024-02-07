import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";
import { BookmarksType } from "./StatsType";
import { CommentType } from "./CommentType";

export interface PostProps {
  tweet?: string;
  images?: string[];
  stats?: StatsProps;
}
export interface PostType extends PostProps {
  id?: number | string;
  userId: number | string;
  postId?: number;
  user?: User;
  likes?: number[] | null;
  bookmarks?: number[] | null;
}

export interface LikesArrayType {
  posts: { [key: string]: boolean };
}

export interface PostTypeFB extends PostProps {
  id: string;
  userId: DocumentReference<DocumentData, DocumentData>;
  user?: UserFB | null;
  likes?: LikesArrayType | null;
  bookmarks?: LikesArrayType | null;
  createdAt: Timestamp;
}

export interface CommentTypePostFB {
  userId: DocumentReference<DocumentData, DocumentData>;
  postId?: DocumentReference<DocumentData, DocumentData>;
  commentId?: DocumentReference<DocumentData, DocumentData>;
  user?: UserFB | null;
  tweet?: string;
  images?: string[];
  stats?: StatsProps;
  likes?: LikesArrayType | null;
  bookmarks?: LikesArrayType | null;
  createdAt: Timestamp;

}

export interface CommentTypeFB extends CommentTypePostFB {
  id: string;
}

export interface UserFB {
  id: string;
  userName: string;
  attachments?: string;
  profilePictureUri: string;
  profileName: string;
  bannerUri: string;
  bio?: string;
  location?: string;
  joiningDate?: string;
  followers?: number;
  following?: number;
}

export interface User {
  id: number | string;
  userName: string;
  postId?: number[];
  profilePictureUri: string;
  profileName: string;
  bannerUri: string;
  bio?: string;
  location?: string;
  joiningDate?: string;
  followers?: number[];
  following?: number[];
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

export interface PostsByUserDataType {
  posts: PostTypeFB[] | null;
}

export interface LikePostsByUserDataType {
  userId: DocumentReference<DocumentData, DocumentData>;
  postId: DocumentReference<DocumentData, DocumentData>;
  post: PostTypeFB;
  user: UserFB;
}
