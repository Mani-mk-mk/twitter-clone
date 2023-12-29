import { Link } from "react-router-dom";
import CommunitiesIcon from "../assets/icons/CommunitiesIcon";
import ExploreIcon from "../assets/icons/ExploreIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import MessageIcon from "../assets/icons/MessageIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";

const MobileBottomNavigation = () => {
  return (
    <div className="flex w-full items-center justify-between bg-black p-4">
      <div className="h-[25px] w-[25px] text-white">
        <Link to={"/home"}>
          <HomeIcon />
        </Link>
      </div>
      <div className="h-[25px] w-[25px] text-white">
        <Link to={"/explore"}>
          <ExploreIcon />
        </Link>
      </div>
      <div className="h-[25px] w-[25px] text-white">
        <Link to={"/communities"}>
          <CommunitiesIcon />
        </Link>
      </div>
      <div className="h-[25px] w-[25px] text-white">
        <Link to={"/notifications"}>
          <NotificationIcon />
        </Link>
      </div>
      <div className="h-[25px] w-[25px] text-white">
        <Link to={"/messages"}>
          <MessageIcon />
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomNavigation;
