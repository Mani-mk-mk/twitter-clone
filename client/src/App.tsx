import React, { useRef, useState } from "react";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./components/Register.tsx";
import Home from "./pages/Home.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import RighBar from "./components/RighBar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import PremiumModal from "./components/PremiumModal.tsx";
import Notifications from "./pages/Notifications.tsx";
import Bookmarks from "./pages/Bookmarks.tsx";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [darkMode, setDarkMode] = useState<boolean>(true);

  // setDarkMode(true);

  // const navElementRef = useRef<HTMLDivElement | null>(null);
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  // const [mainElementMargin, setMainElementMargin] = useState<number>(300);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const [navIndex, setNavIndex] = useState<number>(0);

  // useLayoutEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); // Empty dependency array to run the effect only once on mount

  // useLayoutEffect(() => {
  //   if (navElementRef.current) {
  //     const aboveElementWidth = navElementRef.current.offsetWidth;
  //     setMainElementMargin(aboveElementWidth);
  //   }
  // }, [windowWidth]);

  const location = useLocation();

  return (
    <React.StrictMode>
      {/* <Router> */}
      <div data-mode="dark" className="flex dark:bg-[black] lg:justify-center">
        <PremiumModal modalRef={modalRef} />
        {location.pathname !== "/" && (
          <div>
            <nav
              // ref={navElementRef}
              className="fixed border-r border-borderColor"
            >
              <Sidebar
                navIndex={navIndex}
                setNavIndex={setNavIndex}
                modalRef={modalRef}
              />
            </nav>
          </div>
        )}

        <Routes>
          {/* <React.Fragment> */}

          <Route
            path="/home"
            element={
              <div
                className="ml-[90px] lg:ml-[300px]"
                // style={{ marginLeft: `${mainElementMargin}px` }}
                data-mode="dark"
              >
                <Home tabIndex={navIndex} />
              </div>
            }
          />
          <Route
            path="/notifications"
            element={
              <div
                className="ml-[90px] lg:ml-[300px]"
                // style={{ marginLeft: `${mainElementMargin}px` }}
                data-mode="dark"
              >
                <Notifications tabIndex={navIndex} />
              </div>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <div
                className="ml-[90px] lg:ml-[300px]"
                // style={{ marginLeft: `${mainElementMargin}px` }}
                data-mode="dark"
              >
                <Bookmarks tabIndex={navIndex} />
              </div>
            }
          />
          <Route
            path="/:userName"
            element={
              <div
                className="ml-[90px] lg:ml-[300px]"
                // style={{ marginLeft: `${mainElementMargin}px` }}
                data-mode="dark"
              >
                <UserProfile />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div data-mode="dark">
                <Register />
              </div>
            }
          />
        </Routes>
        {location.pathname !== "/" && <RighBar modalRef={modalRef} />}
      </div>
      {/* </Router> */}
    </React.StrictMode>
  );
}

export default App;
