import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import mailicon from "../assets/Background.svg";
import emailcontainer from "../assets/Container.svg";
import password from "../assets/password.svg";
import eyebutton from "../assets/eyebutton.svg";
import right from "../assets/right.svg";
import google from "../assets/Google.png";
import microsoft from "../assets/Microsoft.png";

type LoginInput = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginInput>();

  // submitHandler is a type import which means it will never execute at browser
  const onsubmit: SubmitHandler<LoginInput> = (data) => console.log(data);

  return (
    <>
      {/* Main container */}
      <div className="w-full relative min-h-screen overflow-hidden">
        {/* top-left design */}
        <div className="absolute -top-20 -left-32  rounded-xl  w-96 h-96  bg-[#E5C52B33] blur-[120px]"></div>
        <div className="absolute -bottom-1.5 left-2/5 rounded-xl w-80 h-80 bg-[#D7C6851A] blur-[100px]"></div>
        <div className="absolute bottom-10 -right-28 rounded-xl w-125 h-125 bg-[#A8C9F726] blur-[150px]"></div>

        {/* Content Container */}
        <div className="flex flex-col gap-stack-lg max-w-130 mx-auto py-17.5">
          {/* form Title */}
          <div className="flex flex-col pb-stack-sm mx-auto">
            <img src={mailicon} alt="mailicon" className="w-16 mx-auto" />
            <span className="text-on-surface font-sans text-center tracking-[-0.6px] text-headline-md">
              Mail Tracko
            </span>
            <span className="font-sans text-body-sm text-center text-[#4B4738]">
              Enterprise Email Intelligence
            </span>
          </div>

          {/* form container */}
          <div className="relative">
            <div className="w-full h-1 bg-[#544600] absolute left-0 rounded-tr-lg rounded-tl-lg"></div>
            <div className="w-full rounded-lg border border-[#CDC6B24D] shadow-[0px_8px_30px_0px_#0000000A] p-8 bg-[#FFFFFF] flex flex-col gap-4">
              {/* Welcome div */}
              <div className="flex flex-col gap-1">
                <span className="text-title-sm text-on-surface text-center">
                  Welcome back
                </span>
                <span className="text-body-sm text-center text-[#4B4738]">
                  Please enter your details to sign in.
                </span>
              </div>

              {/* Form Content  */}
              <div className="pt-stack-sm">
                <form onSubmit={handleSubmit(onsubmit)}>
                  <div className="flex flex-col gap-stack-md">
                    <div className="flex flex-col gap-stack-sm">
                      <label
                        htmlFor="email"
                        className="text-[#4B4738] text-label-caps"
                      >
                        Work Email
                      </label>
                      <div className="w-full flex gap-2 items-center border border-[#CDC6B280] bg-surface-container-low rounded-DEFAULT py-3.5 pl-10 pr-4">
                        <img
                          src={emailcontainer}
                          alt="EmailContainerIcon"
                          className="w-[16.67px] h-5"
                        />
                        <input
                          placeholder="name@company.com"
                          type="email"
                          {...register("email")}
                          className=" text-[#CDC6B2B2] leading-[100%] font-normal text-[16px]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-stack-sm">
                      <div className="w-full flex justify-between items-center">
                        <label
                          htmlFor="password"
                          className="text-[#4B4738] text-label-caps"
                        >
                          Password
                        </label>

                        <span className="text-[#544600] text-label-caps">
                          Forgot password?
                        </span>
                      </div>
                      <div className="relative flex gap-2 items-center border border-[#CDC6B280] bg-surface-container-low rounded-DEFAULT py-3.5 pl-10 pr-4">
                        <img
                          src={password}
                          alt="PasswordIcon"
                          className="w-[13.33] h-5"
                        />
                        <input
                          type="password"
                          placeholder="••••••••"
                          {...register("password")}
                          className="text-[#CDC6B2B2] font-normal text-[16px] leading-[100%] "
                        />
                        <img
                          src={eyebutton}
                          alt="EyeIcon"
                          className="w-4.5 h-4 pt-[3.63px] pb-[0.37px] absolute right-4"
                        />
                      </div>
                    </div>

                    <div className="pt-stack-sm">
                      <button
                        type="submit"
                        className="w-full flex justify-center gap-stack-sm rounded-DEFAULT bg-primary py-3.5 text-surface-container-lowest text-title-sm shadow-button"
                      >
                        Sign In
                        <img src={right} alt="RightIcon" className="w-3" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Form outside container */}
              <div className=" w-full py-stack-sm flex items-center ">
                <div className="w-full h-px border border-t-[#CDC6B24D]"></div>
                <span className="w-full px-3.5 text-[#CDC6B2] text-label-caps">
                  OR CONTINUE WITH
                </span>
                <div className="w-full h-px border border-t-[#CDC6B24D]"></div>
              </div>
              <div className="flex gap-stack-sm">
                <div className="rounded-DEFAULT border border-[#CDC6B280] bg-surface-container-lowest flex gap-3 py-2.5 pr-[54.03px] pl-[54.02px]">
                  <img src={google} alt="GoogleIcon" className="w-4 h-4" />
                  <span className="text-[#4B4738] text-label-caps">Google</span>
                </div>
                <div className="rounded-DEFAULT border border-[#CDC6B280] bg-surface-container-lowest flex gap-3 py-2.5 pr-[46.12px] pl-[46.11px]">
                  <img
                    src={microsoft}
                    alt="MicrosoftIcon"
                    className="w-4 h-4"
                  />
                  <span className="text-[#4B4738] text-label-caps">
                    Microsoft
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#4B4738] flex justify-center items-center gap-1">
            <span className="text-body-sm">Don't have an account? </span>
            <span className="font-bold text-[16px] leading-6">
              Create an account
            </span>
          </div>
          <div className="py-stack-md flex justify-center">
            <div className="flex gap-stack-md">
              <span className="text-[#7C7766] text-label-caps">
                Privacy Policy
              </span>
              <div className="w-1 h-2.5 pt-1.5 flex items-center">
                <span className="bg-[#CDC6B2] rounded-xl h-1 w-1"></span>
              </div>
              <span className="text-label-caps text-[#7C7766]">
                Terms of Service
              </span>
              <div className="w-1 h-2.5 pt-1.5 flex items-center">
                <span className="bg-[#CDC6B2] rounded-xl h-1 w-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
