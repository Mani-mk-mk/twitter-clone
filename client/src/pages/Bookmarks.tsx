import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { HeaderProps } from "../types/types";
import axiosInstance from "../utils/axios";
import { BookmarksType } from "../types/StatsType";
import Post from "../components/Post";

const Bookmarks = (props: HeaderProps) => {
  const [bookmarks, setBookmarks] = useState<BookmarksType[] | null>(null);
  const defaultUser = 0;

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const response = await axiosInstance.get(
          "/bookmarks?bookmarkedBy=" +
            defaultUser +
            "&_expand=post&_expand=user",
        );
        if (response.status === 200) {
          setBookmarks(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBookmarks();
    // console.log(bookmarks);
  }, [defaultUser]);

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
            bookmark.post["user"] = bookmark.user;
            return <Post {...bookmark.post} key={key} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Bookmarks;
