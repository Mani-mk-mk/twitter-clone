import { useEffect, useState } from "react";
import { CommentTypeFB } from "../types/PostTypes";
import Post from "./Post";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import db from "../firebase.js";

interface CommentPropsType {
  postId: string;
  comments: CommentTypeFB[] | null;
  setComments: React.Dispatch<React.SetStateAction<CommentTypeFB[] | null>>;
}

const DisplayComments = (props: CommentPropsType) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        setIsLoading(true);
        const postRef = doc(db, "posts/" + props.postId);
        const q = query(
          collection(db, "comments"),
          where("postId", "==", postRef),
        );
        const commentSnapshot = await getDocs(q);
        commentSnapshot.forEach((commentDoc) => {
          console.log(commentDoc.data());
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.postId]);

  return (
    <>
      {isLoading ? (
        <div className="text-2xl text-white">Loading...</div>
      ) : (
        props.comments?.map((comment, key) => {
          if (comment.id) return <Post key={key} {...comment} />;
          else return null;
        })
      )}
    </>
  );
};

export default DisplayComments;
