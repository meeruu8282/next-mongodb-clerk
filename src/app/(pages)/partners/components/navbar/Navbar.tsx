'use client'

import Image from 'next/image'
import 'font-awesome/css/font-awesome.min.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'

type Props = {
  message: string
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    // Close the menu when the window is resized
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-full h-[68.69px] flex flex-col md:flex-row justify-between items-center px-[120px]">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/Mask group.png" alt="Mask Image" width={114} height={68.69} />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>

      {/* Menu items */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row gap-6 justify-center`}
      >
        <div className="flex gap-3">
          <div className="flex w-[418px] h-[24px] justify-between text-[Poppins] font-normal z-[1000px]">
            <Link href="/partners/howitworks" className="w-[105px] h-[22px] text-base">
              How it works
            </Link>

            <Link href="/partners/advantage" className="text-black">
              <nav className="flex w-[50px] h-[22px] text-base">Advantage</nav>
            </Link>

            <Link href="/partners/blog" className="text-black gap-[5px]">
              <nav className="flex text-1xl h-[22px] text-base">Blog</nav>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex w-[125px] h-[52px] border-[1px] border-sage rounded-[35px] justify-center items-center gap-3">
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

        <Link href="/patients/pricing">
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
