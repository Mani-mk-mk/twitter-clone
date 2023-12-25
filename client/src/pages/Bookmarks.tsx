import HomeHeader from "../components/HomeHeader";
import { HeaderProps } from "../types/types";

const Bookmarks = (props: HeaderProps) => {
  return (
    <main className="w-full max-w-[600px] border-r border-borderColor lg:w-[600px]">
      <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
        <HomeHeader tabIndex={props.tabIndex} />
      </div>

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
    </main>
  );
};

export default Bookmarks;
