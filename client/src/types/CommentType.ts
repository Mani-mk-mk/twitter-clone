import { StatsProps, User } from "./PostTypes";

export interface CommentProps {
  comment?: string;
  images?: string[];
  stats: StatsProps;
}

export interface CommentType extends CommentProps {
  id: number;
  userId: number;
  user?: User;
  replies?: CommentType[];
}
