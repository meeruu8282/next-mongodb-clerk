
import StyledBox from "../../Components/styleBox";





export default function DoctorSignUp() {





  return (
    <div className="flex flex-col justify-center items-center">
      <div className="justify-center items-center">
        <div className="  flex justify-center items-center top-0 w-screen h-[554px]  bg-[#45AC601A]">
          <div className="w-[921px] h-[108px]  justify-center flex  flex-col">
            <div className="w-[883px] h-[52px] flex justify-center ">
              <h1 className=" text-[40px] font-[Poppins] font-semibold">
                Start Filling Your Personal Data
              </h1>
            </div>
            <div className="w-[921px] h-[32px] opacity-50 flex justify-center items-center">
              <p className="flex justify-center items-center">
                Please provide your personal data for us. We require essential
                information.
              </p>
            </div>
          </div>
        </div>
      
      
        <div className="flex flex-col justify-center items-center  ">
        <div className="w-[1114px] h-[582px] border border-black ">
          <div className="w-[135px] h-[32px]">
            <h2 className=" font-normal font-[Poppins] text-[20px]">
              Personal Data
            </h2>
          </div>
          <div className=" justify-end  w-[1114px] h-[526px] border border-green-500">
            <div className="  w-[1114px] h-[430px] border border-yellow-500 mb-0">
              <div className=" flex  w-[1114px] h-[84px] border border-gray-400">
                <div className=" absolute w-[82px] h-[22px] font-semibold font-[Poppins] text-[16px]  ">
                  Full Name{" "}
                </div>

                <div className="flex-col w-[551px] h-[84px] border-[1px] border-blue-500 ">
                  <div className=" absolute w-[551px] h-[54px] border-black border-[2px] mt-7 justify-center  items-center ">
                    <div className="w-[519px] h-[22px]  justify-center items-center">
                      <div className=" absolute ml-6 w-[498px] h-[22px] flex   items-center border">
                        <input
                          type="text"
                          placeholder=""
                          className="w-[498px] h-[22px]"
                        />
                      </div>

                      <div className=" w-[22px] h-[22px]flex justify-center items-center ">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="currentColor"
                        >
                          <g clipPath="url(#clip0_418_1876)">
                            <path
                              d="M10.9997 1.83325C5.93967 1.83325 1.83301 5.93992 1.83301 10.9999C1.83301 16.0599 5.93967 20.1666 10.9997 20.1666C16.0597 20.1666 20.1663 16.0599 20.1663 10.9999C20.1663 5.93992 16.0597 1.83325 10.9997 1.83325ZM6.48051 16.7566C6.87467 15.9316 9.27634 15.1249 10.9997 15.1249C12.723 15.1249 15.1338 15.9316 15.5188 16.7566C14.2722 17.7466 12.7047 18.3333 10.9997 18.3333C9.29467 18.3333 7.72717 17.7466 6.48051 16.7566ZM16.8297 15.4274C15.5188 13.8324 12.338 13.2916 10.9997 13.2916C9.66134 13.2916 6.48051 13.8324 5.16967 15.4274C4.23467 14.1991 3.66634 12.6683 3.66634 10.9999C3.66634 6.95742 6.95717 3.66659 10.9997 3.66659C15.0422 3.66659 18.333 6.95742 18.333 10.9999C18.333 12.6683 17.7647 14.1991 16.8297 15.4274ZM10.9997 5.49992C9.22134 5.49992 7.79134 6.92992 7.79134 8.70825C7.79134 10.4866 9.22134 11.9166 10.9997 11.9166C12.778 11.9166 14.208 10.4866 14.208 8.70825C14.208 6.92992 12.778 5.49992 10.9997 5.49992ZM10.9997 10.0833C10.2388 10.0833 9.62467 9.46908 9.62467 8.70825C9.62467 7.94742 10.2388 7.33325 10.9997 7.33325C11.7605 7.33325 12.3747 7.94742 12.3747 8.70825C12.3747 9.46908 11.7605 10.0833 10.9997 10.0833Z"
                              fill="#8E8E8F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_418_1876">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[551px] h-[84px] border border-pink-400">
                  <div>
                    <div className="w-[45px] h-[22px] font-[Poppins] font-semibold">
                      Email
                    </div>
                    <div className=" flex items-center w-[551px] h-[54px] border mt-[6px] border-purple-500">
                      <div className=" flex justify-center item-center w-[22.33px] h-[18.67px] border border-orange-500">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_418_1882)">
                            <path
                              d="M20.1663 5.50008C20.1663 4.49175 19.3413 3.66675 18.333 3.66675H3.66634C2.65801 3.66675 1.83301 4.49175 1.83301 5.50008V16.5001C1.83301 17.5084 2.65801 18.3334 3.66634 18.3334H18.333C19.3413 18.3334 20.1663 17.5084 20.1663 16.5001V5.50008ZM18.333 5.50008L10.9997 10.0834L3.66634 5.50008H18.333ZM18.333 16.5001H3.66634V7.33341L10.9997 11.9167L18.333 7.33341V16.5001Z"
                              fill="#8E8E8F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_418_1882">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="w-[485px] h-[22px]">
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
              <div className=" flex  w-[1114px] h-[84px] border border-gray-400">
                <div className=" absolute w-[82px] h-[22px] font-semibold font-[Poppins] text-[16px]  ">
                  Telefon Numner
                </div>

                <div className="flex-col w-[551px] h-[84px] border-[1px] border-blue-500 ">
                  <div className=" absolute w-[551px] h-[54px] border-black border-[2px] mt-7 justify-center  items-center ">
                    <div className="w-[519px] h-[22px]  justify-center items-center">
                      <div className=" absolute ml-6 w-[498px] h-[22px] flex   items-center border">
                        <input
                          type="text"
                          placeholder=""
                          className="w-[498px] h-[22px]"
                        />
                      </div>

                      <div className=" w-[22px] h-[22px]flex justify-center items-center ">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="currentColor"
                        >
                          <g clipPath="url(#clip0_418_1876)">
                            <path
                              d="M10.9997 1.83325C5.93967 1.83325 1.83301 5.93992 1.83301 10.9999C1.83301 16.0599 5.93967 20.1666 10.9997 20.1666C16.0597 20.1666 20.1663 16.0599 20.1663 10.9999C20.1663 5.93992 16.0597 1.83325 10.9997 1.83325ZM6.48051 16.7566C6.87467 15.9316 9.27634 15.1249 10.9997 15.1249C12.723 15.1249 15.1338 15.9316 15.5188 16.7566C14.2722 17.7466 12.7047 18.3333 10.9997 18.3333C9.29467 18.3333 7.72717 17.7466 6.48051 16.7566ZM16.8297 15.4274C15.5188 13.8324 12.338 13.2916 10.9997 13.2916C9.66134 13.2916 6.48051 13.8324 5.16967 15.4274C4.23467 14.1991 3.66634 12.6683 3.66634 10.9999C3.66634 6.95742 6.95717 3.66659 10.9997 3.66659C15.0422 3.66659 18.333 6.95742 18.333 10.9999C18.333 12.6683 17.7647 14.1991 16.8297 15.4274ZM10.9997 5.49992C9.22134 5.49992 7.79134 6.92992 7.79134 8.70825C7.79134 10.4866 9.22134 11.9166 10.9997 11.9166C12.778 11.9166 14.208 10.4866 14.208 8.70825C14.208 6.92992 12.778 5.49992 10.9997 5.49992ZM10.9997 10.0833C10.2388 10.0833 9.62467 9.46908 9.62467 8.70825C9.62467 7.94742 10.2388 7.33325 10.9997 7.33325C11.7605 7.33325 12.3747 7.94742 12.3747 8.70825C12.3747 9.46908 11.7605 10.0833 10.9997 10.0833Z"
                              fill="#8E8E8F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_418_1876">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[551px] h-[84px] border border-pink-400">
                  <div>
                    <div className=" flex w-[115px] h-[22px] font-[Poppins] font-semibold">
                      MCDN Lincense
                    </div>
                    <div className=" flex items-center w-[551px] h-[54px] border mt-[6px] border-purple-500">
                      <div className=" flex justify-center items-center w-[22.33px] h-[18.67px] border border-orange-500">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_418_1882)">
                            <path
                              d="M20.1663 5.50008C20.1663 4.49175 19.3413 3.66675 18.333 3.66675H3.66634C2.65801 3.66675 1.83301 4.49175 1.83301 5.50008V16.5001C1.83301 17.5084 2.65801 18.3334 3.66634 18.3334H18.333C19.3413 18.3334 20.1663 17.5084 20.1663 16.5001V5.50008ZM18.333 5.50008L10.9997 10.0834L3.66634 5.50008H18.333ZM18.333 16.5001H3.66634V7.33341L10.9997 11.9167L18.333 7.33341V16.5001Z"
                              fill="#8E8E8F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_418_1882">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="w-[485px] h-[22px]">
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

              <div>
                <div className="w-[1114px] h-[190px] gab-[16px] border-[4px] border-red-500">
                  <div className="W-[109px] h-[22px] font-[Poppins] font-semibold text-[16px] ">
                    Your Address
                  </div>
                  <div className="w-[1114px] h-[160px] ">
                    <input
                      type="text"
                      placeholder=""
                      className="w-[1082px] h-[22px]"
                    />
                  </div>
                </div>
              </div>
              <div></div>

              <div className="  flex w-[1114px] h-[24px] border  border-black">
                <div className="  flex pr-1">
                  <StyledBox width="24px" height="24px" type="fixed" />
                </div>
                <div className=" flex w-full h-[22px] font-[Poppins] font-normal  text-[16px]">
                  I have read and agree to Carelyo for Doctor Services
                  <h4 className=" flex ml-3 text-[#45AC60] text-[16px] font-normal font-Poppins "> Terms of use and Privacy Policy. </h4>
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
