import { ChangeEvent, useEffect, useState } from "react";
import { CommentTypeFB, CommentTypePostFB, UserFB } from "../types/PostTypes";
import PostActionItem from "./PostActionItem";
import db from "../firebase.js";
import { Timestamp, addDoc, collection, doc, getDoc } from "firebase/firestore";

interface CommentPropsType {
  postId: string;
  showAlerts: boolean;
  setShowAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
  comments: CommentTypeFB[] | null;
  setComments: React.Dispatch<React.SetStateAction<CommentTypeFB[] | null>>;
}

const Comment = (props: CommentPropsType) => {
  const [user, setUser] = useState<UserFB | null>(null);
  const [reply, setReply] = useState("");
  // const [maxCommentId, setMaxCommentId] = useState<number>(0);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userRef = doc(db, "users/" + "9NzY4bJf6DaSRpKXO4AA");
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userId = userDoc.id;
          const userData: UserFB = {
            id: userId,
            userName: userDoc.data().userName,
            profilePictureUri: userDoc.data().profilePictureUri,
            profileName: userDoc.data().profileName,
            bannerUri: userDoc.data().bannerUri,
            joiningDate: userDoc.data().joiningDate,
            location: userDoc.data().location,
          };
          // const user = {
          //   ...userData,
          //   id: userDoc.id,
          // };

          setUser(userData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
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
      const replyData: CommentTypePostFB = {
        stats: defaultStats,
        tweet: reply,
        postId: doc(db, "posts/" + props.postId),
        userId: doc(db, "users/" + user?.id),
        createdAt: Timestamp.now(),
      };
      const commentsCollection = collection(db, "comments");
      const postReply = await addDoc(commentsCollection, replyData);
      if (postReply.id) {
        const reply: CommentTypeFB = {
          id: postReply.id,
          ...replyData,
        };
        console.log("Replied successfully!");
        props.setComments((prevComments) =>
          prevComments ? [reply, ...prevComments] : [reply],
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
