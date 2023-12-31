import { PostType } from "../types/PostTypes";
import ActionIcon from "./ActionIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import BookmarkIcon from "../assets/icons/BookmarksIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import RetweetIcon from "../assets/icons/RetweetIcon";
import ViewsIcon from "../assets/icons/ViewsIcon";
import LikeIcon from "../assets/icons/LikeIcon";
import MorePostIcon from "../assets/icons/MorePostIcon";
import { Link } from "react-router-dom";
import RenderImage from "./RenderImage";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import HoverInfo from "./HoverInfo";

interface BookmarkType {
  id: number;
  userId: number;
  postId: number;
}

const Post = (props: PostType) => {
  const [bookmarks, setBookmarks] = useState<null | number[]>(null);
  const [likes, setLikes] = useState<null | number[]>(null);

  const defaultUserId = 0;

  useEffect(() => {
    try {
      const getBookmarks = async () => {
        const response = await axiosInstance.get(
          "/bookmarks/?userId=" + defaultUserId,
        );
        if (response.status === 200) {
          setBookmarks(response.data.map((data: BookmarkType) => data.postId));
        }
      };
      getBookmarks();

      const getLikes = async () => {
        const response = await axiosInstance.get(
          "/likes/?userId=" + defaultUserId,
        );
        if (response.status === 200) {
          setLikes(response.data.map((data: BookmarkType) => data.postId));
        }
      };
      getLikes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // console.log(bookmarks);
  }, [bookmarks]);

  return (
    <div className="cursor-pointer border border-borderColor p-4 text-white hover:bg-hover-dark">
      <div className="flex w-full items-start gap-4">
        <div className="group h-[40px] w-[40px] rounded-full ">
          <Link to={`/${props.user?.userName.slice(1)}`}>
            <img
              className="rounded-full"
              src={props.user?.profilePictureUri}
              alt="user-profile-picture"
            />
            <div className="relative z-10 hidden group-hover:block">
              <HoverInfo {...props.user!} />
            </div>
          </Link>
        </div>
        <div className="w-full" id="container">
          <div
            className="flex w-full items-center justify-between"
            id="user-data-container"
          >
            <div className="flex items-center gap-2 pb-1">
              <Link to={`/${props.user?.userName.slice(1)}`}>
                <h4 className="font-bold text-white hover:underline">
                  {props.user?.profileName}
                </h4>
              </Link>
              <Link to={`/${props.user?.userName.slice(1)}`}>
                <p className="text-unhighlighted-color">
                  {props.user?.userName}
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

          {props.tweet && (
            <div id="post-text">
              <p className="pb-2 pr-8 font-roboto">{props.tweet}</p>
            </div>
          )}

          {props.images && <RenderImage images={props.images} />}

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
                {props.stats?.comments}
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
                {props.stats?.retweets}
              </p>
            </div>
            <div className="group flex items-center">
              <ActionIcon
                sizeStyles="h-[20px] w-[20px]"
                icon={
                  <LikeIcon
                    active={likes ? likes.includes(props.id) : false}
                    color={
                      likes && likes.includes(props.id)
                        ? "text-likeHoverText"
                        : "#2887d0"
                    }
                  />
                }
                iconText="Likes"
                additionalStyles="text-unhighlighted-color hover:text-likeHoverText group-hover:text-likeHoverText hover:bg-likeHoverBg p-2"
              />
              <p
                className={
                  "text-sm group-hover:text-likeHoverText " +
                  (likes && likes.includes(props.id)
                    ? "text-likeHoverText"
                    : "text-unhighlighted-color")
                }
              >
                {props.stats?.likes}
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
                {props.stats?.views}
              </p>
            </div>
            <div
              className="flex items-center justify-center"
              id="lonely-buttons"
            >
              <div className="group hidden items-center md:flex">
                <ActionIcon
                  sizeStyles="h-[20px] w-[20px]"
                  icon={
                    <BookmarkIcon
                      active={bookmarks ? bookmarks.includes(props.id) : false}
                      color={
                        bookmarks && bookmarks.includes(props.id)
                          ? "text-commentHoverText"
                          : "#2887d0"
                      }
                    />
                  }
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
