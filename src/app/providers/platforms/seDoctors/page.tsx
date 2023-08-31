import Image from "next/image";

export default function Sedoctors() {
  return (
    <div className=" h-auto ">
        <div>
          <h1 className="text-center text-3xl ">
        Joining carelyo as a{" "}
        <span className="text-greenText">
          Self-Employed <br /> Doctors
        </span>{" "}
        comes with numerous advantages
      </h1>
      <p className="text-center">
        With our innovative features and comprehensive support, we aim to
        empower your practice and enhance patient care.
      </p>   
        </div>
     
      {/* Green background container */}
      <div className="greenBackground">

          {/* Corner triangle */}
          <div className="absolute right-0 top-0">
            <div
            className="greenBackgroundTriangle"
            style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)" }}
          ></div>
          </div>
 {/* Circle div overlapping the container */}
          <div className="greenCircleContainer">
            <div
              className="greenCircle"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%)" }}
            ></div>
          </div>

        <div className="relative">
        
          
         

          <div className=" w-[1221px] h-[530px] border-radius-[20px]  ">
            <div className="absolute right-0 top-0">
              <Image
                layout="intrinsic "
                width={408}
                height={530}
                src="/doctor.png"
                alt="Doctor"
              />
            </div>
            <div className="absolute  w-[685px] h-[226px] top-0 left-0 gap-[32px]">
              <div className="w-[505px] h-[104px]">
                <h1 className="text-[poppins] text-[40px] text-[#FFFFFF] leading-[52px]">
                  Here are the key benefits you can enjoy
                </h1>
              </div>
              <div className=" absolute w-[685px] h-[90px] opacity-[75%] bottom-0">
                <p className="text-[poppins] w-[400] text-[20px] letter-[-2%] text-[#FFFFFF] line-[30px] ">
                  Joining Carelyo as a self-employed doctor comes with numerous
                  advantages that can enhance your practice and provide a
                  seamless experience for both you and your patients.
                </p>
              </div>
            </div>

            <div className="absolute w-[612px] h-[264px] bottom-0 left-0 gap-[32px]">
              <div className="absolute w-[290px] h-[264px] gap-[32px] left-0 top-0">
                <div className=" w-[290px] h-[116px] gap-[12px] top-0 left-0 ">
                  <div className=" absolute w-[233px] h-[116px] right-0 top-0 gap-[12px]">
                    <div className=" w-[233px] h-[52px]">
                      <h1 className=" text-[Poppins] w-500 line-[26px] text-left text-[20px] space-x-2  text-[#FFFFFF]">
                        Empowered Patient Outreach
                      </h1>
                    </div>
                    <div className=" absolute w-[233px] h-[52px] opacity-[75%] bottom-0 right-0 ">
                      <p className=" w-400 left-0 text-[16px] space-x-2 text-[#FFFFFF]">
                        Reaching More Patients Than Ever Before
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" absolute w-[290px] h-[116px] gap-[12px] bottom-0  left-0 ">
                  {/* first checkmark */}
                  <div className="h-[45px] w-[45px] rounded-lg p-3 bg-[#FFFFFF] bg-opacity-[10%] gap-10  ">
                    <div className="flex justify-center items-center w-[24px] h-[24px]">
                      <div className="relative w-[24px] h-[24px] border-2 rounded-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                          <div className="flex justify-center items-center w-[10px] h-[6px]">
                            <div className="text-[#FFFFFF] text-2xl">
                              <svg
                                className="w-[20px] h-[20px]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" absolute w-[233px] h-[116px] right-0 top-0 gap-[12px] ">
                    <div className=" w-[233px] h-[52px]">
                      <h1 className=" text-[Poppins] w-500 line-[26px] text-left text-[20px] space-x-2  text-[#FFFFFF]">
                        Efficient Documentation Management
                      </h1>
                    </div>
                    <div className=" absolute w-[233px] h-[52px] opacity-[75%] bottom-0 right-0 ">
                      <p className=" w-400 left-0 text-[16px] space-x-2 text-[#FFFFFF]">
                        Streamlined Patient History & Documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second checkmark */}
              <div className="h-[45px] w-[45px] rounded-lg p-3 bg-[#FFFFFF] bg-opacity-[10%] gap-10  ">
                <div className="flex justify-center items-center w-[24px] h-[24px]">
                  <div className="relative w-[24px] h-[24px] border-2 rounded-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                      <div className="flex justify-center items-center w-[10px] h-[6px]">
                        <div className="text-[#FFFFFF] text-2xl">
                          <svg
                            className="w-[20px] h-[20px]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[290px] h-[264px] gap[32px] right-0 top-0 ">
                <div className=" w-[290px] h-[116px] gap-[12px] top-0 right-0 ">
                  <div className=" absolute w-[233px] h-[116px] right-0 top-0 gap-[12px]">
                    <div className=" w-[233px] h-[52px]">
                      <h1 className=" text-[Poppins] w-500 line-[26px] text-left text-[20px] space-x-2  text-[#FFFFFF]">
                        Fortified Messaging Network
                      </h1>
                    </div>
                    <div className=" absolute w-[233px] h-[52px] opacity-[75%] bottom-0 right-0 ">
                      <p className=" w-400 left-0 text-[16px] space-x-2 text-[#FFFFFF]">
                        Secure Communication Channels
                      </p>
                    </div>
                  </div>

                  {/* third checkmark */}
                  <div className="h-[45px] w-[45px] rounded-lg p-3 bg-[#FFFFFF] bg-opacity-[10%] gap-10  ">
                    <div className="flex justify-center items-center w-[24px] h-[24px]">
                      <div className="relative w-[24px] h-[24px] border-2 rounded-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                          <div className="flex justify-center items-center w-[10px] h-[6px]">
                            <div className="text-[#FFFFFF] text-2xl">
                              <svg
                                className="w-[20px] h-[20px]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" absolute w-[290px] h-[116px] gap-[12px] bottom-0 right-0 ">
                  <div className=" absolute w-[233px] h-[116px] right-0 top-0 gap-[12px] ">
                    <div className=" w-[233px] h-[52px] ">
                      <h1 className=" text-[Poppins] w-500 line-[26px] text-left text-[20px] space-x-2  text-[#FFFFFF]">
                        Efficient Scheduling Solution
                      </h1>
                    </div>
                    <div className=" absolute w-[233px] h-[52px] opacity-[75%] bottom-0 right-0">
                      <p className=" w-400 left-0 text-[16px] space-x-2 text-[#FFFFFF]">
                        Convenient Appointment Management
                      </p>
                    </div>
                  </div>

                  {/* fourth checkmark */}
                  <div className="h-[45px] w-[45px] rounded-lg p-3 bg-[#FFFFFF] bg-opacity-[10%] gap-10  ">
                    <div className="flex justify-center items-center w-[24px] h-[24px]">
                      <div className="relative w-[24px] h-[24px] border-2 rounded-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                          <div className="flex justify-center items-center w-[10px] h-[6px]">
                            <div className="text-[#FFFFFF] text-2xl">
                              <svg
                                className="w-[20px] h-[20px]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
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
