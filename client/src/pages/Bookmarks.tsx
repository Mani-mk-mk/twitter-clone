import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { HeaderProps } from "../types/types";
import Post from "../components/Post";
import db from "../firebase.js";
import {
  collection,
  doc,
  documentId,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { PostTypeFB, UserFB } from "../types/PostTypes.js";
import FullScreenLoader from "../components/FullScreenLoader.js";

const Bookmarks = (props: HeaderProps) => {
  const [bookmarks, setBookmarks] = useState<PostTypeFB[] | null>(null);
  const [bookmarksCount, setBookmarksCount] = useState(0);
  const bookmarksCollection = collection(db, "bookmarks");
  const userRef = doc(db, "users/9NzY4bJf6DaSRpKXO4AA");

  const [isLoading, setIsLoading] = useState(false);

  const [lastVisible, setLastVisible] = useState<string>();

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const countQuery = query(
          bookmarksCollection,
          where("userId", "==", userRef),
        );

        const snapShot = await getCountFromServer(countQuery);
        setBookmarksCount(snapShot.data().count);
      } catch (error) {
        console.log(error);
      }
    };

    getBookmarks();
  }, [bookmarksCollection, userRef]);

  const fetchFirstBatchBookmarks = async () => {
    setIsLoading(true);
    const limitData = Math.min(bookmarksCount, 5);
    const postIds: string[] = [];
    const q = query(
      bookmarksCollection,
      where("userId", "==", userRef),
      orderBy(documentId(), "asc"),
      limit(limitData),
    );
    const bookmarkSnapshots = await getDocs(q);

    bookmarkSnapshots.forEach((bookmark) => {
      postIds.push(bookmark.data().postId);
    });

    const bookmarkedPostQuery = query(
      collection(db, "posts"),
      where(documentId(), "in", postIds),
    );

    try {
      const postsSnapshot = await getDocs(bookmarkedPostQuery);
      setLastVisible(postsSnapshot.docs[postsSnapshot.docs.length - 1].id);
      const bookmarkedPosts: PostTypeFB[] = [];
      postsSnapshot.forEach(async (postDoc) => {
        const postData = postDoc.data();
        const post: PostTypeFB = {
          id: postDoc.id,
          userId: postData.userId,
          createdAt: postData.createdAt,
        };
        if (postData.tweet) post.tweet = postData.tweet;
        if (postData.images) post.images = postData.images;
        if (postData.stats) post.stats = postData.stats;
        if (postData.user) {
          post.user = postData.user;
        } else {
          const userId = postData.userId._key.path.segments[6];
          const userDocRef = doc(db, "users/" + userId);
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
            post.user = user;
          }
        }

        bookmarkedPosts.push(post);
      });
      setBookmarks(bookmarkedPosts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!bookmarks || bookmarks.length === 0) {
      fetchFirstBatchBookmarks();
    } else {
      // fetchNextBatchBookmarks();
    }
  }, [fetchFirstBatchBookmarks]);

  useEffect(() => {
    console.log(lastVisible);
  }, [lastVisible]);

  return (
    <>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <main className="min-h-screen w-full max-w-[600px] border-r border-borderColor lg:w-[600px]">
          <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
            <HomeHeader tabIndex={props.tabIndex} />
          </div>

          {bookmarks?.length === 0 ? (
            <div className="my-8 flex justify-center gap-0 text-white">
              <div>
                <h1 className="font-roboto text-3xl font-extrabold">
                  Save posts for later
                </h1>
                <p className="text-md max-w-[350px] py-1 text-unhighlighted-color">
                  Bookmark posts to easily find them again in the future.
                </p>
              </div>
            </div>
          ) : (
            <div>
              {bookmarks?.map((bookmark, key) => {
                return <Post {...bookmark} key={key} />;
              })}
            </div>
          )}
        </main>
      )}
    </>
  );
};

export default Bookmarks;
