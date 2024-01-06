import HomeHeader from "../components/HomeHeader";
// import posts from "../data/post";
import PostBox from "../components/PostBox";
import Post from "../components/Post";
import { HeaderProps } from "../types/types";
import { useCallback, useEffect, useRef, useState } from "react";
import axiosInstance from "../utils/axios";
// import { PostType } from "../types/PostTypes";
import { Link } from "react-router-dom";
import usePostSearch from "../utils/usePostSearch";
import FullScreenLoader from "../components/FullScreenLoader";

interface BookmarkType {
  id: number;
  userId: number;
  postId: number;
  bookmarkedBy: number;
}

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

  const { posts, setPosts } = usePostSearch({
    pageNumber,
    isLoading,
    setIsLoading,
  });

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

  const [bookmarks, setBookmarks] = useState<null | number[]>(null);
  const [likes, setLikes] = useState<null | number[]>(null);

  const defaultUserId = 0;

  useEffect(() => {
    try {
      const getBookmarks = async () => {
        const response = await axiosInstance.get(
          "/bookmarks?bookmarkedBy=" + defaultUserId,
        );
        if (response.status === 200) {
          setBookmarks(response.data.map((data: BookmarkType) => data.postId));
        }
      };
      getBookmarks();

      const getLikes = async () => {
        const response = await axiosInstance.get(
          "/likes/?likedBy=" + defaultUserId,
        );
        if (response.status === 200) {
          setLikes(response.data.map((data: BookmarkType) => data.postId));
        }
      };
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
          {posts?.map((post, key) => {
            if (key + 1 === posts.length)
              return (
                <div ref={lastBookElementRef}>
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
