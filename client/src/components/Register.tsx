import AppleIcon from "../assets/icons/AppleIcon";
import Logo from "../assets/icons/Logo";
import Buttons from "./Buttons";

interface Props {}

const Register = (props: Props) => {
  console.log(props);
  return (
    <div className="dark:bg-dark w-screen lg:py-8">
      <div className="mx-auto flex min-w-[45vw] max-w-[600px] flex-col p-8 lg:w-full lg:max-w-full lg:flex-row lg:gap-8">
        <div className="my-4 w-[50px] lg:my-auto lg:w-1/2">
          <div className="mx-auto w-full lg:w-[350px]">
            <Logo color="white" />
          </div>
        </div>
        <div className="dark:text-white lg:w-1/2">
          <h1 className="font-roboto my-12 w-[400px] text-4xl font-extrabold tracking-wider md:text-6xl lg:w-full">
            Happening now
          </h1>
          <h4 className="font-roboto mb-6 mt-4 text-2xl font-bold tracking-wide ">
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
          <div className="flex w-[85%] items-center justify-center gap-2 py-2">
            <div className="h-[0.5px] w-full bg-[gray]"></div>
            <div>Or</div>
            <div className="h-[0.5px] w-full bg-[gray]"></div>
          </div>

          <div>
            <Buttons
              text="Create Account"
              backgroundColor="bg-btn-dark"
              textColor="text-white"
            />
            <div className="w-[85%] text-sm">
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

          <div className="my-4">
            <p className="py-2">Already have an account?</p>
            <Buttons
              text="Sign in"
              backgroundColor="bg-[black]"
              textColor="text-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
