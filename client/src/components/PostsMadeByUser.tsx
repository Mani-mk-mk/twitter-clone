import { PostTypeFB, PostsByUserDataType, UserFB } from "../types/PostTypes";
import db from "../firebase.js";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import Post from "./Post.js";

interface PostsMadeByUserFBProps {
  tabIndex: number;
  postsByUser: PostsByUserDataType | null;
  setPostsByUser: React.Dispatch<
    React.SetStateAction<PostsByUserDataType | null>
  >;
  profileData: UserFB | null;
}

const PostsMadeByUser = (props: PostsMadeByUserFBProps) => {
  useEffect(() => {
    const fetchPostsMadeByUser = async () => {
      if (props.profileData) {
        const postsCollection = collection(db, "posts");
        const userId = doc(db, "users", props.profileData.id);
        const q = query(postsCollection, where("userId", "==", userId));
        const postsSnapshot = await getDocs(q);
        const posts: PostTypeFB[] = [];
        postsSnapshot.forEach((post) => {
          const postData: PostTypeFB = {
            id: post.id,
            userId: post.data().userId,
            stats: post.data().stats,
            user: props.profileData,
          };

          if (post.data().tweet) postData.tweet = post.data().tweet;
          if (post.data().images) postData.images = post.data().images;
          posts.push(postData);
        });
        // console.log(posts);
        // Create a new PostsByUserDataType object and assign the posts array
        // const updatedPostsByUser: PostsByUserDataType = {
        //   posts: posts,
        // };

        // Set the state with the updated object
        props.setPostsByUser({ posts: [...new Set(posts)] });
      } else {
        console.log("ProfileData not found");
      }
    };
    if (props.tabIndex === 0) {
      fetchPostsMadeByUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.profileData]);

  useEffect(() => {
    console.log(props.postsByUser);
  }, [props.postsByUser]);

  return (
    <div>
      {props.postsByUser?.posts &&
        props.postsByUser.posts.map((post, key) => (
          <Post {...post} key={key} />
        ))}
    </div>
  );
};

export default PostsMadeByUser;
