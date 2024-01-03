import { Link } from "react-router-dom";
import { User } from "../types/PostTypes";

const HoverInfo = (props: User | null) => {
  return (
    props && (
      <div className="group absolute -left-1/2 top-1 z-30">
        <div
          id="glowing"
          className="absolute -inset-0.5 z-0 rounded-lg bg-gradient-to-r from-white to-white opacity-5 blur transition duration-1000 group-hover:opacity-25 group-hover:duration-200"
        ></div>

        <div className="relative z-20 rounded-xl bg-dark p-2">
          <div className=" w-[250px] max-w-[300px] text-white md:w-[300px]">
            <div className="flex justify-between">
              <div className="h-[80px] w-[80px] rounded-full">
                <img
                  className="h-full w-full rounded-full"
                  src={props?.profilePictureUri}
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
              <Link to={`/${props?.userName.slice(1)}`}>
                <h1 className="pt-1 font-bold">{props?.profileName}</h1>
              </Link>
              <Link to={`/${props?.userName.slice(1)}`}>
                <p className="pb-1 text-unhighlighted-color">
                  {props?.userName}
                </p>
              </Link>
            </div>
            {props?.bio && (
              <div>
                <p>{props?.bio}</p>
              </div>
            )}
            <div className="flex items-center gap-4 py-2">
              <div>
                <span>{props?.followers.length}</span> Followers
              </div>
              <div>
                <span>{props?.following.length}</span> Following
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HoverInfo;
