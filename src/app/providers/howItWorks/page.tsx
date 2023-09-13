import Link from "next/link";
import Image from "next/image";
import CarelyoButton from "../Components/getStartedButton";
import Greenbackground from "../Components/greenBackground";
import { Public_Sans } from "next/font/google";
export default function Howitwork() {
  return (
    <div className=" relative justify-center   flex-col ">

      <div className="flex items-center" >


        <div className="w-[624px] h-[480px] top-[288.69px] left-[125px] font-[Poppins] bg-blue-200 ">
          <div className="w-[233px] h-[46px] top-[288.69px] left-[125px] gap-2 text-[16px] text-[#45AC60] font-semibold bg-yellow-500">
            <div className="w-[185px] h-[22px]">Welcome to Carelyo 👋</div>
          </div>
          <div className="w-[522px] h-[249px] top-[347.69px] left-[125px] font-semibold text-[64px] text-[#000000] px-[16px]"><h1>Healthcare Platform for Providers!</h1></div>
          <div className="w-[624px] h-[52px] top-[520.69px] left-[125px] opacity-50 font-normal text-[16px] pt-4 px-4 "><p>Are you an independent doctor, family physician, or managing a small to medium-sized clinic or hospital? We at Carelyo are here for you!</p></div>
          <div className="w-[361px] h-[72px]  gap-8 bg-purple-400 flex  mt-6 ">
            <div className="w-[361px] h-[72px] top-[696.69px] gab-[32px] flex  justify-between  items-center  ">  <CarelyoButton buttonText="Get Stared" buttonSize="vLB" color="primary" />

              <div className="w-[148px] h-[24px] gap-[8px] bg-yellow-300 items-center flex">
                <div className="w-[116px] h-[22px]  font-semibold text-[16px] text-[#000000]"> <p>Discover More</p>

                  <div className="w-[24px] h-[24px] ">

                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_341_3389)">
                        <path d="M5 13.6914H16.17L11.29 18.5714C10.9 18.9614 10.9 19.6014 11.29 19.9914C11.68 20.3814 12.31 20.3814 12.7 19.9914L19.29 13.4014C19.68 13.0114 19.68 12.3814 19.29 11.9914L12.71 5.39138C12.32 5.00138 11.69 5.00138 11.3 5.39138C10.91 5.78138 10.91 6.41138 11.3 6.80138L16.17 11.6914H5C4.45 11.6914 4 12.1414 4 12.6914C4 13.2414 4.45 13.6914 5 13.6914Z" fill="#323232" />
                      </g>
                      <defs>
                        <clipPath id="clip0_341_3389">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.691406)" />
                        </clipPath>
                      </defs>
                    </svg>


                  </div>

                </div>


              </div>

            </div>
          </div>
        </div>

        <div className="bg-gray-200 justify-between w-[668px] h-[667px]"> <Image src="/firstpageRec.png" alt="entre" width={668} height={667} />   </div>
      </div>
      <div className="flex justify-center items-center h-screen">   <div className=" relative w-[1440px] h-[929px] top-[px] " >  <Greenbackground />
        <div> <div className="flex flex-col  justify-center items-center ">     <div className=" absolute top-[70px] w-[1190px] h-[809px] border-[1px]  items-center ">
          
        <div className="w-[373.51px] h-[323px] top-[194px] left-[126.01px] border-[1px] rounded-[25px] ">
      <div className="w-[289px] h-[247px] ">
        <div className="w-[281px] h-[29px]">
          <p className="text-[Poppins] font-semibold text-[24px] text-[#FFFFFF]">Self-Employed Doctors</p>
        </div>

<p className="h-[289px] w-[143px] gap-[10px]"></p>

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
