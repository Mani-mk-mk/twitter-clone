import { ReactElement } from "react";

interface ActionIconType {
  icon: ReactElement;
  iconText: string;
  additionalStyles?: string;
  sizeStyles: string;
}

const ActionIcon = (props: ActionIconType) => {
  return (
    <div>
      <div
        className={`group relative flex cursor-pointer items-center justify-center gap-4 hover:rounded-full hover:bg-accent-dark lg:justify-start ${props.additionalStyles} `}
      >
        <div className="flex items-center justify-center ">
          <div className={props.sizeStyles}>{props.icon}</div>
          <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 transform rounded bg-hover-bg-highlight p-1 text-xs text-white group-hover:block ">
            {props.iconText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionIcon;
