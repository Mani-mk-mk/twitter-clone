import { ChangeEvent, useRef } from "react";
import EmojiIcon from "../assets/icons/EmojiIcon";
import GIFIcon from "../assets/icons/GIFIcon";
import MediaIcon from "../assets/icons/MediaIcon";
import PollIcon from "../assets/icons/PollIcon";
import ActionIcon from "./ActionIcon";
import Polls from "./Polls";

const PostBox = () => {
  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file
    const selectedFile = event.target.files?.[0];
    console.log("Selected File:", selectedFile);
  };

  const fileIcon = useRef<null | HTMLInputElement>(null);

  const handleActionIconClick = () => {
    if (fileIcon !== null) {
      fileIcon?.current?.click();
    }
  };

  return (
    <div className="dark:bg-black w-full p-4" id="postbox-container">
      <div className="flex items-center gap-4">
        <div className="text-white">Profile</div>
        <div className="w-full">
          <div className="py-auto w-full">
            {/* <textarea
              placeholder="What is happening?!"
              className="placeholder-unhighlighted-color placeholder:py-auto h-full w-full resize-none bg-dark px-4 py-2 text-xl leading-5 text-white outline-none"
            ></textarea> */}
            <Polls />
          </div>
          <div className="flex items-center justify-between gap-2" id="iconBox">
            <div className="flex w-full items-center justify-start gap-2">
              <div
                className="hover:bg-commentHoverBg rounded-full p-2"
                onClick={handleActionIconClick}
              >
                <ActionIcon
                  iconText="Media"
                  sizeStyles="w-[20px] h-[20px]"
                  icon={<MediaIcon color="#2887d0" />}
                />
                <div className="hidden">
                  <input
                    ref={fileIcon}
                    type="file"
                    name="Media"
                    id="media"
                    onChange={handleFileInputChange}
                    onClick={(e) => e.stopPropagation()} // Prevents the click event from propagating to the parent div
                  />
                </div>
              </div>
              <div className="hover:bg-commentHoverBg rounded-full p-2">
                <ActionIcon
                  iconText="GIF"
                  sizeStyles="w-[20px] h-[20px]"
                  icon={<GIFIcon color="#2887d0" />}
                />
              </div>
              <div className="hover:bg-commentHoverBg rounded-full p-2">
                <ActionIcon
                  iconText="Poll"
                  sizeStyles="w-[20px] h-[20px]"
                  icon={<PollIcon color="#2887d0" />}
                />
              </div>
              <div className="hover:bg-commentHoverBg rounded-full p-2">
                <ActionIcon
                  iconText="Emoji"
                  sizeStyles="w-[20px] h-[20px]"
                  icon={<EmojiIcon color="#2887d0" />}
                />
              </div>
            </div>
            <div className="flex w-[100px] items-center justify-center">
              <button className="w-full rounded-full bg-btn-dark px-4 py-1 text-lg text-white">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
