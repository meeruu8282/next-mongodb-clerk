"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePlatformHover = () => {
    console.log('clicked')
    setIsPlatformOpen(!isPlatformOpen);
  };

  return (
    <>
      <nav className="w-full h-[100px] flex items-center px-5 justify-between relative bg-white shadow">
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
        <button className="hamburger-menu" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>
      <div className={`w-screen h-full bg-white z-50 absolute fullscreen-menu ${isMenuOpen ? 'flex' : 'hidden'}`} >
        <div className="nav-links flex flex-col items-center justify-center h-full w-full text-4xl gap-9 pb-20">
          <Link href="/providers/howItWorks" className="text-black hover:text-[#45AC60]">
            <span>How it works</span>
          </Link>
          <div>
            <div  className="text-black text-center hover:text-[#45AC60]" onClick={handlePlatformHover}>
                Platform
            </div>
            <ul className={`${isPlatformOpen ? 'block' : 'hidden'} text-center border-[#45ac60] border-b-2 p-2 flex flex-col gap-5`}>
              <li ><Link className='text-center hover:text-[#45AC60]' href="/providers/platforms/diagCenters">Diagnostisk Center</Link></li>
              <li><Link className='hover:text-[#45AC60]' href="/providers/platforms/hospitals">Hostpital</Link></li>
              <li><Link className='hover:text-[#45AC60]' href="/providers/platforms/labCenters">LabCenter</Link></li>
              <li><Link className='hover:text-[#45AC60]'href="/providers/platforms/pharmacies">Pharmacies</Link></li>
              <li><Link className="hover:text-[#45AC60]" href="/providers/platforms/seDoctors">SeDoctors</Link></li>
            </ul>
          </div>
          <Link href="/providers/pricing" className="text-black hover:text-[#45AC60]">
            <span>Pricing</span>
          </Link>
          <Link href="/providers/blog" className="text-black hover:text-[#45AC60]">
            <span>Blog</span>
          </Link>
          <Link href="/providers/help" className="text-black hover:text-[#45AC60]">
            <span>Help</span>
          </Link>
          <div className="flex w-[125px] h-[52px] border-[1px] border-[#45AC60] rounded-[35px] justify-center items-center gap-2">
          <div className="w-[28px] h-[28px] flex justify-center items-center ">
            <Image src="/image 519.png" alt="flagg" width={28} height={28} />
          </div>

          <div className=" items-center bg-white ">
            <div className="w-[21px] h-[22px] text-[16px] font-[Poppins] text-1xl  font-semibold">
              en
            </div>
            <i className="fa fa-chevron-down text-[10px]"></i>
          </div>
        </div>
<div className=''>
        <button className="carelyoButton lg:block">
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default NavbarMobile;
