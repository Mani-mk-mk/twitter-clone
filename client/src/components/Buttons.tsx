import { ReactElement } from "react";

interface ButtonProps {
  icon?: ReactElement;
  text: string;
  backgroundColor: string;
  textColor: string;
}

const Buttons = (props: ButtonProps) => {
  return (
    <div className="flex w-full justify-start">
      <button
        className={`${props.backgroundColor} ${props.textColor} text-md flex w-[85%] items-center justify-center gap-2 rounded-full px-8 py-2 font-medium md:w-[60%]`}
      >
        {props.icon && <span className="h-4 w-4">{props.icon}</span>}
        <span>{props.text}</span>
      </button>
    </div>
  );
};

export default Buttons;
