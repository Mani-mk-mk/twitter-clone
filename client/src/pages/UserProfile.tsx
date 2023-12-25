// import HomeHeader from "../components/HomeHeader";
import { useState } from "react";
import Banner from "../assets/background-banner-plan.png";
import MessageIcon from "../assets/icons/MessageIcon";
import MorePostIcon from "../assets/icons/MorePostIcon";
import SubscribeIcon from "../assets/icons/SubscribeIcon";
import ActionIcon from "../components/ActionIcon";
import Tabs from "../components/Tabs";
import LocationIcon from "../assets/icons/LocationIcon";
import AttachmentIcon from "../assets/icons/AttachmentIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
// interface GenericPropType {
//   mainElementRef: React.MutableRefObject<HTMLDivElement | null>;
// }

const UserProfile = () => {
  const [profileTabIndex, setProfileTabIndex] = useState(0);

  return (
    <main
      // ref={mainElementRef}
      className="max-w-[600px] border-r border-borderColor lg:w-full"
    >
      <div></div>
      <div className="w-full">
        <img src={Banner} alt="BannerImage" />
      </div>

      <div className="flex h-[75px] items-start justify-between p-4">
        <div className="relative h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full ">
          <img
            className="absolute left-1/2 rounded-full border-4 border-black"
            src="https://pbs.twimg.com/profile_images/1570500099373170688/VVVytBl2_400x400.jpg"
            alt="profile-image"
          />
        </div>
        <div className="flex w-full items-center justify-end gap-4 ">
          <div className="text-white">
            <ActionIcon
              icon={<MorePostIcon />}
              iconText="More"
              additionalStyles="p-2 border-white border rounded-full"
              sizeStyles="w-[15px] h-[15px] md:w-[25px] md:h-[25px]"
            />
          </div>
          <div className="text-white">
            <ActionIcon
              icon={<MessageIcon />}
              iconText="Messages"
              additionalStyles="p-2 border-white border rounded-full"
              sizeStyles="w-[15px] h-[15px] md:w-[25px] md:h-[25px]"
            />
          </div>
          <div>
            <ActionIcon
              icon={<SubscribeIcon color="text-subscribeBtnColor" />}
              iconText="Subscribe"
              additionalStyles="p-2 border border-subscribeBtnColor rounded-full"
              sizeStyles="w-[15px] h-[15px] md:w-[25px] md:h-[25px]"
            />
          </div>
          <div>
            <button className="rounded-full px-2 py-2 font-roboto font-bold dark:bg-white dark:text-black md:px-4">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 text-white">
        <h1 className="font-roboto text-2xl font-bold">Johns.</h1>
        <h4 className="text-unhighlighted-color">@CricCrazyJohns</h4>
        <div className="py-2">
          <p>
            IPL, Mohanlal, Vijay, Cringe guy, Average in English, When people
            hate me, I find happiness through the hate. For Collaborations - DM
          </p>
        </div>
        <div className="flex flex-col items-start justify-between py-2 text-unhighlighted-color md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <div className="h-[20px] w-[20px]">
              <LocationIcon color="text-unhighlighted-color" />
            </div>
            <p>Kerala, India</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[20px] w-[20px]">
              <AttachmentIcon color="text-unhighlighted-color" />
            </div>
            <a className="text-commentHoverText" href="">
              instagram.com/johns_benny_ccj
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[20px] w-[20px]">
              <CalendarIcon color="text-unhighlighted-color" />
            </div>
            <p>Joined June, 2016</p>
          </div>
        </div>
        {/* Follower Details */}
        <div className="flex items-start gap-4 py-2 text-lg">
          <div className="font-roboto font-bold">
            569{" "}
            <span className="font-normal tracking-wide text-unhighlighted-color">
              Following
            </span>
          </div>
          <div className="font-roboto font-bold">
            479.9K{" "}
            <span className="font-normal tracking-wide text-unhighlighted-color">
              Followers
            </span>
          </div>
        </div>
        <div className="py-2 text-unhighlighted-color">
          <p className="text-sm">Not followed by anyone you're following</p>
        </div>
      </div>
      <div>
        <Tabs
          tabIndex={profileTabIndex}
          setTabIndex={setProfileTabIndex}
          components={["Posts", "Replies", "Subs", "Highlights", "Media"]}
        />
      </div>
      {/* </div> */}
    </main>
  );
};

export default UserProfile;
