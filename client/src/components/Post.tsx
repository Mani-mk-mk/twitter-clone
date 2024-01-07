import { PostType, StatsProps } from "../types/PostTypes";
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

const Post = (props: PostType) => {
  const [postLiked, setPostLiked] = useState(false);
  const [postBookmarked, setPostBookmarked] = useState(false);
  const [stats, setStats] = useState<StatsProps | undefined>(props.stats);

  const defaultUserId = 0;

  // console.log(`Post id ${props.id}: ${postLiked}`);

  useEffect(() => {
    if (props.likes) setPostLiked(props.likes.includes(props.id));
    if (props.bookmarks) setPostBookmarked(props.bookmarks.includes(props.id));
  }, [props.bookmarks, props.id, props.likes]);

  const likePost = async (event: React.MouseEvent) => {
    try {
      event.preventDefault();
      setPostLiked((prevLikeStatus) => !prevLikeStatus);

      if (!props.userId || !props.id) {
        throw new Error("Invalid user ID or post ID");
      }
      const maxLikeIdResponse = await axiosInstance.get(
        "/likes?_sort=id&_order=desc",
      );
      if (maxLikeIdResponse.status !== 200) {
        throw new Error("Failed to fetch maxLikeId");
      }
      const maxLikeId = maxLikeIdResponse.data[0]?.id || 0;

      const likes = stats && stats?.likes + (postLiked ? -1 : 1);
      setStats((prevStats) => {
        if (prevStats) return { ...prevStats, likes: prevStats?.likes + 1 };
      });

      if (postLiked) {
        await axiosInstance.delete(`/likes/${props.id}`);
      } else {
        await axiosInstance.post("/likes", {
          id: maxLikeId + 1,
          userId: props.userId,
          postId: props.id,
          likedBy: defaultUserId,
        });
      }

      await axiosInstance.patch(`/posts/${props.id}`, {
        stats: { ...stats, likes },
      });
    } catch (error) {
      // ErrorHandling
      console.error("Error in likePost:", error);
      // Rollback UI update if necessary
      setPostLiked((prevLikeStatus) => !prevLikeStatus);
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
              {props.user && <HoverInfo {...props.user!} />}
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
                {stats?.comments}
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
                {stats?.retweets}
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
                  (postLiked
                    ? "text-likeHoverText"
                    : "text-unhighlighted-color")
                }
              >
                {stats?.likes}
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
                {stats?.views}
              </p>
            </div>
            <div
              className="flex items-center justify-center"
              id="lonely-buttons"
            >
              <div
                onClick={bookmarkPost}
                className="group hidden items-center md:flex"
              >
                <ActionIcon
                  sizeStyles="h-[20px] w-[20px]"
                  icon={
                    <BookmarkIcon
                      active={postBookmarked}
                      color={
                        postBookmarked ? "text-commentHoverText" : "#2887d0"
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
