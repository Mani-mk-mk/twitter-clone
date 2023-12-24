import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import HomeHeader from "../components/HomeHeader";
import posts from "../data/post";
import Post from "../components/Post";
import PostBox from "../components/PostBox";
import PremiumModal from "../components/PremiumModal";
import SearchBar from "../components/SearchBar";
// import UserProfile from "./UserProfile";

const Home = () => {
  const navElementRef = useRef<HTMLDivElement | null>(null);
  const mainElementRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const modalRef = useRef<HTMLDialogElement | null>(null);

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
    <div data-mode="dark" className="flex dark:bg-[black] lg:justify-center">
      <PremiumModal modalRef={modalRef} />

      <div className="relative">
        <nav ref={navElementRef} className="fixed border-r border-borderColor">
          <Sidebar modalRef={modalRef} />
        </nav>
      </div>
      <main
        ref={mainElementRef}
        className="max-w-[600px] border-r border-borderColor lg:w-full"
      >
        <div className=" relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
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
      <div className="mx-4 hidden text-white lg:block lg:max-w-[350px]">
        <div className="flex h-[60px] w-full items-center">
          <div className="py-auto mb-2  w-full items-center ">
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 rounded-xl bg-accent-dark p-4">
          <h2 className="font-roboto text-xl font-extrabold">
            Subscribe to Premium
          </h2>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button
            className="rounded-full bg-btn-dark px-4 py-2 font-bold"
            onClick={() => modalRef.current?.showModal()}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
