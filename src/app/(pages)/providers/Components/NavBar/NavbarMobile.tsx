"use client";

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const NavbarMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
   <nav className='md:hidden w-full h-[100px] flex items-center px-5 justify-between'>
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

<div>
    
    <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    className='w-8 h-8'
    >
    <path
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    d='M4 6h16M4 12h16M4 18h16'
    />
    </svg>
</div>
   </nav>
  )
}

export default NavbarMobile
