import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { HeaderProps } from "../types/types";
import axiosInstance from "../utils/axios";
import { BookmarksType } from "../types/StatsType";
import Post from "../components/Post";
import { User } from "../types/PostTypes";

const Bookmarks = (props: HeaderProps) => {
  const [bookmarks, setBookmarks] = useState<BookmarksType[] | null>(null);

  const getUser: (id: number) => Promise<User> = async (id: number) => {
    try {
      const response = await axiosInstance.get("/users/" + id);
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  };

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const response = await axiosInstance.get("/bookmarks?_expand=post");
        if (response.status === 200) {
          const bookmarkData = response.data;

          // Use Promise.all to concurrently fetch user data for all bookmarks
          const usersPromises = bookmarkData.map(
            async (bookmark: { post: { userId: number } }) => {
              const user = await getUser(bookmark.post.userId);
              return { ...bookmark.post, user };
            },
          );

          // Wait for all promises to resolve
          const bookmarksWithUsers = await Promise.all(usersPromises);

          setBookmarks(bookmarksWithUsers);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBookmarks();
    // console.log(bookmarks);
  }, []);

  return (
    <main className="min-h-screen w-full max-w-[600px] border-r border-borderColor lg:w-[600px]">
      <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
        <HomeHeader tabIndex={props.tabIndex} />
      </div>

      {bookmarks?.length === 0 ? (
        <div className="my-8 flex justify-center gap-0 text-white">
          <div>
            <h1 className="font-roboto text-3xl font-extrabold">
              Save posts for later
            </h1>
            <p className="text-md max-w-[350px] py-1 text-unhighlighted-color">
              Bookmark posts to easily find them again in the future.
            </p>
          </div>
        </div>
      ) : (
        <div>
          {bookmarks?.map((bookmark, key) => {
            return <Post {...bookmark} key={key} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Bookmarks;
