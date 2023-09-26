import { ReactNode } from "react";
import StyledBox from "./styleBox";
import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "./svgComponent";

export default function SignUpProvisers(props: {
  Adress: string;
  telOrMobileNumber: string;
  licens: ReactNode;
  providersName: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="justify-center items-center">
        <div className="  flex justify-center items-center top-0 w-screen h-[554px]  bg-[#45AC601A]">
          <div className=" w-[921px] h-[108px]  justify-center flex  flex-col">
            <div className="w-[883px] h-[52px] flex justify-center ">
              <h1 className=" text-[40px] font-[Poppins] font-semibold ">
                Start Filling Your Personal Data
              </h1>
            </div>
            <div className="w-[921px] h-[32px] opacity-50 flex justify-center items-center">
              <p className="flex justify-center items-center ">
                Please provide your personal data for us. We require essential
                information.
              </p>
            </div>
          </div>
        </div>

        <div className="  flex justify-center items-center h-screen  ">
          <div className=" custom-shadow bg-[#FFFFFF] flex flex-col justify-center items-center top-[0px] h-[662px] w-[1194px] rounded-[25px]">
            <div className="w-[1114px] h-[582px] ">
              <div className=" justify-end  w-[1114px] h-[526px] mt-5 ">
                <div className="w-[135px] h-[32px] ">
                  <h2 className=" font-normal font-[Poppins] text-[20px] ">
                    Personal Data
                  </h2>
                </div>
                <div className="  w-[1114px] h-[430px]  mb-0">
                  <div className=" flex  w-[1114px] h-[84px]  ">
                    <div className=" absolute w-[121px] h-[22px] font-semibold font-[Poppins] text-[16px]">
                      {props.providersName}
                    </div>

                    <div className="flex-col w-[551px] h-[84px]   ">
                      <div className=" absolute w-[551px] h-[54px]   mt-7 justify-center  items-center ">
                        <div className="w-[519px] h-[22px]  justify-center items-center">
                          <div className=" absolute ml-6 w-[498px] h-[22px] flex   items-center ">
                            <input
                              type="text"
                              placeholder=""
                              className="w-[498px] h-[22px]"
                            />
                          </div>

                          <div className=" w-[22px] h-[22px]flex justify-center items-center ">
                            <AccuntCircle />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[551px] h-[84px]  ">
                      <div>
                        <div className="w-[45px] h-[22px] font-[Poppins] font-semibold">
                          Email
                        </div>
                        <div className=" flex items-center w-[519px] h-[22px]  ">
                          <div className=" flex justify-center item-center w-[18.33px] h-[14.67px] mr-2 ">
                            <EmailIcon />
                          </div>
                          <div className="w-[485px] h-[22px]   ">
                            <input
                              type="text"
                              placeholder=""
                              className="w-[485px] h-[22px]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-[551px] h-[54px]"></div>
                    </div>
                  </div>
                  <div className=" flex  w-[1114px] h-[84px] ">
                    <div className=" absolute w-[82px] h-[22px] font-semibold font-[Poppins] text-[16px]  ">
                      <h2 className="w-[156px] h-[22px]">
                        {props.telOrMobileNumber}
                      </h2>
                    </div>

                    <div className="flex-col w-[551px] h-[84px]  ">
                      <div className=" absolute w-[551px] h-[54px] mt-7 justify-center  items-center  ">
                        <div className="w-[519px] h-[22px]  justify-center items-center">
                          <div className=" absolute ml-6 w-[498px] h-[22px] flex   items-center ">
                            <input
                              type="text"
                              placeholder=""
                              className="w-[498px] h-[22px]"
                            />
                          </div>

                          <div className=" w-[22px] h-[22px]flex justify-center items-center ">
                            <AccuntCircle />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[551px] h-[84px]  ">
                      <div>
                        <div className=" flex w-[115px] h-[22px] font-[Poppins] font-semibold">
                          {props.licens}
                        </div>
                        <div className=" flex items-center w-[551px] h-[54px]  mt-[6px] ">
                          <div className=" flex justify-center items-center w-[22.33px] h-[18.67px] ">
                            <MdcnLicense />
                          </div>
                          <div className="w-[485px] h-[22px]">
                            <input type="text" placeholder="" className=" " />
                          </div>
                        </div>
                      </div>

                      <div className="w-[551px] h-[54px]"></div>
                    </div>
                  </div>

                  <div>
                    <div className=" w-[1114px] h-[190px] gab-[16px] ">
                      <div className="W-[109px] h-[22px] font-[Poppins] font-semibold text-[16px] ">
                        {props.Adress}
                      </div>
                      <div className="flex w-[1082px] h-[22px] mt-3">
                        <div className=" flex justify-between w-[519px] h-[22px] ">
                          <HouseIcon />

                          <div className=" ">
                            <input
                              type="text"
                              placeholder=""
                              className="w-[485px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>

                  <div className="  flex w-[1114px] h-[24px] mt-[100px]">
                    <div className="  flex pr-1">
                      <StyledBox width="24px" height="24px" type="fixed" />
                    </div>
                    <div className=" flex w-full h-[22px] font-[Poppins] font-normal  text-[16px]">
                      I have read and agree to Carelyo for Doctor Services
                      <h4 className=" flex ml-3 text-[#45AC60] text-[16px] font-normal font-Poppins ">
                        {" "}
                        Terms of use and Privacy Policy.{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[1114px] h-[54px] flex font-[Poppins] ">
              <div className=" flex justify-center items-center w-[549px] h-[54px] rounded-[8px] border-[1px] text-[#45AC60] hover:bg-[#45AC60]  hover:text-[#FFFFFF] ">
                <h1 className=" w-[41px] h-[22px]  flex justify-center items-center">
                  Back
                </h1>
              </div>
              <div className=" flex justify-center items-center w-[549px] h-[54px] rounded-[8px] border-[1px] text-[#45AC60]  hover:text-white hover:bg-[#45AC60]">
                <h1 className="  w-[75px] h-[22px]  flex justify-center items-center">
                  Continue
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
