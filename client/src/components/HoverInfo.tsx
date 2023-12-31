import { Link } from "react-router-dom";
import { User } from "../types/PostTypes";

// interface HoverInfoProps {
//   profilePictureUri: string;
//   profileName: string;
//   userName: string;
//   bio?: string;
//   followers: number[];
//   following: number[];
// }

const HoverInfo = (props: User) => {
  return (
    <div className="absolute -left-1/2 top-1 z-30 rounded-xl bg-dark p-2">
      <div className=" w-[250px] max-w-[300px] text-white">
        <div className="flex justify-between">
          <div className="h-[80px] w-[80px] rounded-full">
            <img
              className="h-full w-full rounded-full"
              src={props.profilePictureUri}
              alt="profile-image"
            />
          </div>
          <div>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
              Follow
            </button>
          </div>
        </div>
        <div>
          <Link to={`/${props.userName.slice(1)}`}>
            <h1 className="font-bold">{props.profileName}</h1>
          </Link>
          <Link to={`/${props.userName.slice(1)}`}>
            <p className="text-unhighlighted-color">{props.userName}</p>
          </Link>
        </div>
        {props.bio && (
          <div>
            <p>{props.bio}</p>
          </div>
        )}
        <div className="flex items-center gap-4">
          <div>
            <span>{props.followers.length}</span> Followers
          </div>
          <div>
            <span>{props.following.length}</span> Following
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverInfo;
