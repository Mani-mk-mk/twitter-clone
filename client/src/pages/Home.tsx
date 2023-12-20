import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import HomeHeader from "../components/HomeHeader";
import posts from "../data/post";
import Post from "../components/Post";
import PostBox from "../components/PostBox";

const Home = () => {
  const navElementRef = useRef<HTMLDivElement | null>(null);
  const mainElementRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (navElementRef.current && mainElementRef.current) {
      const aboveElementWidth = navElementRef.current.offsetWidth;
      mainElementRef.current.style.marginLeft = `${aboveElementWidth}px`;
    }
  }, [windowWidth]);

  return (
    <div data-mode="dark" className="flex dark:bg-[black]">
      <div className="relative">
        <nav ref={navElementRef} className="border-borderColor fixed border-r">
          <Sidebar />
        </nav>
      </div>
      <main
        ref={mainElementRef}
        className="border-borderColor max-w-[600px] border-r lg:w-full"
      >
        <div className=" border-borderColor relative h-[60px] border border-r-0 border-t-0 border-solid">
          <HomeHeader tabIndex={tabIndex} setTabIndex={setTabIndex} />
        </div>
        <div>
          <PostBox />
        </div>
        {posts.map((post, key) => (
          <Post {...post} key={key} />
        ))}
      </main>
    </div>
  );
};

export default Home;
