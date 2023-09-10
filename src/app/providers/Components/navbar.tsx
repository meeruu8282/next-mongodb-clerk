"use client";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";

import a from "./app.png";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full  h-[68.69px] flex justify-between items-center px-[200px]">
      {/* Logotyp */}
      <Link href="/">
        <Image src="/Mask group.png" alt="Mask Image" width={114} height={68.69} />
      </Link>

      {/* Navigation */}
      <div className="flex gap-4">
        <div className="flex w-[418px] h-[24px] justify-between text-[Poppins] font-normal">
          <Link href="/providers/howItWorks" className="w-[105px] h-[22px] text-[16px]">How it work</Link>
          
          <button onClick={() => setIsOpen(!isOpen)} className="flex text-1xl w-[70px] h-[22px] text-[16px]">
            Platform <i className="fa fa-chevron-down"></i>
          </button>

          <div className={isOpen ? "dropdown-visible" : "dropdown-hidden"}>
            <ul className="ulPlatform">
              {/* ... rest of your links */}
            </ul>
          </div>

          <Link href="/providers/pricing" className="text-black">
            <nav className="flex w-[50px] h-[22px] text-[16px]">Pricing</nav>
          </Link>
          
          <Link href="/providers/blog" className="text-black w-[28px] h-[22px] gap-[5px] text-[16px]">Blog</Link>
          
          <Link href="/providers/help" className="text-black gap-[5px">
            <nav className="flex text-1xl h-[22px] text-[16px]">Help</nav>
          </Link>
        </div>
      </div>

      {/* Carelyo knappen och flaggan */}
      <div className="flex items-center gap-4">
        <Image src="/image 519.png" alt="flagg" width={28} height={28} />

        <div className="flex items-center">
          <p className="text-[16px] font-[Poppins] text-1xl font-semibold mr-2">en</p>
          <i className="fa fa-chevron-down text-[10px]"></i>
        </div>
        
        <button className="carelyoButton">
          <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
            Get Carelyo
            <div className="ml-3">
              <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
