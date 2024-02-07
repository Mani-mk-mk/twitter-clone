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
import MobileBottomNavigation from "./components/MobileBottomNavigation.tsx";
import PostView from "./pages/PostView.tsx";
import Alerts from "./components/Alerts.tsx";

function App() {
  const [showAlerts, setShowAlerts] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const [navIndex, setNavIndex] = useState<number>(0);

  const [scrollStyle, setScrollStyle] = useState("");

  let prevScrollPoint = window.scrollY;
  window.addEventListener(
    "scroll",
    function () {
      if (prevScrollPoint < window.scrollY) {
        // console.log("scrolling-up");
        setScrollStyle("opacity-100");
      } else {
        // console.log("scrolling-down");
        setScrollStyle("opacity-80");
      }
      prevScrollPoint = window.scrollY;
    },
    false,
  );

  const location = useLocation();

  return (
    // <React.StrictMode>
    <div>
      <div
        data-mode="dark"
        className="relative flex dark:bg-[black] md:justify-center"
      >
        <PremiumModal modalRef={modalRef} />
        {location.pathname !== "/" && (
          <div>
            <nav
              // ref={navElementRef}
              className="fixed hidden h-full border-r border-borderColor md:block"
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
          <Route
            path="/home"
            element={
              <div
                className="mb-[60px] ml-0 md:mb-0 md:ml-[90px] lg:ml-[300px]"
                // style={{ marginLeft: `${mainElementMargin}px` }}
                data-mode="dark"
              >
                <Home
                  showAlerts={showAlerts}
                  setShowAlerts={setShowAlerts}
                  alertMessage={alertMessage}
                  setAlertMessage={setAlertMessage}
                  tabIndex={navIndex}
                />
              </div>
            }
          />
          <Route
            path="/notifications"
            element={
              <div
                className="mb-[60px] ml-0 md:ml-[90px] lg:ml-[300px]"
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
                className="mb-[60px] ml-0 md:mb-0 md:ml-[90px] lg:ml-[300px]"
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
                className="mb-[60px] ml-0 md:mb-0 md:ml-[90px] lg:ml-[300px]"
                // style={{ marginLeft: `${mainElementMargin}px` }}
                data-mode="dark"
              >
                <UserProfile />
              </div>
            }
          />
          <Route
            path="/posts/:postId"
            element={
              <div className="mb-[60px] ml-0 md:mb-0 md:ml-[90px] lg:ml-[300px]">
                <PostView
                  showAlerts={showAlerts}
                  setShowAlerts={setShowAlerts}
                  alertMessage={alertMessage}
                  setAlertMessage={setAlertMessage}
                />
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
        {location.pathname !== "/" && (
          <div
            className={`fixed bottom-0 left-0 w-full opacity-70 md:hidden ${scrollStyle}`}
          >
            <MobileBottomNavigation />
          </div>
        )}
        {location.pathname !== "/" && <RighBar modalRef={modalRef} />}
        {showAlerts && <Alerts message={alertMessage} />}
      </div>
      )
    </div>
    //</React.StrictMode>
  );
}

export default App;
