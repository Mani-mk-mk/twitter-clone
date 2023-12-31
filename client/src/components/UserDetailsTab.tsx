import { Link } from "react-router-dom";
import MorePostIcon from "../assets/icons/MorePostIcon";
import ActionIcon from "./ActionIcon";

interface UserDetailsProps {
  profileImageUri: string;
  profileName: string;
  userName: string;
}

const UserDetailsTab = (props: UserDetailsProps) => {
  return (
    <div>
      <div className="h-[40px] w-[40px] rounded-full">
        <Link to={`/${props.userName.slice(1)}`}>
          <img
            src={props.profileImageUri}
            className="h-full w-full rounded-full"
            alt="profile-image"
          />
        </Link>
      </div>
      <div>
        <div>
          <Link to={`/${props.userName.slice(1)}`}>
            <h1>{props.profileName}</h1>
          </Link>
          <Link to={`/${props.userName.slice(1)}`}>
            <p>{props.userName}</p>
          </Link>
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
