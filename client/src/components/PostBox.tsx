import { ChangeEvent, useRef, useState } from "react";
import EmojiIcon from "../assets/icons/EmojiIcon";
import GIFIcon from "../assets/icons/GIFIcon";
import MediaIcon from "../assets/icons/MediaIcon";
import PollIcon from "../assets/icons/PollIcon";
import ActionIcon from "./ActionIcon";
import Polls from "./Polls";
import EmojiPicker, { EmojiStyle, Theme } from "emoji-picker-react";

const PostBox = () => {
  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file
    const selectedFile = event.target.files?.[0];
    console.log("Selected File:", selectedFile);
  };

  const fileIcon = useRef<null | HTMLInputElement>(null);

  const [showEmojiPicker, setShowEmojiPickers] = useState(false);
  const [showPolls, setShowPolls] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPickers((showEmojiPicker) => !showEmojiPicker);
  };

  const handleActionIconClick = () => {
    if (fileIcon !== null) {
      fileIcon?.current?.click();
    }
  };

  return (
    <div className="w-full p-4 dark:bg-black" id="postbox-container">
      <div className="flex items-center gap-4">
        <div className="text-white">Profile</div>
        <div className="w-full">
          <div className="py-auto w-full">
            {showPolls ? (
              <Polls setShowPolls={setShowPolls} />
            ) : (
              <input
                placeholder="What is happening?!"
                className="placeholder:py-auto w-full bg-dark py-2 text-xl leading-5 text-white placeholder-unhighlighted-color outline-none"
              />
            )}
          </div>
          <div className="flex items-center justify-between gap-2" id="iconBox">
            <div className="flex w-full items-center justify-start gap-2">
              <div
                className="rounded-full p-2 hover:bg-commentHoverBg"
                onClick={handleActionIconClick}
              >
                <ActionIcon
                  iconText="Media"
                  sizeStyles="w-[20px] h-[20px]"
                  icon={<MediaIcon color="text-commentHoverText" />}
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
              <div className="rounded-full p-2 hover:bg-commentHoverBg">
                <ActionIcon
                  iconText="GIF"
                  sizeStyles="w-[20px] h-[20px]"
                  icon={<GIFIcon color="text-commentHoverText" />}
                />
              </div>
              <div
                onClick={() => setShowPolls(true)}
                className="rounded-full p-2 hover:bg-commentHoverBg"
              >
                <ActionIcon
                  iconText="Poll"
                  sizeStyles="w-[20px] h-[20px]"
                  icon={<PollIcon color="text-commentHoverText" />}
                />
              </div>
              <div
                onClick={toggleEmojiPicker}
                className="relative rounded-full p-2 hover:bg-commentHoverBg"
              >
                <ActionIcon
                  iconText="Emoji"
                  sizeStyles="w-[20px] h-[20px]"
                  icon={<EmojiIcon color="text-commentHoverText" />}
                />
                {showEmojiPicker && (
                  <div className="absolute z-10">
                    <EmojiPicker
                      theme={Theme.DARK}
                      emojiStyle={EmojiStyle.TWITTER}
                    />
                  </div>
                )}
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
