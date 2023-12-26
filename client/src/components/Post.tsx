import { useEffect, useState } from "react";
import { ObjectType, PostType } from "../types/PostTypes";
import ActionIcon from "./ActionIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import BookmarkIcon from "../assets/icons/BookmarksIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import RetweetIcon from "../assets/icons/RetweetIcon";
import ViewsIcon from "../assets/icons/ViewsIcon";
import LikeIcon from "../assets/icons/LikeIcon";
import MorePostIcon from "../assets/icons/MorePostIcon";
import { Link } from "react-router-dom";

const Post = (props: PostType) => {
  console.log(props);
  const [styles, setStyles] = useState<ObjectType[] | null>(null);

  useEffect(() => {
    const imageStyles: ObjectType[][] = [
      [{ div: "rounded-lg", image: "rounded-lg w-full" }],
      [
        {
          div: "rounded-l-lg",
          image:
            "border-r min-h-[250px] h-full object-cover border-borderColor rounded-l-lg",
        },
        {
          div: "rounded-r-lg",
          image:
            "border-l min-h-[250px] h-full object-cover border-borderColor rounded-r-lg",
        },
      ],
      [
        {
          div: "rounded-tl-lg",
          image: "border-r border-b border-borderColor rounded-tl-lg",
        },
        {
          div: "rounded-tr-lg",
          image: "border-l border-b border-borderColor rounded-tr-lg",
        },
        {
          div: "rounded-bl-lg",
          image: "border-t border-r border-borderColor rounded-bl-lg",
        },
      ],
      [
        {
          div: "rounded-tl-lg",
          image: "border-r border-b border-borderColor rounded-tl-lg",
        },
        {
          div: "rounded-tr-lg",
          image: "border-l border-b border-borderColor rounded-tr-lg",
        },
        {
          div: "rounded-bl-lg",
          image: "border-t border-r border-borderColor rounded-bl-lg",
        },
        {
          div: "rounded-br-lg",
          image: "border-t border-l border-borderColor rounded-br-lg",
        },
      ],
    ];

    const styleIndex = props.images ? props.images.length - 1 : 0;
    setStyles(imageStyles[styleIndex]);
  }, [props]);

  return (
    <div className="cursor-pointer border-y border-borderColor p-4 text-white hover:bg-hover-dark">
      <div className="flex w-full items-start gap-4">
        <div className="h-[40px] w-[40px] rounded-full ">
          <Link to={`/${props.user.userName.slice(1)}`}>
            <img
              className="rounded-full"
              src={props.user.profilePictureUri}
              alt="user-profile-picture"
            />
          </Link>
        </div>
        <div className="w-full" id="container">
          <div
            className="flex w-full items-center justify-between"
            id="user-data-container"
          >
            <div className="flex items-center gap-2 pb-1">
              <Link to={`/${props.user.userName.slice(1)}`}>
                <h4 className="font-bold text-white hover:underline">
                  {props.user.profileName}
                </h4>
              </Link>
              <Link to={`/${props.user.userName.slice(1)}`}>
                <p className="text-unhighlighted-color">
                  {props.user.userName}
                </p>
              </Link>
            </div>
            <div>
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                additionalStyles="p-1"
                icon={<MorePostIcon color="#6a6f74" />}
                iconText="More"
              />
            </div>
          </div>
          <div id="post-text">
            <p className="pb-4 pr-8 font-roboto">{props.tweet}</p>
          </div>
          <div
            // change style according to image count
            className={`grid ${
              props.images &&
              props.images?.length % 2 === 0 &&
              "h-full grid-cols-2"
            }`}
          >
            {props.images &&
              props.images.map((image, key) => (
                <div key={key} className={styles?.[key]?.div}>
                  <img
                    src={image}
                    className={styles?.[key]?.image}
                    alt="Post-image"
                  />
                </div>
              ))}
          </div>

          <div
            className="flex items-center justify-between pt-2"
            id="post-stats"
          >
            <div className="group flex items-center">
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                icon={<CommentIcon color="#2887d0" />}
                iconText="Comments"
                additionalStyles="hover:bg-commentHoverBg group-hover:text-commentHoverText hover:text-commentHoverText text-unhighlighted-color p-2"
              />
              <p className="text-sm text-unhighlighted-color group-hover:text-commentHoverText">
                {props.stats.comments}
              </p>
            </div>
            <div className="group flex items-center">
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                icon={<RetweetIcon color="#00ba7c" />}
                iconText="Retweet"
                additionalStyles="text-unhighlighted-color group-hover:text-retweetHoverText hover:text-retweetHoverText hover:bg-retweetHoverBg p-2"
              />
              <p className="text-sm text-unhighlighted-color group-hover:text-retweetHoverText">
                {props.stats.retweets}
              </p>
            </div>

            <div className="group flex items-center">
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                icon={<LikeIcon color="#de1672" />}
                iconText="Likes"
                additionalStyles="text-unhighlighted-color hover:text-likeHoverText group-hover:text-likeHoverText hover:bg-likeHoverBg p-2"
              />
              <p className="text-sm text-unhighlighted-color group-hover:text-likeHoverText">
                {props.stats.likeCount}
              </p>
            </div>

            <div className="group flex items-center">
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                icon={<ViewsIcon color="#2887d0" />}
                iconText="Views"
                additionalStyles="text-unhighlighted-color group-hover:text-commentHoverText hover:text-commentHoverText hover:bg-commentHoverBg p-2"
              />
              <p className="text-sm text-unhighlighted-color group-hover:text-commentHoverText">
                {props.stats.views}
              </p>
            </div>

            <div
              className="flex items-center justify-center"
              id="lonely-buttons"
            >
              <div className="group flex items-center">
                <ActionIcon
                  sizeStyles="h-[20px] w-[20px]"
                  icon={<BookmarkIcon color="#2887d0" />}
                  iconText="Bookmarks"
                  additionalStyles="text-unhighlighted-color hover:text-commentHoverText hover:bg-commentHoverBg p-2"
                />
              </div>

              <div className="group flex items-center">
                <ActionIcon
                  sizeStyles="h-[20px] w-[20px]"
                  icon={<ShareIcon color="#2887d0" />}
                  iconText="Share"
                  additionalStyles="text-unhighlighted-color hover:text-commentHoverText hover:bg-commentHoverBg p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
