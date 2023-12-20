import { useState } from "react";

interface InputProps {
  label: string;
}

const InputBox = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div className={`relative my-2 ${isFocused ? "group" : ""}`}>
        <label
          className={`absolute left-2 transition-all ${
            isFocused
              ? "text-commentHoverText top-1 mb-2 text-xs"
              : "text-unhighlighted-color top-4"
          }`}
          htmlFor={props.label}
        >
          {props.label}
        </label>

        <input
          className={` ${
            isFocused ? "border-header" : "border-borderColor"
          } w-full 
            rounded-md border bg-dark p-2 py-4 outline-none
          `}
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default InputBox;
