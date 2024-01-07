import EmojiPicker, { Theme, EmojiStyle } from "emoji-picker-react";
import EmojiIcon from "../assets/icons/EmojiIcon";
import GIFIcon from "../assets/icons/GIFIcon";
import MediaIcon from "../assets/icons/MediaIcon";
import ActionIcon from "./ActionIcon";
import { ChangeEvent, useRef, useState } from "react";

interface PostActionItemPropType {
  reply: string;
  setReply: React.Dispatch<React.SetStateAction<string>>;
  clickHandler: () => Promise<void>;
}

const PostActionItem = (props: PostActionItemPropType) => {
  const fileIcon = useRef<null | HTMLInputElement>(null);

  const [showEmojiPicker, setShowEmojiPickers] = useState(false);

  // const [reply, setReply] = useState("");

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file
    const selectedFile = event.target.files?.[0];
    console.log("Selected File:", selectedFile);
  };

  const handleActionIconClick = () => {
    if (fileIcon !== null) {
      fileIcon?.current?.click();
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPickers((showEmojiPicker) => !showEmojiPicker);
  };

  return (
    <div>
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
            onClick={toggleEmojiPicker}
            className="relative rounded-full p-2 hover:bg-commentHoverBg"
          >
            <ActionIcon
              iconText="Emoji"
              sizeStyles="w-[20px] h-[20px]"
              icon={<EmojiIcon color="text-commentHoverText" />}
            />
            {showEmojiPicker && (
              <div className="absolute -left-full top-0 z-10">
                <EmojiPicker
                  onEmojiClick={(e) =>
                    props.setReply((prevReply) => prevReply + e.emoji)
                  }
                  theme={Theme.DARK}
                  emojiStyle={EmojiStyle.TWITTER}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex w-[100px] items-center justify-center">
          <button
            onClick={props.clickHandler}
            className="hover:bg-btn-dark-hover w-full rounded-full bg-btn-dark px-4 py-1 text-lg text-white"
          >
            Reply{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostActionItem;
