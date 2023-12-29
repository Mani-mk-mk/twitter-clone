import HomeHeader from "../components/HomeHeader";
// import posts from "../data/post";
import PostBox from "../components/PostBox";
import Post from "../components/Post";
import { HeaderProps } from "../types/types";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { PostType } from "../types/PostTypes";

const Home = (props: HeaderProps) => {
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axiosInstance.get("posts?_expand=user");
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
      {posts?.map((post, key) => <Post {...post} key={key} />)}

      {/*TODO: HoverInfo Tab needs work */}
      {/* <div className="max-w-[250px] border border-white text-white">
        <div className="flex justify-between">
          <div>
            <img src="" alt="profile-image" />
          </div>
          <div>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
              Follow
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Mayur</h4>
          <p className="text-unhighlighted-color">@133_At_Hobart</p>
        </div>
        <div>
          <p>Die Heart Viratian-Abdian ❤🌝✌ Maratha🚩 parody</p>
        </div>
        <div className="flex items-center gap-4">
          <div>Followers</div>
          <div>Following</div>
        </div>
      </div> */}
      {/* <UserProfile /> */}
    </main>
  );
};

export default Home;
