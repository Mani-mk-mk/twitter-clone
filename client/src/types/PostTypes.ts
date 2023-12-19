export interface PostProps {
  profileName: string;
  userName: string;
  profilePictureUri: string;
  text: string;
  images?: string[];
  stats: StatsProps;
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
