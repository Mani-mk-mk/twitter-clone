import CommunitiesIcon from "../assets/icons/CommunitiesIcon";
import ExploreIcon from "../assets/icons/ExploreIcon";
import GrokIcon from "../assets/icons/GrokIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import ListIcon from "../assets/icons/ListIcon";
import Logo from "../assets/icons/Logo";
import MessageIcon from "../assets/icons/MessageIcon";
import MoreIcon from "../assets/icons/MoreIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";

const Sidebar = () => {
  return (
    <div data-mode="dark" className="dark:bg-[black]">
      <div className="flex flex-col">
        <div className="flex h-[50px] w-[50px] items-center justify-center">
          <div className="w-1/2">
            <a href="/">
              <Logo color="white" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <HomeIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Home
              </div>
            </div>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <ExploreIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Explore
              </div>
            </div>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <NotificationIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Notifications
              </div>
            </div>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <MessageIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Messages
              </div>
            </div>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <GrokIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Groks
              </div>
            </div>
          </div>

          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <ListIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Lists
              </div>
            </div>
          </div>

          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <CommunitiesIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Communities
              </div>
            </div>
          </div>

          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <Logo color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Premium
              </div>
            </div>
          </div>

          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <ProfileIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                Profile
              </div>
            </div>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center hover:rounded-full hover:bg-accent-dark">
            <div className="group relative w-1/2">
              <MoreIcon color="white" />
              <div className="bg-hover-bg-highlight absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 transform rounded p-1 text-xs text-white group-hover:block">
                More
              </div>
            </div>
          </div>
        </div>
        <div>Compose Tweet</div>
      </div>
      <div>Profile</div>
    </div>
  );
};

export default Sidebar;
