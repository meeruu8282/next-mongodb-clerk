"use client";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";

import a from "./app.png";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" w-full  text-2xl h-[68.69px] mt-1">
        <div className="nav-item   flex justify-center  ">
          <div className="">
            <Link href="/">
              <Image
                src="/Mask group.png"
                alt="Mask Image"
                width={114}
                height={68.69}
              />
            </Link>
          </div>
          <div></div>

          <div className="w-[820px] h-[52px] gap-[52px]  ">
            <div className="absolute flex   w-[350px] h-[52px] gap-[17px]  mt-0 right-[300px] ">
              <div className="flex items-center justify-center h-[52px] w-[125px] border-[1px] rounded-[35px] border-[#45AC60]">
                <div className="mr-4">
                  <Image
                    src="/image 519.png"
                    alt="flagg"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="w-[21px] h-[22px]  flex items-center justify-center ">
                  <p className="text-[16px] font-[Poppins] text-1xl font-semibold mr-2">
                    en
                  </p>
                  <i className="fa fa-chevron-down  text-[10px]"></i>
                </div>
              </div>

              <button className="carelyoButton absolute ">
                <div>
                  <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                    Get Carelyo
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
            <div className="w-[418px] h-[24px] gap-[10px]  flex mt-4 ">
              <Link
                href="/providers/howItWorks"
                className="  w-[105px] h-[22px] text-[16px] "
              >
                howitwork
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex text-1xl w-[70px] h-[22px] text-[16px] "
              >
                Platform <i className="fa fa-chevron-down"></i>
              </button>
              <div className={isOpen ? "dropdown-visible" : "dropdown-hidden"}>
                <ul className="ulPlatform">
                  <li>
                    <Link href="/providers/platforms/clinics " className="">
                      Clinics
                    </Link>
                  </li>
                  <li>
                    <Link href="/providers/platforms/diagCenters">
                      <nav> Diagnostisk Center </nav>
                    </Link>
                  </li>
                  <li>
                    <Link href="/providers/platforms/hospitals">
                      <nav> Hostpital </nav>
                    </Link>
                  </li>
                  <li>
                    <Link href="/providers/platforms/labCenters">
                      <nav>labCententer</nav>
                    </Link>
                  </li>
                  <li>
                    <Link href="/providers/platforms/pharmacies">
                      <nav>Pharmacies</nav>
                    </Link>
                  </li>

                  <li>
                    <Link href="/providers/platforms/seDoctors">
                      <nav> SeDoctors </nav>
                    </Link>
                  </li>
                </ul>
              </div>

              <Link href="/providers/pricing" className="text-black ">
                <nav className="flex  w-[50px] h-[22px] text-[16px]">
                  Pricing
                </nav>
              </Link>
              <Link
                href="/providers/blog"
                className="text-black w-[28px] h-[22px] gap-[5px] text-[16px] "
              >
                Blog
              </Link>
              <Link href="/providers/help" className="text-black gap-[5px  ">
                <nav className="flex text-1xl  ] h-[22px]  text-[16px] ">
                  Help
                </nav>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
