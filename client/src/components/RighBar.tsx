import SearchBar from "./SearchBar";
interface RightBarPropTypes {
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
}

const RighBar = (props: RightBarPropTypes) => {
  return (
    <div className="mx-4 hidden text-white lg:block lg:max-w-[350px]">
      <div className="flex h-[60px] w-full items-center">
        <div className="py-auto mb-2  w-full items-center ">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 rounded-xl bg-accent-dark p-4">
        <h2 className="font-roboto text-xl font-extrabold">
          Subscribe to Premium
        </h2>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button
          className="rounded-full bg-btn-dark px-4 py-2 font-bold"
          onClick={() => props.modalRef.current?.showModal()}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default RighBar;
