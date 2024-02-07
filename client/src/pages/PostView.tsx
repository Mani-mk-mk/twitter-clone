import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { PostTypeFB, UserFB } from "../types/PostTypes";
import { useParams } from "react-router-dom";
import UserDetailsTab from "../components/UserDetailsTab";
import SinglePostView from "../components/SinglePostView";
import db from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import FullScreenLoader from "../components/FullScreenLoader.js";

interface PostViewPropsType {
  showAlerts: boolean;
  setShowAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

const PostView = (props: PostViewPropsType) => {
  const [post, setPost] = useState<PostTypeFB | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { postId } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        console.log("Fetching posts...");
        const postRef = doc(db, "posts/" + postId);
        const postData = await getDoc(postRef);
        // console.log(postData.id + " => ", postData.data());
        if (postData.exists()) {
          const post: PostTypeFB = {
            id: postData.id,
            createdAt: postData.data().createdAt,
            userId: postData.data().userId._key.path.segments[6],
            stats: postData.data().stats,
          };
          if (postData.data().tweet) post.tweet = postData.data().tweet;
          if (postData.data().user) {
            post.user = postData.data().user;
          } else {
            const userRef = doc(
              db,
              "users/" + postData.data().userId._key.path.segments[6],
            );
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
              const user: UserFB = {
                id: userDoc.id,
                userName: userDoc.data().userName,
                profilePictureUri: userDoc.data().profilePictureUri,
                profileName: userDoc.data().profileName,
                bannerUri: userDoc.data().bannerUri,
              };
              post.user = user;
            }
          }
          if (postData.data().images) post.images = postData.data().images;

          setPost(post);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    getPosts();
  }, [postId]);

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <main className="min-h-screen w-full max-w-[600px] border-r border-borderColor lg:w-[600px]">
          <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
            <HomeHeader tabIndex={0} />
          </div>

          <UserDetailsTab
            user={post?.user}
            profileName={post?.user?.profileName}
            profilePictureUri={post?.user?.profilePictureUri}
            userName={post?.user?.userName}
          />

          {post && (
            <SinglePostView
              showAlerts={props.showAlerts}
              setShowAlerts={props.setShowAlerts}
              alertMessage={props.alertMessage}
              setAlertMessage={props.setAlertMessage}
              post={post}
            />
          )}
        </main>
      )}
    </>
  );
};

export default PostView;
