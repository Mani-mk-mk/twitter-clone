import { ChangeEvent, useState } from "react";
import { ObjectType } from "../types/PostTypes";

interface InputProps {
  label: string;
  name: string;
  pollOption: ObjectType;
  setPollOptions: React.Dispatch<React.SetStateAction<ObjectType>>;
}

const InputBox = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(props.pollOption);
    const { name, value } = event.target;
    if (value.length <= 25) {
      // Update the pollOption state only if the length is within the limit
      props.setPollOptions((options) => ({
        ...options,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <div className={`relative my-2 ${isFocused ? "group" : ""}`}>
        <div className="">
          <label
            className={`absolute left-2 transition-all ${
              isFocused || props.pollOption[props.name] !== ""
                ? "text-commentHoverText top-1 mb-2 text-sm font-medium"
                : "text-unhighlighted-color text-md top-4"
            }`}
            htmlFor={props.label}
          >
            {props.label}
          </label>
          <label
            className={`text-unhighlighted-color absolute right-2 transition-all ${
              isFocused || props.pollOption[props.name] !== ""
                ? "text-md top-1 mb-2"
                : "hidden"
            }`}
            htmlFor="wordCount"
          >
            {props.pollOption?.[props.name].length} / 25
          </label>
        </div>

        <input
          onChange={handleInputChange}
          name={`${props.name}`}
          className={` ${
            isFocused ? "border-header" : "border-borderColor"
          } w-full 
            rounded-md border-2 bg-dark p-2 py-4 outline-none
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
