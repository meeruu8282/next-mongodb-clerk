"use client";

import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import DropdownMenu from "../dropDownMenu";
import { usePathname } from 'next/navigation';
type Props = {
  message: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close the menu when the window is resized
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[68.69px] flex flex-col md:flex-row justify-between items-center px-[120px]">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/Mask group.png"
            alt="Mask Image"
            width={114}
            height={68.69}
          />
        </Link>
      </div>

      {/* Hamburger menu */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {/* Menu items */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row gap-6 justify-center`}
      >
        <div className="flex gap-3">
          <div className="flex w-[418px] h-[24px] justify-between text-[Poppins] font-normal z-[1000px]">
            <Link href="/providers/howItWorks" className={`w-[105px] h-[22px] text-base ${currentPath === "/providers/howItWorks" ? "font-semibold" : "font-normal"}`}>
              How it work
            </Link>
            <DropdownMenu />
            <Link href="/providers/pricing" className={`text-black ${currentPath === "/providers/pricing" ? "font-semibold" : "font-normal"}`}>
              <nav className="flex w-[50px] h-[22px] text-base">Pricing</nav>
            </Link>
            <Link href="/providers/blog" className={`text-black w-[28px] h-[22px] gap-[5px] text-base ${currentPath === "/providers/blog" ? "font-semibold" : "font-normal"}`}>
              Blog
            </Link>
            <Link href="/providers/help" className={`text-black gap-[5px] ${currentPath === "/providers/help" ? "font-semibold" : "font-normal"}`}>
              <nav className="flex text-1xl h-[22px] text-base">Help</nav>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex w-[125px] h-[52px] border-[1px] border-sage rounded-[35px] justify-center items-center gap-3">
          <div className="w-[28px] h-[28px] flex justify-center items-center ">
            <Image src="/image 519.png" alt="flagg" width={28} height={28} />
          </div>

          <div className=" items-center">
            <div className="w-[21px] h-[22px] text-[16px] font-[Poppins] text-1xl  font-semibold">
              en
            </div>
            <i className="fa fa-chevron-down text-[10px]"></i>
          </div>
        </div>
        {/*
        <button className="carelyoButton hidden lg:block">
          <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
            Get Carelyo
            <div className="ml-3">
              <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-white bg-opacity-[25%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </button> */}

        <Link href="/providers/pricing">
          <div className="carelyoButton hidden lg:block">
            <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full h-full">
              Get Carelyo
              <div className="ml-3">
                <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-white bg-opacity-[25%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
