import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarelyoButton from "../../Components/getStartedButton";
import EllipseBackground from "../../Components/ellipseBackground"

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
                      Highly experienced primary care physician with over 20
                      years of practice.
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
                      Renowned cardiologist specializing in the diagnosis &
                      treatment of heart conditions.
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
                      Medical center with cutting-edge technology and a team
                      professionals.
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

      <div className=" relative   w-[1258px] h-[446px] top-[top: 2652px] left-[91px] ">
        {/* Green background container */}
        <div className="greenBackground w-[1258px] h-[373px] rounded-[40px] ">
          <div className=" absolute top-[35px] left-[271px]">
             <EllipseBackground/>
          </div>
       
          {/* Green background rectangle */}
          <div
            className=" absolute w-[415px] h-[373px] top-0 right-0 rounded-tr-[40px] rounded-br-[40px] bg-[#45AC60] opacity-5"
            style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)" }}
          >
            {/* Corner triangle */}
          </div>
          <div
            className="greenBackgroundTriangle absolute w-[197px] h-[189.5px] top-0 right-0  rounded-tr-[40px]"
            style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 0%, 0% 0%)" }}
          ></div>
          {/* Green background rectangle */}
          <div
            className=" absolute w-[415px] h-[373px] top-0 left-0 rounded-bl-[40px] rounded-tl-[40px] bg-[#45AC60] opacity-5"
            style={{ clipPath: "polygon(0% 50%, 100% 100%, 0% 100%, 0% 0%)" }}
          >
            {/* Corner triangle */}
          </div>
          <div
            className="greenBackgroundTriangle absolute w-[197px] h-[189.5px] bottom-0 left-0 c  rounded-bl-[40px]"
            style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%, 0% 0%)" }}
          ></div>

          {/* Circle div overlapping the container */}
          <div className="greenCircleContainer left-[950px] top-[178px]">
            <div
              className="greenCircle"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%)" }}
            ></div>
          </div>

          <div className=" absolute w-[401px] h-[446px] bottom-0  left-[150px] ">
            <Image
              className="absolute"
              layout="fixed "
              width={401}
              height={212}
              src="/Superchargehead.png"
              alt="Superchargehead"
            />
            <Image
              className="absolute bottom-0"
              layout="fixed "
              width={401}
              height={402}
              src="/Superchargebody.png"
              alt="Superchargebody"
            />
          </div>

          <div className=" absolute bg-[#FFFFFF]  top-20 w-[226px]  h-[99.03px] left-[55px] p-[25px 22px] rounded-[20px] gap-8">
            <div className="relative w-[49px] h-[49px] top-[25px] left-[22px] ">
              <Image
                className="absolute "
                layout=" "
                width={49}
                height={50}
                src="/Ellipse.png"
                alt="Ellipse"
              />
              <div className=" rounded-full absolute w-3 h-3 top-0 right-0 border border-solid bg-[#2B9B5B]"></div>
            </div>

            <div className=" absolute w-[125px] h-[49px] top-[25px] left-[80px] gap-[4px] ">
              <h2 className="  w-[140px] h-[24px] font-poppins text-base font-semibold leading-6 tracking-wide text-left ">
                24/7 Assistance
              </h2>
              <p className="w-[150px] h-21 opacity-50 font-poppins text-base font-normal leading-5 tracking-wide text-left">
                Ready to Assist!
              </p>
            </div>
          </div>

          <div className="absolute flex justify-center items-center w-[68px] h-[68.02px] top-[250px]  left-[450px] p-22 rounded-[20px] gap-8 bg-[#2B9B5B]  ">
            <div className="w-[24px] h-[24px] flex justify-center items-center ">
              <svg
                width="16"
                height="22"
                viewBox="0 0 16 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00011 8.10141C5.01047 7.30898 5.32986 6.55192 5.89024 5.99154C6.45062 5.43117 7.20768 5.11177 8.00011 5.10141C8.79253 5.11177 9.54959 5.43117 10.11 5.99154C10.6704 6.55192 10.9897 7.30898 11.0001 8.10141C10.9897 8.89384 10.6704 9.65089 10.11 10.2113C9.54959 10.7717 8.79253 11.091 8.00011 11.1014C7.20768 11.091 6.45062 10.7717 5.89024 10.2113C5.32986 9.65089 5.01047 8.89384 5.00011 8.10141ZM8.00011 17.1014L12.0001 18.1014V15.0214C10.7938 15.7479 9.40813 16.122 8.00011 16.1014C6.59208 16.122 5.20643 15.7479 4.00011 15.0214V18.1014M8.00011 2.10141C7.21208 2.08703 6.42943 2.23397 5.70027 2.5332C4.97112 2.83243 4.31087 3.27762 3.76011 3.84141C3.19022 4.39278 2.73988 5.05551 2.4371 5.78838C2.13431 6.52125 1.98557 7.30859 2.00011 8.10141C1.98969 8.88921 2.14044 9.67082 2.4431 10.3982C2.74576 11.1257 3.19394 11.7835 3.76011 12.3314C4.3083 12.9006 4.9674 13.3514 5.69668 13.6558C6.42595 13.9603 7.20991 14.1119 8.00011 14.1014C8.79031 14.1119 9.57426 13.9603 10.3035 13.6558C11.0328 13.3514 11.6919 12.9006 12.2401 12.3314C12.8063 11.7835 13.2545 11.1257 13.5571 10.3982C13.8598 9.67082 14.0105 8.88921 14.0001 8.10141C14.0146 7.30859 13.8659 6.52125 13.5631 5.78838C13.2603 5.05551 12.81 4.39278 12.2401 3.84141C11.6893 3.27762 11.0291 2.83243 10.2999 2.5332C9.57079 2.23397 8.78814 2.08703 8.00011 2.10141ZM16.0001 8.10141C15.9788 9.06129 15.7858 10.0096 15.4301 10.9014C15.1097 11.8088 14.6249 12.6495 14.0001 13.3814V21.1014L8.00011 19.1014L2.00011 21.1014V13.3814C0.705796 11.9279 -0.00639275 10.0477 0.000106447 8.10141C-0.0175184 7.05199 0.180143 6.0101 0.580889 5.04006C0.981634 4.07001 1.57696 3.1924 2.33011 2.46141C3.06381 1.70151 3.94547 1.10004 4.92067 0.694138C5.89587 0.288235 6.94391 0.0865081 8.00011 0.101409C9.0563 0.0865081 10.1043 0.288235 11.0795 0.694138C12.0547 1.10004 12.9364 1.70151 13.6701 2.46141C14.4233 3.1924 15.0186 4.07001 15.4193 5.04006C15.8201 6.0101 16.0177 7.05199 16.0001 8.10141Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className=" absolute w-[593px] h-[270px] top-[51px] left-[576px] gap-[36px] ">
            <div className=" relative w-[593px] h-[162px] gap-[12px] ">
              <div className="w-[593px] h-[120px]">
                <h1 className="  text-[poppins] text-[40px] font-semibold leading-15 tracking-normal  text-left text-[#FFFFFF]">
                  Supercharge Productivity with Carelyo!
                </h1>
              </div>
              <div className=" absolute w-[307px] h-[30px] opacity-80 text-[#FFFFFF] bottom-0">
                <p className="">Connect through Carelyo now!</p>
              </div>
            </div>
            <CarelyoButton
              className=" absolute w-[228px] h-[72px] p-[22px 32px] bottom-0 rounded-[25px]  border bg-gradient-to-br from-[rgba(255, 255, 255, 0.4)] via-[rgba(255, 255, 255, 0.2)] to-[rgba(255, 255, 255, 0.1)] bg-gradient-to-t from-[rgba(255, 255, 255, 0.5)] to-[rgba(255, 255, 255, 0.5)] gap-[12px] "
              buttonText="Connect Today"
            />
          </div>
          {/* white line under Productivity */}
          <svg
            className=" absolute top-[108px] left-[850px]"
            width="204"
            height="11"
            viewBox="0 0 204 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8.02206C33.4225 3.49432 117.414 -2.84451 202 8.02206"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
