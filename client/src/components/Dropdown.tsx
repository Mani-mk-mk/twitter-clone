import { useState } from "react";

interface DropdownPropTypes {
  dropdownName: string;
  dropdownLabel: string;
  options: string[];
  // name: string;
}

const Dropdown = (props: DropdownPropTypes) => {
  const [dropdown, setDropdown] = useState(props.dropdownName);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleSelectedOption = (option: string) => {
    setDropdown(option);
    setShowDropdown(false);
  };

  return (
    <div>
      <div className="relative inline-block text-left">
        <div className="w-full">
          <button
            type="button"
            className="focus:border-header border-borderColor group inline-flex w-[120px] justify-center gap-x-1.5 rounded-md border px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hover-dark focus:border dark:bg-dark"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setShowDropdown((show) => !show)}
          >
            <div className="text-unhighlighted-color group-focus:text-commentHoverText  flex w-full items-center justify-between ">
              <div className="flex flex-col items-start justify-between">
                <div className="">{props.dropdownLabel}</div>
                <div className="text-white">{dropdown}</div>
              </div>
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {showDropdown && (
          <div
            className="bg-white absolute top-12 z-10 mt-2 max-h-[200px] origin-top-right overflow-y-scroll rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="w-[120px] py-1" role="none">
              {props.options.map((option) => (
                <p
                  onClick={() => handleSelectedOption(option)}
                  className="text-md dark:hover:bg-dropdownHoverBg block w-full cursor-pointer px-4 py-2 text-black hover:font-medium dark:bg-dark dark:text-white dark:hover:text-black"
                  role="menuitem"
                  id="menu-item-0"
                >
                  {option}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
