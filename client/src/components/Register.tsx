import AppleIcon from "../assets/icons/AppleIcon";
import GoogleIcon from "../assets/icons/GoogleIcon";
import Logo from "../assets/icons/Logo";
import Buttons from "./Buttons";

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Register = (_props: Props) => {
  return (
    <div className="flex h-screen w-screen justify-center dark:bg-dark md:items-start lg:items-center lg:py-8">
      <div className="flex w-full justify-center">
        <div className="mx-auto flex flex-col p-8 lg:w-full lg:flex-row lg:gap-8">
          <div className="my-4 w-[50px] lg:my-auto lg:w-[55%]">
            <div className="mx-auto w-full lg:w-[350px]">
              <Logo color="text-white" />
            </div>
          </div>
          <div className=" dark:text-white lg:w-[45%]">
            <h1 className="my-12 w-full font-roboto text-4xl font-extrabold tracking-wider md:max-w-[400px] md:text-6xl lg:max-w-full">
              Happening now
            </h1>
            <h4 className="mb-6 mt-4 font-roboto text-3xl font-extrabold tracking-wide">
              Join today.
            </h4>

            <div className="mt-4 flex flex-col gap-4">
              <Buttons
                icon={<GoogleIcon />}
                text="Sign up with Google"
                additionalStyles="text-black bg-light"
              />
              <Buttons
                icon={<AppleIcon color="black" />}
                text="Sign up with Apple"
                additionalStyles="text-black bg-light"
              />
            </div>
            <div className="w-full">
              <div className="flex w-[85%] items-center justify-center gap-2 py-2 md:w-[60%]">
                <div className="h-[0.25px] flex-1 bg-[gray]"></div>
                <div>Or</div>
                <div className="h-[0.25px] flex-1 bg-[gray]"></div>
              </div>
            </div>

            <div>
              <Buttons
                text="Create Account"
                additionalStyles="text-white bg-btn-dark"
              />
              <div className="w-[85%] py-1 text-xs md:w-[65%]">
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

            <div className="my-8 mb-4 text-center">
              <p className="py-4 text-start text-lg font-bold">
                Already have an account?
              </p>
              <Buttons
                text="Sign in"
                additionalStyles=" bg-[black] text-blue-400 border-[0.25px] border-slate-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
