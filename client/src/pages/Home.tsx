import HomeHeader from "../components/HomeHeader";
import PostBox from "../components/PostBox";
import Post from "../components/Post";
import { HeaderProps } from "../types/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FullScreenLoader from "../components/FullScreenLoader";
import { LikesArrayType, PostTypeFB } from "../types/PostTypes";
import db from "../firebase.js";
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  doc,
  where,
  Query,
  documentId,
  getCountFromServer,
  startAfter,
} from "firebase/firestore";
import usePostSearch from "../utils/usePostSearch.js";

interface HomeProps extends HeaderProps {
  showAlerts: boolean;
  setShowAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Home = (props: HomeProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  // const [posts, setPosts] = useState<PostTypeFB[] | null>([]);
  const [countDocs, setCountDocs] = useState(0);
  const [queryRequest, setQueryRequest] =
    useState<Query<DocumentData, DocumentData>>();

  const { posts, lastKey, setPosts } = usePostSearch({
    q: queryRequest,
    pageNumber: pageNumber,
  });

  useEffect(() => {
    console.log("PageNumber: " + pageNumber);
    const getDocsCount = async () => {
      const countQuery = query(collection(db, "posts"));
      const snapShot = await getCountFromServer(countQuery);
      setCountDocs(snapShot.data().count);
    };

    getDocsCount();

    const postCollection = collection(db, "posts");
    console.log("Posts Length: ", posts?.length);
    console.log("Coutn Docs: " + countDocs);
    if (posts?.length === countDocs) {
      console.log("Got the required docs.");
      return;
    }

    if (pageNumber === 1) {
      // const limitData = Math.min(5, countDocs);
      setQueryRequest(query(postCollection, orderBy(documentId()), limit(5)));
    } else if (pageNumber > 1) {
      // setQueryRequest(undefined);
      if (!posts) return;
      const limitData = Math.min(5, Math.abs(posts.length - countDocs));
      setQueryRequest(
        query(
          postCollection, 
          orderBy(documentId()),
          startAfter(lastKey),
          limit(limitData),
        ),
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const lastBookElementRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });

    observer.current.observe(node);
  }, []);

  const [bookmarks, setBookmarks] = useState<null | LikesArrayType>(null);
  const [likes, setLikes] = useState<null | LikesArrayType>(null);

  useEffect(() => {
    try {
      const getBookmarks = async () => {
        const q = query(
          collection(db, "bookmarks"),
          where("userId", "==", doc(db, "users/9NzY4bJf6DaSRpKXO4AA")),
        );
        const bookmarksSnapshot = await getDocs(q);
        const posts: { [key: string]: boolean } = {};
        bookmarksSnapshot.forEach((doc) => {
          posts[doc.data().postId._key.path.segments[6]] = true;
        });
        setBookmarks({
          posts: posts,
        });
      };

      const getLikes = async () => {
        const q = query(
          collection(db, "likes"),
          where("userId", "==", doc(db, "users/9NzY4bJf6DaSRpKXO4AA")),
        );
        const likesSnapshot = await getDocs(q);
        const posts: { [key: string]: boolean } = {};
        likesSnapshot.forEach((doc) => {
          posts[doc.data().postId._key.path.segments[6]] = true;
        });
        setLikes({
          posts: posts,
        });
      };

      getBookmarks();
      getLikes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <main
          // ref={mainElementRef}
          className="relative max-w-[600px] border-r border-borderColor lg:w-full"
        >
          <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
            <HomeHeader tabIndex={props.tabIndex} />
          </div>
          <div>
            <PostBox
              showAlerts={props.showAlerts}
              setShowAlerts={props.setShowAlerts}
              alertMessage={props.alertMessage}
              setAlertMessage={props.setAlertMessage}
              posts={posts}
              setPosts={setPosts}
            />
          </div>

          {posts?.map((post: PostTypeFB, key: number) => {
            if (key + 1 === posts.length)
              return (
                <div key={key} ref={lastBookElementRef}>
                  <Link to={`/posts/${post.id}`}>
                    <Post
                      {...post}
                      bookmarks={bookmarks}
                      likes={likes}
                      key={key}
                    />
                  </Link>
                </div>
              );
            else
              return (
                <Link to={`/posts/${post.id}`}>
                  <Post
                    {...post}
                    bookmarks={bookmarks}
                    likes={likes}
                    key={key}
                  />
                </Link>
              );
          })}
        </main>
      )}
    </>
  );
};

export default Home;
