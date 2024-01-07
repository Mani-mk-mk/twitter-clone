import { useEffect } from "react";
import axiosInstance from "../utils/axios";
import { PostType } from "../types/PostTypes";
import Post from "./Post";

interface CommentPropsType {
  postId: number;
  comments: PostType[] | null;
  setComments: React.Dispatch<React.SetStateAction<PostType[] | null>>;
}

const DisplayComments = (props: CommentPropsType) => {
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axiosInstance.get(
          `/comments?postId=${props.postId}&_expand=user`,
        );
        if (response.status === 200) {
          console.log(response.data);
          props.setComments(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [props.postId]);

  return (
    <>
      {props.comments?.map((comment, key) => <Post key={key} {...comment} />)}
    </>
  );
};

export default DisplayComments;
