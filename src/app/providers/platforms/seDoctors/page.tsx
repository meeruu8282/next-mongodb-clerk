import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sedoctors() {
  return (
    <div className=" h-auto ">
      <div className=" flex justify-end ">
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
          <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center  md:text-2xl lg:text-3xl whitespace-normal ">
                Joining carelyo as a{" "}
                <span className="text-greenText whitespace-normal font-bold">
                  Self-Employed <br /> Doctors
                </span>{" "}
                comes with numerous advantages
              </h1>
            </div>
            <div className="w-[858px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                With our innovative features and comprehensive support, we aim
                to empower your practice and enhance patient care.
              </p>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              className=""
              layout="fixed "
              width={970}
              height={596}
              src="/heartdoctor.png"
              alt="heartDoctor"
            />
          </div>
          <div className=" absolute w-[289px] h-[396px] top-[190px] left-0 mt-[200px] ">
            <div className=" flex flex-col w-[289px] h-[276px] gap-[32px] ">
              <div className=" flex items-center w-[289px] h-[45px] gap-[16px] ">
                <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-[#45AC60] bg-opacity-[10%]  ">
                  <div className="flex justify-center items-center w-[30px] h-[30px]">
                    {/* icon */}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className=" text-[#45AC60] h-[21px] w-[21px]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className=" text-[Poppins] text-[16px] w-400 left-0 w-[228px] h-[22px] justify-center justify-items-center">
                  Sign-Up and Profile Creation
                </div>
              </div>

              <div className="flex items-center w-[289px] h-[45px] gap-[16px] ">
                <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-[#45AC60] bg-opacity-[10%]  ">
                  <div className="flex justify-center items-center w-[21px] h-[21px]">
                    {/* icon */}
                    <svg
                      className=" text-[#45AC60] h-[21px] w-[21px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" text-[Poppins] text-[16px] w-400 left-0 w-[228px] h-[22px] justify-center justify-items-center">
                  Verification and Validation
                </div>
              </div>

              <div className="flex items-center w-[289px] h-[45px] gap-[16px] ">
                <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-[#45AC60] bg-opacity-[10%]  ">
                  <div className="flex justify-center items-center w-[21px] h-[21px]">
                    {/* icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-[#45AC60] h-[21px] w-[21px]"
                    >
                      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                      <path
                        fill-rule="evenodd"
                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" text-[Poppins] text-[16px] w-400 left-0 w-[228px] h-[22px] justify-center justify-items-center">
                  Schedule Management
                </div>
              </div>

              <div className="flex items-center w-[289px] h-[45px] gap-[16px] ">
                <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-[#45AC60] bg-opacity-[10%]  ">
                  <div className="flex justify-center items-center w-[21px] h-[21px]">
                    {/* icon */}
                    <svg
                      className=" text-[#45AC60] h-[21px] w-[21px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-[Poppins] text-[16px] w-400 left-0 w-[228px] h-[22px] justify-center justify-items-center">
                  Starts Accepting Patients
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="carelyoButton absolute w-[230px] h-[72px] p-[6px] gap-[10px] font-semibold bottom-0">
              <div>
                <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                  Join Carelyo Now
                  <div className="ml-3">
                    <div className="h-[28px] w-[28px]  rounded-[100px] flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
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
                layout="fixed"
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
                                  xmlns="http://www.w3.org/2000/svg"
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
                              xmlns="http://www.w3.org/2000/svg"
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
                                  xmlns="http://www.w3.org/2000/svg"
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
                                  xmlns="http://www.w3.org/2000/svg"
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

      <div className="relative flex flex-col justify-center items-center  w-[1192px] h-[620px] mt-[100px] left-[125px] gap-[48px]">
        <div className=" flex justify-center items-center w-[669px] h-[52px]">
          <h2 className=" text-[Poppins] text-[40px] w-600 line-height-[52px] tracking-[-2%] text-center font-bold ">
            <span className="text-greenText whitespace-normal">
              10k+ Doctors
            </span>{" "}
            Who Have Joined
          </h2>
        </div>
        <div className="  w-[1192px] h-[520px] gap-[24px]">
          <div className=" flex flex-row w-[1192px] h-[424px] justify-between">
            <div className=" flex justify-center items-center w-[379px] h-[424px] rounded-[25px]">
              <div className=" w-[350px] h-[371] gap-[24px] top-[17px] left-[14px]">
                <div className="w-[350px] h-[233px] rounded-[25px]">
                  <Image
                    className=""
                    layout="fixed "
                    width={350}
                    height={233}
                    src="/DrSarah.png"
                    alt="DrSarah"
                  />
                </div>
                <div className="w-[350px] h-[114px] gap-[24px]">
                  <div className="w-[346px] h-[114px] gap-[16px]">
                    <div className="w-[329.62px] h-[54px] gap-[3px]">
                      <h1 className="text-[Poppins] text-[24px] leading-[29px] tracking-[0em] left-0">
                        Dr. Sarah Aulia
                      </h1>
                      <p className="w-[285px] h-[22px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-[#9C9C9C]">
                        Primary Care Physician
                      </p>
                    </div>
                    <p className="w-[329px] h-[44px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-[#A6A6A6] ">
                    Highly experienced primary care physician with over 20 years of practice.                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center  w-[379px] h-[424px] rounded-[25px]">
              <div className="  w-[350px] h-[371] gap-[24px] top-[17px] left-[14px]">
                <div className="w-[350px] h-[233px] rounded-[25px]">
                  <Image
                    className=""
                    layout="fixed "
                    width={970}
                    height={596}
                    src="/DrJohnSmith.png"
                    alt="DrJohnSmith"
                  />
                </div>
                <div className="w-[350px] h-[114px] gap-[24px]">
                  <div className="w-[346px] h-[114px] gap-[16px]">
                    <div className="w-[329.62px] h-[54px] gap-[3px]">
                      <h1 className="text-[Poppins] text-[24px] leading-[29px] tracking-[0em] left-0">
                        Dr. John Smith
                      </h1>
                      <p className="w-[285px] h-[22px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-[#9C9C9C]">
                      Cardiologist

                      </p>
                    </div>
                    <p className="w-[329px] h-[44px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-[#A6A6A6] ">
                    Renowned cardiologist specializing in the diagnosis & treatment of heart conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex justify-center items-center w-[379px] h-[424px] rounded-[25px]">
              <div className=" w-[350px] h-[371] gap-[24px] top-[17px] left-[14px]">
                <div className="w-[350px] h-[233px] rounded-[25px]">
                  <Image
                    className=""
                    layout="fixed "
                    width={970}
                    height={596}
                    src="/DrThamson.png"
                    alt="DrThamson"
                  />
                </div>
                <div className="w-[350px] h-[114px] gap-[24px]">
                  <div className=" w-[346px] h-[114px] gap-[16px] ">
                    <div className="w-[329.62px] h-[54px] gap-[3px]">
                      <h1 className="text-[Poppins] text-[24px] leading-[29px] tracking-[0em] left-0">
                        Dr. Thamson
                      </h1>
                      <p className="w-[285px] h-[22px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-[#9C9C9C]">
                      Primary Care Physician
                      </p>
                    </div>
                    <p className=" w-[329px] h-[44px] text-[Poppins] bottom-0 text-[16px] leading-[22px] tracking-[0em]  text-[#A6A6A6] ">
                    Medical center with cutting-edge technology and a team professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carelyoButton absolute w-[184px] h-[72px] p-[22px] gap-[12px] rounded-[35px] font-semibold right-0  bottom-0">
            <div>
              <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                Get Carelyo
                <div className="ml-3">
                  <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
