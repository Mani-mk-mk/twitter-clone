import HomeHeader from "../components/HomeHeader";
import { HeaderProps } from "../types/types";

const Notifications = (props: HeaderProps) => {
  return (
    <main className="w-full max-w-[600px] border-r border-borderColor lg:w-[600px]">
      <div className="relative h-[60px] border border-r-0 border-t-0 border-solid border-borderColor">
        <HomeHeader tabIndex={props.tabIndex} />
      </div>
    </main>
  );
};

export default Notifications;
