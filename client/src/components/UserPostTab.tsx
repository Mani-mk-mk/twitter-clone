import { useEffect, useState } from "react";
import {
  LikePostsByUserDataType,
  PostsByUserDataType,
  ProfileDataType,
} from "../types/PostTypes";
import axiosInstance from "../utils/axios";
import Post from "./Post";

interface UserPostTabPropTypes {
  tabIndex: number;
  userId: number;
  postsByUser?: PostsByUserDataType | null;
  profileData?: ProfileDataType | null;
  likePostByUser?: LikePostsByUserDataType[] | null;
}

const UserPostTab = (props: UserPostTabPropTypes) => {
  const [likedPostByUser, setLikedPostByUser] = useState<
    LikePostsByUserDataType[] | null
  >(null);

  useEffect(() => {
    if (props.tabIndex === 2) {
      const renderLikes = async () => {
        try {
          const likesResponse = await axiosInstance.get(
            `likes?likedBy=${props.userId}&_expand=post&_expand=user`,
          );

          const mappedLikes = likesResponse.data.map(
            (res: LikePostsByUserDataType) => ({
              ...res.post,
              user: res.user,
            }),
          );

          setLikedPostByUser(mappedLikes);
        } catch (error) {
          console.log(error);
        }
      };

      renderLikes();
    }
  }, [props.tabIndex, props.userId]);

  return (
    <div>
      {props.tabIndex === 0 &&
        props.postsByUser?.posts.map((post, key) => {
          if (!props.profileData) {
            return;
          }
          post["user"] = props.profileData;
          return <Post {...post} key={key} />;
        })}

      {props.tabIndex === 2 &&
        likedPostByUser?.map((post, key) => <Post {...post} key={key} />)}
    </div>
  );
};

export default UserPostTab;
