import { MoonLoader } from "react-spinners";

const FullScreenLoader = () => {
  return (
    <div className="fixed left-0 top-0 grid h-screen w-screen place-content-center bg-black">
      <MoonLoader color="#1D9BF0" size={30} speedMultiplier={0.7} />
    </div>
  );
};

export default FullScreenLoader;
