import BookmarksIcon from "../assets/icons/BookmarksIcon";
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
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
interface SidebarPropTypes {
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
  navIndex: number;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar = (props: SidebarPropTypes) => {
  const showModal = () => {
    props.modalRef?.current?.showModal();
  };

  const navigate = useNavigate();

  const sidebarElements = [
    {
      text: "Home",
      hoverText: "Home",
      icon: <HomeIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    {
      text: "Explore",
      hoverText: "Explore",
      icon: <ExploreIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    {
      text: "Notifications",
      hoverText: "Notifications",
      icon: <NotificationIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    {
      text: "Messages",
      hoverText: "Messages",
      icon: <MessageIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    {
      text: "Grok",
      hoverText: "Grok",
      icon: <GrokIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    {
      text: "Lists",
      hoverText: "Lists",
      icon: <ListIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    {
      text: "Bookmarks",
      hoverText: "Bookmarks",
      icon: <BookmarksIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    {
      text: "Communities",
      hoverText: "Communities",
      icon: <CommunitiesIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    {
      text: "Premium",
      hoverText: "Premium",
      icon: <Logo color="text-white" />,
      handleClicK: (key: number) => {
        props.setNavIndex(key);
        showModal();
      },
    },
    {
      text: "Profile",
      hoverText: "Profile",
      icon: <ProfileIcon color="text-white" />,
      handleClicK: (key: number, text: string) => {
        props.setNavIndex(key);
        navigate(`/${text.toLocaleLowerCase()}`);
      },
    },
    { text: "More", hoverText: "More", icon: <MoreIcon color="text-white" /> },
  ];

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
          {sidebarElements.map((element, key) => (
            <SidebarItem
              index={key}
              key={key}
              text={element.text}
              hoverText={element.hoverText}
              icon={element.icon}
              onClick={element.handleClicK}
            />
          ))}
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
