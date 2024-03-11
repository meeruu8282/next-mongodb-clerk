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
          {/* "Black navbar in mobile screen prototype"

          Still needs to add functionality to the select tag
          */}
          <div className="mx-auto p-5">
            <select
              name="section"
              id="section"
              className=" text-base font-semibold border-4 border-solid border-sage bg-white w-full h-12 rounded-[35px] text-center"
            >
              <option value="patients">FOR PATIENTS</option>
              <option value="providers">FOR PROVIDERS</option>
              <option value="partner">FOR PARTNERS</option>
              <option value="shop">FOR SHOP</option>
            </select>
          </div>
          {/* "End of black navbar in mobile screen prototype" */}

          <Link
            onClick={closeMenu}
            href="/partners/howitworks"
            className="text-black hover:text-sage relative group border-b-2 border-sage"
          >
            <span>How it works</span>
          </Link>

          <Link
            onClick={closeMenu}
            href="/partners/advantage"
            className="text-black hover:text-sage relative group border-b-2 border-sage"
          >
            <span>Advantage</span>
          </Link>

          <Link
            onClick={closeMenu}
            href="/partners/blog"
            className="text-black hover:text-sage relative group border-b-2 border-sage"
          >
            <span>Blog</span>
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
