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
      <div className="nav-item ">
        <div>
          <Link href="/">
            <Image
              src="/Mask group.png"
              alt="Mask Image"
              width={114}
              height={68.69}
            />
          </Link>
        </div>

        <div className="w-[820px] h-[52px] gap-[52px] bg-blue-200 ">
          <div className="w-[418px] h-[24px] gap-[24px] bg-yellow-300 flex text-1xl">
            <Link
              href="/providers/howItWorks"
              className="flex text-1xl w-[105px] h-[22px] bg-purple-400 text-[16px]"
            >
              howitwork
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex text-1xl w-[105px] h-[22px] text-[16px] bg-purple-400"
            >
              Platform <i className="fa fa-chevron-down"></i>
            </button>
            <div className={isOpen ? "dropdown-visible" : "dropdown-hidden"}>
              <ul className="ulPlatform">
                <li>
                  <Link href="/providers/platforms/clinics  " className="">
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

            <Link href="/providers/pricing" className="text-black text-2xl">
              <nav className="w-[105px] h-[22px] text-[16px] bg-purple-400">
                Pricing
              </nav>
            </Link>
            <Link
              href="/providers/blog"
              className="text-black w-[105px] h-[22px] text-2xl text-[16px]  bg-purple-400"
            >
              Blog
            </Link>
            <Link href="/providers/help" className="text-black  text-2xl">
              <nav className="w-[105px] h-[22px]  text-[16px]  bg-purple-400">
                Help
              </nav>
            </Link>

            <div className="flex text-1xl items-center">
              <div className="flex items-center justify-center h-[52px] w-[125px] border-[1px] rounded-[35px]">
                <div className="">
                  <Image
                    src="/image 519.png"
                    alt="flagg"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="w-[21px] h-[22px]  flex items-center justify-center ">
                  <p className="text-[16px] font-[Poppins] text-1xl font-semibold mr-1">
                    en
                  </p>
                  <i className="fa fa-chevron-down  text-[10px]"></i>
                </div>
              </div>

              <button className="carelyoButton ">
                <div>
                  <div className="carelyoButtonText  flex items-center justify-center text-[16px] w-full">
                    Get Carelyo
                    <div>
                      <Image
                        src="/Frame 1000005968.png"
                        alt="arrow "
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
