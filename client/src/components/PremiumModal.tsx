import { useState } from "react";
import ClearIcon from "../assets/icons/ClearIcon";

interface PremiumModalProps {
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
}

const PremiumModal = (props: PremiumModalProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const closeModal = () => {
    props.modalRef?.current?.close();
  };

  const changeTab = () => {
    setTabIndex(activeTab + 1);
  };

  return (
    <dialog ref={props.modalRef}>
      <style>{`
					dialog:modal {
						overflow-x: hidden;
					}
				`}</style>

      <div className="fixed inset-0 z-10 bg-modalBackdrop">
        <div
          id="modalContent"
          className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-xl dark:bg-dark dark:text-white lg:max-w-[600px]"
        >
          <div className="flex w-full items-center justify-start gap-8 p-4">
            <div className="">
              <div
                onClick={closeModal}
                className="h-[15px] w-[15px] cursor-pointer rounded-full hover:bg-accent-dark"
              >
                <ClearIcon color="white" />
              </div>
            </div>
            <div className="flex items-center justify-start font-roboto text-xl font-bold tracking-wider">
              {tabIndex !== 0 && "Subscribe"}{" "}
            </div>
          </div>
          <main className="p-16">
            <h1 className="py-2 text-center font-roboto text-3xl font-extrabold">
              Who are you?
            </h1>
            <h4 className="text-md py-2 text-center font-roboto font-medium">
              Choose the right subscription for you:
            </h4>
            <div className="my-4 flex justify-center gap-4">
              <div
                onClick={() => setActiveTab(0)}
                className={`flex w-1/2 cursor-pointer flex-col items-stretch justify-center rounded-md border bg-accent-dark p-4 shadow shadow-white ${
                  activeTab === 0 ? "border-header" : "border-transparent"
                }`}
              >
                <p className="text-sm text-unhighlighted-color">Premium</p>
                <h6 className="text-lg font-bold">I am an individual</h6>
                <p className="text-sm text-unhighlighted-color">
                  For individual and creators.
                </p>
              </div>
              <div
                onClick={() => setActiveTab(1)}
                className={`flex w-1/2 cursor-pointer flex-col items-stretch justify-center rounded-md border bg-accent-dark  p-4 shadow shadow-white ${
                  activeTab === 1 ? " border-header" : "border-transparent"
                }`}
              >
                <p className="text-sm text-unhighlighted-color">
                  Verified Organizations
                </p>
                <h6 className="text-lg font-bold">I am an organization.</h6>
                <p className="text-sm text-unhighlighted-color">
                  For business, government agencies, and non-profits
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={changeTab}
                className="my-8 w-full rounded-full bg-light p-4 text-lg font-bold text-black "
              >
                Subscribe
              </button>
            </div>
            <div className="text-center">
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
          </main>
        </div>
      </div>
    </dialog>
  );
};

export default PremiumModal;
