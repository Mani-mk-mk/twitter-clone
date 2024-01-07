import { ChangeEvent, useEffect, useState } from "react";
import { PostType, User } from "../types/PostTypes";
import axiosInstance from "../utils/axios";
import PostActionItem from "./PostActionItem";

interface CommentPropsType {
  postId: number;
  showAlerts: boolean;
  setShowAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
  comments: PostType[] | null;
  setComments: React.Dispatch<React.SetStateAction<PostType[] | null>>;
}

const Comment = (props: CommentPropsType) => {
  const [user, setUser] = useState<User | null>(null);
  const [reply, setReply] = useState("");
  const [maxCommentId, setMaxCommentId] = useState<number>(0);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosInstance.get("/users/0");
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getMaxCommentId = async () => {
      try {
        const response = await axiosInstance.get(
          "/comments/?_sort=id&_order=desc",
        );
        if (response.status === 200) {
          setMaxCommentId(response.data[0].id);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
    getMaxCommentId();
  }, []);

  const handleReplyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };

  const postReply = async () => {
    const defaultStats = {
      comments: 0,
      retweets: 0,
      likes: 0,
      views: 200,
    };

    try {
      const replyData: PostType = {
        id: maxCommentId + 1,
        userId: 0,
        postId: props.postId,
        tweet: reply,
        stats: defaultStats,
      };
      const response = await axiosInstance.post("/comments", replyData);
      replyData["user"] = user!;

      if (response.status === 201) {
        console.log("Replied successfully!");
        props.setComments((prevComments) =>
          prevComments ? [replyData, ...prevComments] : [replyData],
        );
        props.setAlertMessage("Posted successfully.");
        props.setShowAlerts(true);
        setTimeout(() => {
          props.setShowAlerts(false);
        }, 3000); // Hide the alert after 5 seconds
      }
    } catch (error) {
      props.setAlertMessage("Something went wrong.");
      props.setShowAlerts(true);
      setTimeout(() => {
        props.setShowAlerts(false);
      }, 3000); // Hide the alert after 5 seconds
    }
  };
  return (
    <div className="flex items-center gap-4 px-4 pb-2">
      <div className="h-[60px] w-[60px] rounded-full">
        <img
          className="h-full w-full rounded-full"
          src={user?.profilePictureUri}
          alt="user"
        />
      </div>
      <div className="w-full">
        <div className="py-1 text-lg text-unhighlighted-color">
          Replying to{" "}
          <span className="font-medium text-commentHoverText">@User</span>
        </div>

        <div className="w-full">
          <div className="py-2">
            <input
              onChange={handleReplyChange}
              value={reply}
              placeholder="Post your reply"
              className="w-full bg-black p-1 text-lg text-white placeholder-unhighlighted-color focus:outline-none"
              type="text"
            />
          </div>
          <div>
            <PostActionItem
              clickHandler={postReply}
              reply={reply}
              setReply={setReply}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
