import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const navElementRef = useRef<HTMLDivElement | null>(null);
  const mainElementRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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
        <nav ref={navElementRef} className="fixed">
          <Sidebar />
        </nav>
      </div>
      <main ref={mainElementRef} className="w-full border-l-2">
        <div className="h-[500px] w-full bg-btn-dark"></div>
        <div className="h-[500px] w-full bg-btn-dark"></div>
        <div className="h-[500px] w-full bg-btn-dark"></div>
      </main>
    </div>
  );
};

export default Home;
