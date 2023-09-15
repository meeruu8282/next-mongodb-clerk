import Link from "next/link";
import Image from "next/image";
import CarelyoButton from "../Components/getStartedButton";
import Greenbackground from "../Components/greenBackground";

import { Public_Sans } from "next/font/google";

export default function Howitwork() {
  return (
    <div className=" relative justify-center   flex-col ">
      <div className="flex items-center">
        <div className="w-[624px] h-[480px] top-[288.69px] left-[125px] font-[Poppins border-[4px] ">
          <div className="w-[233px] h-[46px] top-[288.69px] left-[125px] gap-2 text-[16px] text-[#45AC60] font-semibold ">
            <div className="w-[185px] h-[22px]">Welcome to Carelyo 👋</div>
          </div>
          <div className="w-[522px] h-[249px] top-[347.69px] left-[125px] font-semibold text-[64px] text-[#000000] px-[16px]">
            <h1>Healthcare Platform for Providers!</h1>
          </div>
          <div className="w-[624px] h-[52px] top-[520.69px] left-[125px] opacity-50 font-normal text-[16px] mt-7 px-4 ">
            <p>
              Are you an independent doctor, family physician, or managing a
              small to medium-sized clinic or hospital? We at Carelyo are here
              for you!
            </p>
          </div>
          <div className="w-[361px] h-[72px]   flex ml-6  mt-6 item-center">
            <div className="">
              <CarelyoButton
                buttonText="Get Started"
                buttonSize="vLB"
                color="primary"
                size="small"
              />
            </div>

            <div className="w-[148px] h-[24px] gap-[8px] ml-8 items-center mt-5 flex right-0 ">
              <div className=" right-0  w-[116px] h-[22px] flex">
                <p className="  font-semibold text-[16px] text-[#000000]">
                  {" "}
                  Discover More
                </p>
              </div>
              <div className="  ">
                <div className=" w-[24px] h-[24px]  ">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_341_3389)">
                      <path
                        d="M5 13.6914H16.17L11.29 18.5714C10.9 18.9614 10.9 19.6014 11.29 19.9914C11.68 20.3814 12.31 20.3814 12.7 19.9914L19.29 13.4014C19.68 13.0114 19.68 12.3814 19.29 11.9914L12.71 5.39138C12.32 5.00138 11.69 5.00138 11.3 5.39138C10.91 5.78138 10.91 6.41138 11.3 6.80138L16.17 11.6914H5C4.45 11.6914 4 12.1414 4 12.6914C4 13.2414 4.45 13.6914 5 13.6914Z"
                        fill="#323232"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_341_3389">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.691406)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" justify-between w-[668px] h-[667px]">
          {" "}
          <Image
            src="/firstpageRec.png"
            alt="entre"
            width={668}
            height={667}
          />{" "}
        </div>
      </div>
      <div className=" relative flex justify-center items-center h-screen">
        <div className="  w-[1440px] h-[929px] top-[px]">
          {" "}
          <Greenbackground />
          <div>
            {" "}
            <div className="flex flex-col   justify-center  ">
              <div className=" absolute top-[60px] w-[1190px] ml-[125px] h-[809px]  shadow-lg items-center ">
                <div className=" absolute w-[439.96px] h-[96px] mt-0">
                  {" "}
                  <p className="font-[Poppins] font-normal text-[#FFFFFF] text-[32px] mb-[-2%]">
                    Who Can Become a{" "}
                  </p>
                  <p className="font-[Poppins] font-bold text-[#FFFFFF] text-[32px]">
                    Carelyo Health Provider?
                  </p>
                </div>
                <div className=" ">
                  {" "}
                  <p className="ml-[727px]  w-[588px] h-[64px] mt-0 text-white">
                    {" "}
                    Carelyo welcomes a wide range of healthcare professionals
                    and institutions to join as providers on our platform.
                  </p>{" "}
                </div>

                <div className="absolute  mt-[60px]  w-[373.51px] h-[323px] border-[1px] rounded-[25px] bg-opacity-20 bg-[#FFFFFF]">
                  <div className="w-[289px] h-[247px]  ml-4 mt-2">
                    <div className="w-[80px] h-[80px] ">
                      <Image
                        className=""
                        layout="fixed"
                        width={80}
                        height={80}
                        src="/Ellipse_11520.svg"
                        alt=""
                      />
                      <div className="w-[281px] h-[143px]  ">
                        <p className=" w-[281px] h-[29px]   text-[Poppins] font-semibold text-[24px] text-[#FFFFFF]">
                          Self-Employed Doctors
                        </p>
                        <p className=" font-[Poppind] text-[16px] text-[#FFFFFF] font-normal opacity-[75%] leading-7 mt-2 mr-8">
                          If you are a self-employed doctor running your own
                          practice, Carlo offers you the opportunity to expand
                          your reach with online
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" absolute right-0 mt-[60px] w-[782.26px] h-[323px] border-[1px] bg-opacity-20 bg-[#FFFFFF] rounded-[25px]">
                  <div className="absolute w-[436px] h-[224px] left-10 top-10  z-[500] ">
                    <div className="w-[436px] h-[38px]">
                      <p className="font-[Poppins] font-semibold text-[32px] text-[#FFFFFF]">
                        Clinics and Hospitals{" "}
                      </p>
                    </div>
                    <div className=" w-[436px] h-[78px] opacity-75 text-[Poppins]">
                      <p className=" mr-6 font-normal text-[16px] mt-3 text-white">
                        By joining Carelyo, you can streamline your appointment
                        booking process, enhance patient communication, and
                        improve overall efficiency.
                      </p>
                    </div>
                    <div className="  gap-[24px] absolute border-[1px] rounded-[30px] w-[174px] h-[60px]   bg-gradient-to-br from-[rgba(255, 255, 255)] via-[rgba(255, 255, 255)] to-[rgba(255, 255, 255)] ">
                      <CarelyoButton
                        buttonText="Join Carelyo"
                        buttonSize="jCb"
                        color="third"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className=" absolute w-[361px] h-[246px] bottom-0 right-0">
                    <Image
                      layout="fixed"
                      width={361}
                      height={246}
                      src="/image-r.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="absolute bottom-[0] w-[782.26px] h-[323px] border-[1px] bg-opacity-20 bg-[#FFFFFF] rounded-[25px]">
                  <div className=" absolute top-[55px] ml-[55px] w-[505px] h-[224px] left-0  z-[1000] ">
                    <div className="">
                      <h1 className="font-Poppins font-semibold text-[32px] text-[#FFFFFF] mt-0">
                        Diagnostic Laboratory Centers
                      </h1>
                      <div className="w-[460px] h-[78px] ">
                        <p className="font-[Poppins] font-normal text-[16px] leading-[-2%] text-[#FFFFFF] opacity-[75%] ">
                          Carelyo offers to seamlessly connect with referring
                          <p>
                            healthcare providers, share test results securely,
                            and
                          </p>
                          <p>
                            ensure timely communication for better patient care.
                          </p>
                        </p>
                      </div>
                    </div>

                    <div className=" absolute bottom-0 border-[1px] rounded-[30px]">
                      <CarelyoButton
                        buttonText="Get Carelyo"
                        color="third"
                        buttonSize="gCb"
                        size="small"
                      />
                    </div>
                  </div>

                  <div className=" absolute  w-[347px] h-[312px]   right-0 ">
                    <Image
                      layout="fixed"
                      width={361}
                      height={246}
                      src="/image587.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="absolute bottom-[0] w-[373.51px] h-[323px] right-0 border-[1px] bg-opacity-20 bg-[#FFFFFF] rounded-[25px] font-[Poppins]  ">
                  <div className="w-[307px] h-[226px] border-[1px] border-blue-700 mt-6">
                    <div className=" absolute w-[80px] h-[80px]">
                      <Image
                        layout="fixed"
                        width={80}
                        height={80}
                        src="/Ellipse11520.svg"
                        alt=""
                      />
                    </div>
                    <div className=" absolute w-[307px] h-[117px] border-[1px] border-pink-600 gab-[10px] bottom-0">
                      {" "}
                      <h1 className="w-[127px] h-[29px] font-semibold text-[24px] text-[#FFFFFF]">
                        Pharmacy
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
