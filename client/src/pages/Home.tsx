import HomeHeader from "../components/HomeHeader";
// import posts from "../data/post";
import PostBox from "../components/PostBox";
import Post from "../components/Post";
import { HeaderProps } from "../types/types";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { PostType } from "../types/PostTypes";
import { Link } from "react-router-dom";

const Home = (props: HeaderProps) => {
  const [posts, setPosts] = useState<PostType[] | null>(null);

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
          <Post {...post} key={key} />
        </Link>
      ))}
    </main>
  );
};

export default Home;
