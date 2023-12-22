import { useState } from "react";
import ClearIcon from "../assets/icons/ClearIcon";

const PremiumModal = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <dialog open>
      <style>{`
					dialog:modal {
						overflow-x: hidden;
					}
				`}</style>

      <div className="bg-modalBackdrop fixed inset-0 z-10">
        <div
          id="modalContent"
          className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-xl dark:bg-dark dark:text-white lg:max-w-[500px]"
        >
          <div className="flex w-full items-center justify-start">
            <div className="rounded p-4">
              <button className="h-[20px] w-[20px] cursor-pointer hover:bg-accent-dark">
                <ClearIcon color="white" />
              </button>
            </div>
            <div></div>
          </div>
          <div className="p-12">
            <h1 className="py-2 text-center font-roboto text-2xl font-bold">
              Who are you?
            </h1>
            <h4 className="text-md py-2 text-center font-roboto font-medium">
              Choose the right subscription for you:
            </h4>
            <div className="my-2 flex justify-center gap-4">
              <div
                onClick={() => setActiveTab(0)}
                className={`flex w-1/2 cursor-pointer flex-col items-stretch justify-center rounded-md bg-accent-dark p-2 shadow shadow-white ${
                  activeTab === 0 && "border-header border"
                }`}
              >
                <p className="text-unhighlighted-color text-sm">Premium</p>
                <h6 className="text-lg font-bold">I am an individual</h6>
                <p className="text-unhighlighted-color text-sm">
                  For individual and creators.
                </p>
              </div>
              <div
                onClick={() => setActiveTab(1)}
                className={`flex w-1/2 cursor-pointer flex-col items-stretch justify-center rounded-md bg-accent-dark p-2 shadow shadow-white ${
                  activeTab === 1 && "border-header border"
                }`}
              >
                <p className="text-unhighlighted-color text-sm">
                  Verified Organizations
                </p>
                <h6 className="text-lg font-bold">I am an organization.</h6>
                <p className="text-unhighlighted-color text-sm">
                  For business, government agencies, and non-profits
                </p>
              </div>
            </div>
            <div>
              <button className="my-8 w-full rounded-full bg-light p-2 text-black ">
                Subscribe
              </button>
            </div>
            <div>
              <span>Learn more about</span>
              <span> </span>
              <a
                className="text-commentHoverText"
                href="https://help.twitter.com/using-twitter/twitter-blue"
                rel="noopener noreferrer nofollow"
                target="_blank"
                role="link"
              >
                <span>Premium</span>
              </a>
              <span> </span>
              <span>and</span>
              <span> </span>
              <a
                className="text-commentHoverText"
                href="https://help.twitter.com/using-twitter/verified-organizations"
                rel="noopener noreferrer nofollow"
                target="_blank"
                role="link"
              >
                <span>Verified Organizations</span>
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PremiumModal;
