import { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Tabs from "../components/Tabs";
import { HeaderProps } from "../types/types";

const Notifications = (props: HeaderProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const notificationComponents = [
    <h1>All notifications</h1>,
    <div className="text-white">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img
            src={
              "https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png"
            }
            alt="alt"
          />
        </div>
        <div className="max-w-[60%] text-start">
          <h1 className="py-2 font-roboto text-3xl font-bold">
            Nothing to see here —yet
          </h1>
          <div className="text-unhighlighted-color">
            Likes, mentions, reposts, and a whole lot more — when it comes from
            a verified account, you'll find it here.{" "}
            <a
              className="font-bold text-white underline"
              href="https://help.twitter.com/managing-your-account/about-twitter-verified-accounts"
              rel="noopener noreferrer nofollow"
              target="_blank"
              role="link"
            >
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    <div className="text-white">
      <div className="flex items-center justify-center">
        <div className="max-w-[60%] text-start">
          <h1 className="py-2 font-roboto text-3xl font-bold">
            Nothing to see here —yet
          </h1>
          <div className="text-unhighlighted-color">
            When someone mentions you, you'll find it here.
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <main className="h-screen w-full max-w-[600px] border-r border-borderColor lg:w-[600px]">
      <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
        <HomeHeader tabIndex={props.tabIndex} />
      </div>
      <div className="border-r border-borderColor">
        <Tabs
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          components={["All", "Verified", "Mentions"]}
        />
      </div>
      <div className="text-center font-bold text-white">
        {notificationComponents[tabIndex]}
      </div>
    </main>
  );
};

export default Notifications;
