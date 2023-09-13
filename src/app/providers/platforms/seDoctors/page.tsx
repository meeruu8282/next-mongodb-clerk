import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarelyoButton from "../../Components/getStartedButton";
import EllipseBackground from "../../Components/ellipseBackground";
import SuperCharge from "../../Components/superCharge";

export default function Sedoctors() {
  return (
    <div className=" h-auto w-auto flex flex-col">
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
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0.75C4.67 0.75 0.75 4.67 0.75 9.5C0.75 14.33 4.67 18.25 9.5 18.25C14.33 18.25 18.25 14.33 18.25 9.5C18.25 4.67 14.33 0.75 9.5 0.75ZM9.5 3.375C10.9525 3.375 12.125 4.5475 12.125 6C12.125 7.4525 10.9525 8.625 9.5 8.625C8.0475 8.625 6.875 7.4525 6.875 6C6.875 4.5475 8.0475 3.375 9.5 3.375ZM9.5 15.8C7.3125 15.8 5.37875 14.68 4.25 12.9825C4.27625 11.2413 7.75 10.2875 9.5 10.2875C11.2413 10.2875 14.7238 11.2413 14.75 12.9825C13.6213 14.68 11.6875 15.8 9.5 15.8Z"
                        fill="#45AC60"
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
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5625 10.25H10.8712L10.6262 10.0137C11.4837 9.01625 12 7.72125 12 6.3125C12 3.17125 9.45375 0.625 6.3125 0.625C3.17125 0.625 0.625 3.17125 0.625 6.3125C0.625 9.45375 3.17125 12 6.3125 12C7.72125 12 9.01625 11.4837 10.0137 10.6262L10.25 10.8712V11.5625L14.625 15.9287L15.9287 14.625L11.5625 10.25ZM6.3125 10.25C4.13375 10.25 2.375 8.49125 2.375 6.3125C2.375 4.13375 4.13375 2.375 6.3125 2.375C8.49125 2.375 10.25 4.13375 10.25 6.3125C10.25 8.49125 8.49125 10.25 6.3125 10.25Z"
                        fill="#45AC60"
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
                      width="17"
                      height="19"
                      viewBox="0 0 17 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.625 2.5H13.75V1.625C13.75 1.14375 13.3562 0.75 12.875 0.75C12.3938 0.75 12 1.14375 12 1.625V2.5H5V1.625C5 1.14375 4.60625 0.75 4.125 0.75C3.64375 0.75 3.25 1.14375 3.25 1.625V2.5H2.375C1.40375 2.5 0.63375 3.2875 0.63375 4.25L0.625 16.5C0.625 17.4625 1.40375 18.25 2.375 18.25H14.625C15.5875 18.25 16.375 17.4625 16.375 16.5V4.25C16.375 3.2875 15.5875 2.5 14.625 2.5ZM14.625 15.625C14.625 16.1062 14.2312 16.5 13.75 16.5H3.25C2.76875 16.5 2.375 16.1062 2.375 15.625V6.875H14.625V15.625ZM4.125 8.625H5.875V10.375H4.125V8.625ZM7.625 8.625H9.375V10.375H7.625V8.625ZM11.125 8.625H12.875V10.375H11.125V8.625Z"
                        fill="#45AC60"
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
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 2.5H16.5V13H3.52375L2.5 14.0238V2.5ZM2.5 0.75C1.5375 0.75 0.75875 1.5375 0.75875 2.5L0.75 18.25L4.25 14.75H16.5C17.4625 14.75 18.25 13.9625 18.25 13V2.5C18.25 1.5375 17.4625 0.75 16.5 0.75H2.5ZM4.25 9.5H11.25V11.25H4.25V9.5ZM4.25 6.875H14.75V8.625H4.25V6.875ZM4.25 4.25H14.75V6H4.25V4.25Z"
                        fill="#45AC60"
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
                    width={700}
                    height={466}
                    src="/DrSarah.jpg"
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
                    width={351}
                    height={233}
                    src="/DrJohnSmith.jpg"
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
                    width={350}
                    height={233}
                    src="/DrThamson.jpg"
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
      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  );
}
