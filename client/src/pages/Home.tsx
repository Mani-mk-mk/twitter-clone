import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import posts from "../data/post";
import PostBox from "../components/PostBox";
import Post from "../components/Post";
// import UserProfile from "./UserProfile";

// interface GenericPropType {
//   mainElementRef: React.MutableRefObject<HTMLDivElement | null>;
// }

const Home = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <main
      // ref={mainElementRef}
      className="max-w-[600px] border-r border-borderColor lg:w-full"
    >
      <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
        <HomeHeader tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </div>
      <div>
        <PostBox />
      </div>
      {posts.map((post, key) => (
        <Post {...post} key={key} />
      ))}
      {/* <UserProfile /> */}
    </main>
  );
};

export default Home;
