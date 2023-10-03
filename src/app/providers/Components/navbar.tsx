"use client";

import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DropdownMenu from "./dropDownMenu";

type Props = {
  message: string;
};

export default function Navbar() {
  return (
    <div>
      <div className="w-full  h-[68.69px] flex justify-between items-center px-[120px] ">
        <Link href="/">
          <Image
            src="/Mask group.png"
            alt="Mask Image"
            width={114}
            height={68.69}
          />
        </Link>

        <div className="w-[820px] h-[52px] flex  items-center gap-10 ">
          <div className="flex gap-3  ">
            <div className="flex w-[418px] h-[24px] justify-between text-[Poppins] font-normal">
              <Link
                href="/providers/howItWorks"
                className="w-[105px] h-[22px] text-[16px]"
              >
                How it work
              </Link>

              <DropdownMenu />

              <Link href="/providers/pricing" className="text-black">
                <nav className="flex w-[50px] h-[22px] text-[16px]">
                  Pricing
                </nav>
              </Link>

              <Link
                href="/providers/blog"
                className="text-black w-[28px] h-[22px] gap-[5px] text-[16px]"
              >
                Blog
              </Link>

              <Link href="/providers/help" className="text-black gap-[5px}">
                <nav className="flex text-1xl h-[22px] text-[16px]">Help</nav>
              </Link>
            </div>
          </div>

          <div className="flex  gap-6  justify-center ">
            <div className="flex  w-[125px] h-[52px] border-[1px] border-[#45AC60] rounded-[35px] justify-center items-center  gap-3 ">
              <div className=" w-[28px] h-[28px] flex justify-center items-center ">
                <Image
                  src="/image 519.png"
                  alt="flagg"
                  width={28}
                  height={28}
                />
              </div>

              <div className="flex items-center bg-white ">
                <div className="w-[21px] h-[22px] text-[16px] font-[Poppins] text-1xl  font-semibold">
                  en
                </div>
                <i className="fa fa-chevron-down text-[10px]"></i>
              </div>
            </div>

            <button className="carelyoButton">
              <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                Get Carelyo
                <div className="ml-3">
                  <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
