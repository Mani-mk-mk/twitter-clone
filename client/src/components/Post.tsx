import { useEffect, useState } from "react";
import { ObjectType, PostProps } from "../types/PostTypes";
import ActionIcon from "./ActionIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import BookmarkIcon from "../assets/icons/BookmarksIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import RetweetIcon from "../assets/icons/RetweetIcon";
import ViewsIcon from "../assets/icons/ViewsIcon";
import LikeIcon from "../assets/icons/LikeIcon";
import MorePostIcon from "../assets/icons/MorePostIcon";

const Post = (props: PostProps) => {
  console.log(props);
  const [styles, setStyles] = useState<ObjectType[] | null>(null);

  const imageStyles: ObjectType[][] = [
    [{ div: "rounded-lg", image: "rounded-lg w-full" }],
    [
      {
        div: "rounded-l-lg",
        image: "border-r border-borderColor rounded-l-lg",
      },
      {
        div: "rounded-r-lg",
        image: "border-l border-borderColor rounded-r-lg",
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

  useEffect(() => {
    const styleIndex = props.images ? props.images.length - 1 : 0;
    setStyles(imageStyles[styleIndex]);
  }, [props]);

  return (
    <div className="border-borderColor border-y p-4 text-white hover:bg-hover-dark">
      <div className="flex w-full items-start gap-4">
        <div className="h-[40px] w-[40px] rounded-full ">
          <img
            className="rounded-full"
            src={props.profilePictureUri}
            alt="user-profile-picture"
          />
        </div>
        <div className="w-full" id="container">
          <div
            className="flex w-full items-center justify-between"
            id="user-data-container"
          >
            <div className="flex items-center gap-2 pb-1">
              <h4 className="font-bold text-white">{props.profileName}</h4>
              <p className="text-unhighlighted-color">{props.userName}</p>
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
            <p className="pb-4 font-roboto">{props.text}</p>
          </div>
          <div
            // change style according to image count
            className={`grid ${
              props.images && props.images?.length % 2 === 0 && "grid-cols-2"
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
                additionalStyles="hover:bg-commentHoverBg p-2"
              />
              <p className="group-hover:text-commentHoverText text-unhighlighted-color text-sm">
                {props.stats.comments}
              </p>
            </div>
            <div className="group flex items-center">
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                icon={<RetweetIcon color="#2887d0" />}
                iconText="Retweet"
                additionalStyles="hover:bg-commentHoverBg p-2"
              />
              <p className="group-hover:text-commentHoverText text-unhighlighted-color text-sm">
                {props.stats.retweets}
              </p>
            </div>

            <div className="group flex items-center">
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                icon={<LikeIcon color="#2887d0" />}
                iconText="Likes"
                additionalStyles="hover:bg-commentHoverBg p-2"
              />
              <p className="group-hover:text-commentHoverText text-unhighlighted-color text-sm">
                {props.stats.likeCount}
              </p>
            </div>

            <div className="group flex items-center">
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                icon={<ViewsIcon color="#2887d0" />}
                iconText="Views"
                additionalStyles="hover:bg-commentHoverBg p-2"
              />
              <p className="group-hover:text-commentHoverText text-unhighlighted-color text-sm">
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
                  additionalStyles="hover:bg-commentHoverBg p-2"
                />
              </div>

              <div className="group flex items-center">
                <ActionIcon
                  sizeStyles="h-[20px] w-[20px]"
                  icon={<ShareIcon color="#2887d0" />}
                  iconText="Share"
                  additionalStyles="hover:bg-commentHoverBg p-2"
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
