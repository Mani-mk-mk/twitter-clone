import { Link } from "react-router-dom";
import MorePostIcon from "../assets/icons/MorePostIcon";
import ActionIcon from "./ActionIcon";
// import HoverInfo from "./HoverInfo";
import { UserFB } from "../types/PostTypes";

interface UserDetailsProps {
  profilePictureUri: string | undefined;
  profileName: string | undefined;
  userName: string | undefined;
  user: UserFB | null;
}

const UserDetailsTab = (props: UserDetailsProps) => {
  console.log(props.user);
  return (
    <div className="flex  items-center gap-4 p-4 text-white">
      <div className="group h-[50px] w-[50px] rounded-full">
        <Link to={`/${props.userName?.slice(1)}`}>
          <img
            src={props.profilePictureUri}
            className="w-full rounded-full"
            alt="profile-image"
          />
          <div className="relative z-10 hidden group-hover:block">
            {/* {props.user && <HoverInfo {...props.user} />} */}
          </div>
        </Link>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <div className="group">
            <Link to={`/${props.userName?.slice(1)}`}>
              <h1 className="text-md font-bold hover:underline">
                {props.profileName}
              </h1>
              <div className="relative z-10 hidden group-hover:block">
                {/* {props.user && <HoverInfo {...props.user} />} */}
              </div>
            </Link>
          </div>
          <div className="group">
            <Link to={`/${props.userName?.slice(1)}`}>
              <p className="text-unhighlighted-color">{props.userName}</p>
              <div className="relative z-10 hidden group-hover:block">
                {/* {props.user && <HoverInfo {...props.user} />} */}
              </div>
            </Link>
          </div>
        </div>
        <div>
          <ActionIcon
            sizeStyles="h-[20px] w-[20px]"
            additionalStyles="p-1"
            icon={<MorePostIcon color="text-unhighlighted-color" />}
            iconText="More"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsTab;
