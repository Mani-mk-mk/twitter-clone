export interface PostProps {
  tweet?: string;
  images?: string[];
  stats: StatsProps;
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

export interface PostType extends PostProps {
  id: number;
  userId: number;
  user?: User;
}

export interface StatsProps {
  likeCount: number | string;
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
