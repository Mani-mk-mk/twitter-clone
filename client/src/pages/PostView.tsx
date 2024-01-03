import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { PostType } from "../types/PostTypes";
import axiosInstance from "../utils/axios";
import { useParams } from "react-router-dom";
import UserDetailsTab from "../components/UserDetailsTab";
import SinglePostView from "../components/SinglePostView";

const PostView = () => {
  const [post, setPost] = useState<PostType | null>(null);

  const { postId } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      console.log("Fetching posts...");
      const response = await axiosInstance.get(`posts/${postId}?_expand=user`);
      console.log(response);
      if (response.status === 200) {
        setPost(response.data);
      }
    };
    getPosts();
  }, [postId]);

  return (
    <main className="min-h-screen w-full max-w-[600px] border-r border-borderColor lg:w-[600px]">
      <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
        <HomeHeader tabIndex={0} />
      </div>

      <UserDetailsTab
        user={post?.user}
        profileName={post?.user?.profileName}
        profilePictureUri={post?.user?.profilePictureUri}
        userName={post?.user?.userName}
      />

      {post && <SinglePostView post={post} />}
    </main>
  );
};

export default PostView;
