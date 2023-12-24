import CommunitiesIcon from "../assets/icons/CommunitiesIcon";
import ExploreIcon from "../assets/icons/ExploreIcon";
import GrokIcon from "../assets/icons/GrokIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import ListIcon from "../assets/icons/ListIcon";
import Logo from "../assets/icons/Logo";
import MessageIcon from "../assets/icons/MessageIcon";
import MoreIcon from "../assets/icons/MoreIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
import PostIcon from "../assets/icons/PostIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";

interface SidebarPropTypes {
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
}

const Sidebar = (props: SidebarPropTypes) => {
  const showModal = () => {
    props.modalRef?.current?.showModal();
  };

  return (
    <div className="h-flex w-full flex-col items-center gap-2 px-2 lg:w-[300px] lg:items-start lg:px-0">
      <div className="flex flex-col items-center gap-2 lg:items-start lg:px-[25px]">
        <div className="flex h-[60px] w-[60px] items-center justify-center lg:ms-3 lg:justify-start">
          <div className="w-1/2">
            <a href="/">
              <Logo color="text-white" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <HomeIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Home
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">Home</div>
          </div>
          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <ExploreIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Explore
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">
              Explore
            </div>
          </div>

          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <NotificationIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Notifications
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">
              Notifications
            </div>
          </div>

          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <MessageIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Messages
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">
              Messages
            </div>
          </div>

          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <GrokIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Grok
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">Grok</div>
          </div>

          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <ListIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Lists
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">Lists</div>
          </div>

          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <CommunitiesIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Communities
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">
              Communities
            </div>
          </div>

          <div
            onClick={showModal}
            className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start"
          >
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <Logo color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Premium
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">
              Premium
            </div>
          </div>

          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <ProfileIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                Profile
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">
              Profile
            </div>
          </div>

          <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
            <div className="flex items-center justify-center ">
              <div className="h-[30px] w-[30px]">
                <MoreIcon color="text-white" />
              </div>
              <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
                More
              </div>
            </div>
            <div className="hidden text-[20px] text-white lg:block">More</div>
          </div>
        </div>
        {/* <div className="h-[50px] w-[50px] lg:ms-3"> */}
        <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
          <div className="flex items-center justify-center lg:hidden ">
            <button className="h-[50px] w-[50px] rounded-full bg-btn-dark p-3">
              <PostIcon color="text-white" />
            </button>
            <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
              Post
            </div>
          </div>
        </div>
        <button className="hidden w-full rounded-full bg-btn-dark p-2 text-lg text-white lg:flex lg:items-center lg:justify-center">
          Post
        </button>
      </div>
      <div>Profile</div>
    </div>
  );
};

export default Sidebar;
