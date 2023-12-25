import { ReactNode } from "react";

interface SidebarItemProps {
  hoverText?: string;
  text: string;
  index: number;
  icon: ReactNode;
  onClick?: (key: number, text: string) => void;
}

const SidebarItem = (props: SidebarItemProps) => {
  const handleClicK = () => {
    if (props.onClick) props.onClick(props.index, props.text);
  };

  return (
    <div
      onClick={handleClicK}
      className="group relative flex cursor-pointer items-center justify-center gap-4 p-3 hover:rounded-full hover:bg-accent-dark lg:justify-start"
    >
      <div className="flex items-center justify-center ">
        <div className="h-[30px] w-[30px]">{props.icon}</div>
        <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block lg:hidden lg:group-hover:hidden">
          {props.hoverText}
        </div>
      </div>
      <div className="hidden text-[20px] text-white lg:block">{props.text}</div>
    </div>
  );
};

export default SidebarItem;
