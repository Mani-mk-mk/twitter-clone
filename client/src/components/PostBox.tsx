import { ChangeEvent, useEffect, useRef, useState } from "react";
import EmojiIcon from "../assets/icons/EmojiIcon";
import GIFIcon from "../assets/icons/GIFIcon";
import MediaIcon from "../assets/icons/MediaIcon";
import PollIcon from "../assets/icons/PollIcon";
import ActionIcon from "./ActionIcon";
import Polls from "./Polls";
import EmojiPicker, { EmojiStyle, Theme } from "emoji-picker-react";
// import axiosInstance from "../utils/axios";
import { PostTypeFB, StatsProps, UserFB } from "../types/PostTypes";
import { Link } from "react-router-dom";
import { Timestamp, addDoc, collection, doc, getDoc } from "firebase/firestore";
import db from "../firebase.js";

interface PostBoxProps {
  posts: PostTypeFB[] | null;
  setPosts: React.Dispatch<React.SetStateAction<PostTypeFB[] | null>>;
  showAlerts: boolean;
  setShowAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

const PostBox = (props: PostBoxProps) => {
  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file
    const selectedFile = event.target.files?.[0];
    console.log("Selected File:", selectedFile);
  };

  const fileIcon = useRef<null | HTMLInputElement>(null);

  const [showEmojiPicker, setShowEmojiPickers] = useState(false);
  const [showPolls, setShowPolls] = useState(false);
  const [profileData, setProfileData] = useState<UserFB | null>(null);

  const toggleEmojiPicker = () => {
    setShowEmojiPickers((showEmojiPicker) => !showEmojiPicker);
  };

  //Get the user details from the db
  useEffect(() => {
    const getUserDetail = async () => {
      const userRef = doc(db, "users", "9NzY4bJf6DaSRpKXO4AA");
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data: UserFB = {
          id: userSnap.id,
          userName: userSnap.data().userName,
          profileName: userSnap.data().profileName,
          bannerUri: userSnap.data().bannerUri,
          bio: userSnap.data().bio,
          profilePictureUri: userSnap.data().profilePictureUri,
        };
        setProfileData(data);
      }
    };

    getUserDetail();
  }, []);

  const handleActionIconClick = () => {
    if (fileIcon !== null) {
      fileIcon?.current?.click();
    }
  };

  const [tweet, setTweet] = useState("");

  const postTweet = async () => {
    console.log("Trying to post tweet...");
    const defaultStats: StatsProps = {
      likes: 0,
      comments: 0,
      views: 0,
      retweets: 0,
    };

    const data: PostTypeFB = {
      userId: doc(db, "users", "9NzY4bJf6DaSRpKXO4AA"),
      user: profileData!,
      tweet: tweet,
      stats: defaultStats,
      createdAt: Timestamp.now(),
    };

    try {
      const postRef = await addDoc(collection(db, "posts"), data);
      if (postRef.id) {
        props.setPosts([data, ...props.posts!]);
        setTweet("");
        props.setAlertMessage("Posted successfully.");
        props.setShowAlerts(true);
        setTimeout(() => {
          props.setShowAlerts(false);
        }, 3000); // Hide the alert after 5 seconds
      }
    } catch (error) {
      console.log(error);
      props.setAlertMessage("Something went wrong.");
      props.setShowAlerts(true);
      setTimeout(() => {
        props.setShowAlerts(false);
      }, 3000); // Hide the alert after 5 seconds
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTweet(e.target.value);
  };

  return (
    <div
      className="w-full border border-borderColor p-4 dark:bg-black"
      id="postbox-container"
    >
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[40px] rounded-full ">
          <Link to={`/${profileData?.userName.slice(1)}`}>
            <img
              className="h-full w-full rounded-full border border-white object-cover"
              src={profileData?.profilePictureUri}
              alt="user-profile-picture"
            />
          </Link>
        </div>
        <div className="w-full">
          <div className="py-auto w-full">
            {showPolls ? (
              <Polls setShowPolls={setShowPolls} />
            ) : (
              <input
                placeholder="What is happening?!"
                value={tweet}
                onChange={handleInputChange}
                className="placeholder:py-auto w-full bg-dark py-2 leading-5 text-white placeholder-unhighlighted-color outline-none md:text-xl"
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
                  <div className="absolute -left-full top-0 z-10">
                    <EmojiPicker
                      onEmojiClick={(e) =>
                        setTweet((prevTweet) => prevTweet + e.emoji)
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
                onClick={postTweet}
                className="w-full rounded-full bg-btn-dark px-4 py-1 text-lg text-white"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default PostBox;
