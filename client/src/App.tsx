import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.tsx";
import Home from "./pages/Home.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import RighBar from "./components/RighBar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import PremiumModal from "./components/PremiumModal.tsx";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [darkMode, setDarkMode] = useState<boolean>(true);

  // setDarkMode(true);

  const navElementRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [mainElementMargin, setMainElementMargin] = useState<number>(0);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    if (navElementRef.current) {
      const aboveElementWidth = navElementRef.current.offsetWidth;
      setMainElementMargin(aboveElementWidth);
    }
  }, [windowWidth]);

  return (
    <React.StrictMode>
      <Router>
        <div
          data-mode="dark"
          className="flex dark:bg-[black] lg:justify-center"
        >
          <PremiumModal modalRef={modalRef} />

          <div>
            <nav
              ref={navElementRef}
              className="fixed border-r border-borderColor"
            >
              <Sidebar modalRef={modalRef} />
            </nav>
          </div>

          <Routes>
            {/* <React.Fragment> */}

            <Route
              path="/home"
              element={
                <div
                  style={{ marginLeft: `${mainElementMargin}px` }}
                  data-mode="dark"
                >
                  <Home />
                </div>
              }
            />
            <Route
              path="/user-profile"
              element={
                <div
                  style={{ marginLeft: `${mainElementMargin}px` }}
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
          <RighBar modalRef={modalRef} />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
