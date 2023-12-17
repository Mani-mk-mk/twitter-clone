import AppleIcon from "../assets/icons/AppleIcon";
import Logo from "../assets/icons/Logo";
import Buttons from "./Buttons";

interface Props {}

const CopyCheck = (props: Props) => {
  console.log(props);
  return (
    <div className="w-screen dark:bg-dark lg:py-8">
      <div className="mx-auto flex flex-col p-8 lg:w-full lg:flex-row lg:gap-8">
        <div className="my-4 w-[50px] lg:my-auto lg:w-1/2">
          <div className="mx-auto w-full lg:w-[350px]">
            <Logo color="white" />
          </div>
        </div>
        <div className="mx-auto font-roboto dark:text-white lg:w-1/2">
          <h1 className="my-12 w-[400px] text-4xl font-extrabold tracking-wider md:text-6xl lg:w-full">
            Happening now
          </h1>
          <h4 className="mb-6 mt-4 text-2xl font-bold tracking-wide ">
            Join today.
          </h4>

          <div className="mt-4 flex flex-col gap-4">
            <Buttons
              icon={<AppleIcon color="black" />}
              text="Sign up with Google"
              textColor="text-black"
              backgroundColor="bg-light"
            />
            <Buttons
              icon={<AppleIcon color="black" />}
              text="Sign up with Apple"
              textColor="text-black"
              backgroundColor="bg-light"
            />
          </div>
          <div className="w-full">
            <div className="flex w-[85%] items-center justify-center gap-2 py-2 md:w-[60%]">
              <div className="h-[0.25px] w-full bg-[gray]"></div>
              <div>Or</div>
              <div className="h-[0.25px] w-full bg-[gray]"></div>
            </div>
          </div>

          <div>
            <Buttons
              text="Create Account"
              backgroundColor="bg-btn-dark"
              textColor="text-white"
            />
            <div className="w-[85%] py-1 text-sm md:w-[65%]">
              By signing up, you agree to the{" "}
              <a
                href="https://twitter.com/tos"
                rel="noopener noreferrer nofollow"
                target="_blank"
                role="link"
                className="text-blue-400"
              >
                <span>Terms of Service</span>
              </a>{" "}
              and{" "}
              <a
                href="https://twitter.com/privacy"
                rel="noopener noreferrer nofollow"
                target="_blank"
                role="link"
                className="text-blue-400"
              >
                <span>Privacy Policy</span>
              </a>
              , including{" "}
              <a
                href="https://help.twitter.com/rules-and-policies/twitter-cookies"
                rel="noopener noreferrer nofollow"
                target="_blank"
                role="link"
                className="text-blue-400"
              >
                <span>Cookie Use.</span>
              </a>
            </div>
          </div>

          <div className="my-8 mb-4">
            <p className="py-2">Already have an account?</p>
            <Buttons
              text="Sign in"
              backgroundColor="bg-[black]"
              textColor="text-blue-400"
              border="border"
              borderColor="border-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyCheck;
