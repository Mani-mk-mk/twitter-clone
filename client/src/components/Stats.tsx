import ActionIcon from "./ActionIcon";
import BookmarkIcon from "../assets/icons/BookmarksIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import LikeIcon from "../assets/icons/LikeIcon";
import RetweetIcon from "../assets/icons/RetweetIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import ViewsIcon from "../assets/icons/ViewsIcon";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";
import { PostType } from "../types/PostTypes";

const Stats = (props: PostType) => {
  const [postLiked, setPostLiked] = useState(false);
  const [postBookmarked, setPostBookmarked] = useState(false);

  const defaultUserId = 0;

  useEffect(() => {
    if (props.likes) setPostLiked(props.likes.includes(props.id));
    if (props.bookmarks) setPostBookmarked(props.bookmarks.includes(props.id));
  }, [props.bookmarks, props.id, props.likes]);

  const likePost = async (event: React.MouseEvent) => {
    event.preventDefault();
    setPostLiked((prevLikeStatus) => !prevLikeStatus);
    let maxLikeId: number = 0;
    const response = await axiosInstance.get("/likes?_sort=id&_order=desc");
    console.log(response);
    if (response.status === 200) {
      maxLikeId = response.data[0].id;
    }

    try {
      if (!postLiked) {
        const response = await axiosInstance.post("/likes", {
          id: maxLikeId + 1,
          userId: props.userId,
          postId: props.id,
          bookmarkedBy: defaultUserId,
        });
        console.log(response.status);
      } else {
        const response = await axiosInstance.delete("/likes/" + props.id);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const bookmarkPost = async (event: React.MouseEvent) => {
    event.preventDefault();
    setPostBookmarked((prevBookmarkStatus) => !prevBookmarkStatus);
    let maxBookmarkId: number = 0;
    const response = await axiosInstance.get("/bookmarks?_sort=id&_order=desc");
    console.log(response);
    if (response.status === 200) {
      maxBookmarkId = response.data[0].id;
    }

    try {
      if (!postBookmarked) {
        const response = await axiosInstance.post("/bookmarks", {
          id: maxBookmarkId + 1,
          userId: props.userId,
          postId: props.id,
          bookmarkedBy: defaultUserId,
        });
        console.log(response.status);
      } else {
        const response = await axiosInstance.delete("/bookmarks/" + props.id);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between" id="post-stats">
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
      <div onClick={likePost} className="group flex items-center">
        <ActionIcon
          sizeStyles="h-[20px] w-[20px]"
          icon={
            <LikeIcon
              active={postLiked}
              color={postLiked ? "text-likeHoverText" : "#2887d0"}
            />
          }
          iconText="Likes"
          additionalStyles="text-unhighlighted-color hover:text-likeHoverText group-hover:text-likeHoverText hover:bg-likeHoverBg p-2"
        />
        <p
          className={
            "text-sm group-hover:text-likeHoverText " +
            (postLiked ? "text-likeHoverText" : "text-unhighlighted-color")
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
      <div className="flex items-center justify-center" id="lonely-buttons">
        <div
          onClick={bookmarkPost}
          className="group hidden items-center md:flex"
        >
          <ActionIcon
            sizeStyles="h-[20px] w-[20px]"
            icon={
              <BookmarkIcon
                active={postBookmarked}
                color={postBookmarked ? "text-commentHoverText" : "#2887d0"}
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
  );
};

export default Stats;
