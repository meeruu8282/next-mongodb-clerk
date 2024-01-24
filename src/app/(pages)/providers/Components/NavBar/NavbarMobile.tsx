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
    setIsPlatformOpen(!isPlatformOpen);
  };

  return (
    <>
      <nav className="w-full h-[100px] flex items-center px-5 justify-between relative bg-white">
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
      <div className={`w-screen h-full bg-white z-50 absolute fullscreen-menu ${isMenuOpen ? 'flex' : 'hidden'}`} onMouseLeave={closeMenu}>
        <div className="nav-links flex flex-col items-center justify-center h-full w-full text-4xl gap-9 pb-20">
          <Link href="/providers/howItWorks" className="text-black hover:text-[#45AC60]">
            <span>How it works</span>
          </Link>
          <div>
            <div  className="text-black text-center hover:text-[#45AC60]" onClick={handlePlatformHover}>
                Platform
            </div>
            <ul className={` ${isPlatformOpen ? 'block' : 'hidden'} text-center flex flex-col gap-5`}>
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
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
