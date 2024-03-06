'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPlatformOpen, setIsPlatformOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsPlatformOpen(false)
  }

  const handlePlatformHover = () => {
    console.log('clicked')
    setIsPlatformOpen(!isPlatformOpen)
  }

  return (
    <>
      <nav className="w-full h-[100px] flex items-center px-5 justify-between relative bg-white shadow">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/Mask group.png" alt="Mask Image" width={114} height={68.69} />
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
      <div
        className={`w-screen h-full bg-white z-50 absolute fullscreen-menu ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <div className="nav-links flex flex-col items-center justify-center h-full w-full text-4xl gap-9 pb-20">
          <Link
            onClick={closeMenu}
            href="/providers/howItWorks"

            className="text-black hover:text-sage relative group border-b-2 border-sage"
          >
            <span>How it works</span>
          </Link>
          <div className="relative group">
            <div
              className="text-black text-center hover:text-sage border-b-2 border-sage"
              onClick={handlePlatformHover}
            >
              Platform
            </div>
            <div className="absolute top-1/2 right-[-16%] transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                className={`w-5 h-5 text-sage ${isPlatformOpen ? 'hidden' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>

            </div>
            <ul
              className={`${
                isPlatformOpen ? 'flex' : 'hidden'
              } text-center border-sage border-b-2 p-2 flex-col gap-5`}
            >
              <li>
                <Link
                  onClick={closeMenu}
                  className="hover:text-sage"
                  href="/providers/platforms/clinics"
                >
                  Clinics
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="text-center hover:text-sage"
                  href="/providers/platforms/diagCenters"
                >
                  Diagnostisk Center
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="hover:text-sage"
                  href="/providers/platforms/hospitals"
                >
                  Hostpital
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="hover:text-sage"
                  href="/providers/platforms/labCenters"
                >
                  LabCenter
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="hover:text-sage"
                  href="/providers/platforms/pharmacies"
                >
                  Pharmacies
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="hover:text-sage"
                  href="/providers/platforms/seDoctors"
                >
                  SeDoctors
                </Link>
              </li>
            </ul>
          </div>


          <Link
            onClick={closeMenu}
            href="/providers/pricing"
            className="text-black hover:text-sage relative group border-b-2 border-sage"

          >
            <span>Pricing</span>
          </Link>
          <Link
            onClick={closeMenu}
            href="/providers/blog"
            className="text-black hover:text-sage relative group border-b-2 border-sage"
          >
            <span>Blog</span>
          </Link>
          <Link
            onClick={closeMenu}
            href="/providers/help"
            className="text-black hover:text-sage relative group border-b-2 border-sage "
          >
            <span>Help</span>
          </Link>
          <div className="flex w-[125px] h-[52px] border-[1px] border-sage rounded-[35px] justify-center items-center gap-2">
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


        <div className="">
          <Link href="/providers/pricing">
            <div className="carelyoButton lg:block" onClick={closeMenu}>
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
      </div>
    </>
  )
}

export default NavbarMobile
