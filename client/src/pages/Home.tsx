import HomeHeader from "../components/HomeHeader";
// import posts from "../data/post";
import PostBox from "../components/PostBox";
import Post from "../components/Post";
import { HeaderProps } from "../types/types";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { PostType } from "../types/PostTypes";
import { Link } from "react-router-dom";

interface BookmarkType {
  id: number;
  userId: number;
  postId: number;
}

const Home = (props: HeaderProps) => {
  const [posts, setPosts] = useState<PostType[] | null>(null);
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
          "/likes/?userId=" + defaultUserId,
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

  useEffect(() => {}, [bookmarks, props]);

  useEffect(() => {
    const getPosts = async () => {
      console.log("Fetching posts...");
      const response = await axiosInstance.get("posts?_expand=user");
      console.log(response);
      if (response.status === 200) {
        setPosts(response.data);
      }
    };
    getPosts();
  }, []);

  return (
    <main
      // ref={mainElementRef}
      className="relative max-w-[600px] border-r border-borderColor lg:w-full"
    >
      <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
        <HomeHeader tabIndex={props.tabIndex} />
      </div>
      <div>
        <PostBox />
      </div>
      {posts?.map((post, key) => (
        <Link to={`/posts/${post.id}`}>
          <Post {...post} bookmarks={bookmarks} likes={likes} key={key} />
        </Link>
      ))}
    </main>
  );
};

export default Home;
