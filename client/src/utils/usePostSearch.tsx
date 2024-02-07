import { SetStateAction, useEffect, useState } from "react";
import { PostTypeFB, UserFB } from "../types/PostTypes";
import db from "../firebase";
import {
  CollectionReference,
  DocumentData,
  Query,
  QueryDocumentSnapshot,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

// Function to process a single post and retrieve user information
const processPost = async (
  post: QueryDocumentSnapshot<DocumentData, DocumentData>,
): Promise<PostTypeFB> => {
  console.log("Handling the post data!!!!!");
  const singlePost: PostTypeFB = {
    id: post.id,
    userId: post.data().userId._key.path.segments[6],
    stats: post.data().stats,
    createdAt: post.data().createdAt,
  };
  if (post.data().tweet) {
    singlePost.tweet = post.data().tweet;
  }
  if (post.data().images) singlePost.images = post.data().images;

  const userDocRef = doc(db, "users/" + singlePost.userId);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();
    const user: UserFB = {
      id: userSnapshot.id,
      userName: userData.userName,
      profilePictureUri: userData.profilePictureUri,
      profileName: userData.profileName,
      bannerUri: userData.bannerUri,
      joiningDate: userData.joiningDate,
      location: userData.location,
    };
    singlePost.user = user;
  } else {
    console.log("User not found");
  }

  return singlePost;
};

interface PostSearchProps {
  collection?: CollectionReference<DocumentData, DocumentData>;
  q: Query<DocumentData, DocumentData> | undefined;
  pageNumber: number;
}

const usePostSearch = (props: PostSearchProps) => {
  const { q, pageNumber } = props;
  const [posts, setPosts] = useState<PostTypeFB[] | null>(null);
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    let isSubscribed = true;
    console.log("PAGE NUMBER: ", pageNumber);
    console.log("QUERY: ", q);
    // console.count("Component Rendered");
    const fetchFirstBatch = async () => {
      // Ensures q is defined before proceeding
      if (!q) return;

      if (isSubscribed) {
        const postSnapshots = await getDocs(q);

        setLastKey(postSnapshots.docs[postSnapshots.docs.length - 1].id);

        console.log(
          "Last Key: " + postSnapshots.docs[postSnapshots.docs.length - 1].id,
        );

        const processedPosts: SetStateAction<PostTypeFB[] | null> = [];

        // const processedPosts = await Promise.all(
        for (let index = 0; index < postSnapshots.docs.length; index++) {
          const temp = await processPost(postSnapshots.docs[index]);
          processedPosts.push(temp);
        }
        //   // postSnapshots.docs.map(async (post) => await processPost(post)),
        // );

        console.log("Processed POsts below....");
        console.log(processedPosts.length);
        if (pageNumber === 1) {
          setPosts(processedPosts);
        } else {
          setPosts((prevPosts) => {
            const uniquePosts = [
              ...new Set([...prevPosts!, ...processedPosts]),
            ];
            return uniquePosts;
          });
        }
      }
    };
    fetchFirstBatch();

    return () => {
      isSubscribed = false;
    };
  }, [q]);

  return { posts, lastKey, setPosts };
};

export default usePostSearch;
