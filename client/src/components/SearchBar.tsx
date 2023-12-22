import { ChangeEvent, useState } from "react";
import ExploreIcon from "../assets/icons/ExploreIcon";

import ClearIcon from "../assets/icons/ClearIcon";

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(searchText);
    setSearchText(event.target.value);
  };

  const clearSearchText = () => {
    console.log("Search text cleared: ", searchText);
    setSearchText("");
  };

  return (
    <div>
      <div
        className={` ${
          isInputFocused
            ? "text-commentHoverText border-header border dark:bg-dark"
            : "text-unhighlighted-color dark:bg-accent-dark"
        } flex w-full items-center rounded-full px-2 py-2 text-white `}
      >
        <div className={` mx-4 h-[20px] w-[20px]`}>
          <ExploreIcon color={isInputFocused ? "#2887d0" : "#6a6f74"} />
        </div>
        <input
          onChange={handleInputChange}
          placeholder="Search.."
          className={`placeholder-unhighlighted-color ${
            isInputFocused ? "dark:bg-dark" : "dark:bg-accent-dark"
          } mx-4 w-full outline-none`}
          type="text"
          value={searchText}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {isInputFocused && (
          <button
            onClick={clearSearchText}
            className="mr-2 h-[25px] w-[25px] cursor-pointer rounded-full bg-btn-dark p-2"
          >
            <ClearIcon color={"black"} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
