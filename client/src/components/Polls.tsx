import { useState } from "react";
import InputBox from "./InputBox";
import { ObjectType } from "../types/PostTypes";
import { getMinutes, getDays, getHours } from "../data/getData";
import Dropdown from "./Dropdown";

interface PollsPropType {
  setShowPolls: React.Dispatch<React.SetStateAction<boolean>>;
}

const Polls = (props: PollsPropType) => {
  const [showOptions, setShowOptions] = useState(2);
  const [pollOptions, setPollOptions] = useState<ObjectType>({
    "1": "",
    "2": "",
    "3": "",
    "4": "",
  });

  const getDaysOption = getDays();
  const getHoursOption = getHours();
  const getMinutesOption = getMinutes();

  const addPollOption = () => {
    setShowOptions((option) => option + 1);
  };
  return (
    <div>
      <input
        placeholder="Ask a question?!"
        className="placeholder:py-auto w-full bg-dark py-2 text-xl leading-5 text-white placeholder-unhighlighted-color outline-none"
      />
      <div className="py-2">
        <div className=" rounded-t-lg border border-borderColor py-2 text-white">
          <div className="flex w-full gap-4 border-b-2 border-borderColor px-2">
            <div className="w-full">
              {new Array(showOptions).fill("").map((_, index) => (
                <InputBox
                  pollOption={pollOptions}
                  setPollOptions={setPollOptions}
                  label={
                    index > 1
                      ? `Choice-${index + 1} (Optional)`
                      : `Choice-${index + 1}`
                  }
                  name={`${index + 1}`}
                />
              ))}
            </div>
            {showOptions < 4 && (
              <div className="flex items-end">
                <button
                  onClick={addPollOption}
                  className="text-2xl text-commentHoverText"
                >
                  +
                </button>
              </div>
            )}
          </div>
          <div className="px-2">
            <div className="py-2">Poll length</div>
            <div className="flex items-center justify-between">
              <Dropdown
                dropdownLabel="Days"
                options={getDaysOption}
                dropdownName="1"
              />

              <Dropdown
                dropdownLabel="Hours"
                options={getHoursOption}
                dropdownName="0"
              />

              <Dropdown
                dropdownLabel="Minutes"
                options={getMinutesOption}
                dropdownName="0"
              />
            </div>
          </div>
        </div>
        <div className=" flex w-full items-center justify-center rounded-b-lg border border-borderColor">
          <button
            onClick={() => props.setShowPolls(false)}
            className="w-full rounded-b-lg py-4 text-[#c1292d] hover:bg-[#1c0404]"
          >
            Remove poll
          </button>
        </div>
      </div>
    </div>
  );
};

export default Polls;
