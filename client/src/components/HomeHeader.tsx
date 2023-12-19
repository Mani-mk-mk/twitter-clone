import SettingsIcon from "../assets/icons/SettingsIcon";

interface HeaderProps {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const HomeHeader = (props: HeaderProps) => {
  console.log(props);
  return (
    <div className="sticky top-0 flex h-full w-full items-center justify-between ">
      <div className="flex h-full w-full items-center justify-between dark:bg-dark">
        <div
          onClick={() => props.setTabIndex(0)}
          className="text-unhighlighted-color flex h-full w-full cursor-pointer items-center justify-center px-3 text-lg hover:bg-accent-dark"
        >
          <div
            className={`flex h-full items-center ${
              props.tabIndex === 0 &&
              "border-header border-b-4 font-medium text-white"
            }`}
          >
            For you
          </div>
        </div>
        <div
          onClick={() => props.setTabIndex(1)}
          className="text-unhighlighted-color flex h-full w-full cursor-pointer items-center justify-center px-3 text-lg hover:bg-accent-dark"
        >
          <div
            className={`flex h-full items-center ${
              props.tabIndex === 1 &&
              "border-header border-b-4 font-medium text-white"
            }`}
          >
            Following
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start">
        <div className="flex items-center justify-between ">
          <div className="h-[25px] w-[25px]">
            <SettingsIcon color="white" />
          </div>
          <div className="absolute left-1/2 top-full z-10 hidden w-full -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden">
            Timeline Settings{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
