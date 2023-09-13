import Navbar from "./providers/Components/navbar";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import SuperCharge from "./providers/Components/superCharge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" h-[157.69px] gap-[24px] ">
          <div> </div>
          <div className="h-[65px] bg-[rgba(22,28,40,1)]  flex items-end ">
            <div className="topNavbarInner justify-end ml-28">
              <div className="  w-[391px] h-[17px]">


                <div className="  flex space-x-3 h-[17px] text-[13px] font-[Inter] leading-5 ">
                  <h1>FOR PATIENTS</h1>
                  <div > </div>
                  <div>

                    <div><h1>FOR PROVIDERS <div className="bg-white w-[100px] h-[6px] rounded-tr-[25px] rounded-tl-[24px]" > </div></h1> </div>
                  </div>

                  <h1>FOR PARTNERS</h1>
                  <h1>FOR SHOP</h1>
                </div>

              </div>
            </div>
          </div>

          <div className="  max-h-32px top-25px left-144px">
            <Navbar />
          </div>
          <div className="w-[624px] h-[480px] top-[288.69140625px] left-[125px] rounded-[30px]">
            <h1 className="text-[64px]  leading-[83px];"></h1>
            <h2 hCPFM-ISText></h2>
          </div>
        </div>

        {children}

       

        <div className="bg-gray-100 h-[300px] top-[5978px] flex flex-cool mt-10">
          <div className="flex justify-between items-center  mt-5 w-screen h-[270px] p-[0px] pr-[88px] pl-[88px]  ">
            {/* Lägg till flex här */}
            <div className="  w-[332px] h-[114.09px] mt-[-175px] ">
              <div className="w-[113px] h-[68.09px]  ">
                <Image
                  src="/Mask group.png"
                  alt="Mask Image"
                  width={113}
                  height={68.09}
                />
              </div>
              <div className="w-[332px] h-[22px]   mt-5 ">
                <p className="font-[Poppins] font-normal text-[16px] ">
                  Delivering Better Healthcare Solutions
                </p>
              </div>
            </div>
            <div className=" w-[170px] h-[270px] ">
              <div className="w-[170px] h-[22px]  ">
                <p className="font-[Poppins] font-semibold text-[16px]  ">
                  NAVIGATION LINKS
                </p>
              </div>
              <div className=" w-[150px] h-[222px] gap-[18px] font-[Poppins] font-medium text-[16px] ">
                <nav className="mt-5">Home</nav>
                <nav className="mt-2">About Us</nav>
                <nav className="mt-2"> Platforms</nav>
                <nav className="mt-2"> Partners</nav>
              </div>
            </div>
            <div className="  flex flex-col justify-start mt-[-160px]">
              <div className=" w-[205px] h-[110px] gap-[24px]  text-[16px]">
                <h1 className="  font-[Poppins] w-[205px] h-[24px] font-semibold">
                  CONTACT INFORMATION
                </h1>
                <div>
                  <h2 className="w-[205px] h-[22px] font-normal ">
                    info@carelyo.io
                  </h2>
                </div>
                <div>
                  <h2 className="w-[205px] h-[22px]"> +1 (123) 456-7890</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[136px] h-[194px] gap-[65px]  mt-[-90px]">
                <div className="">
                  <h1 className="font-[Poppins]  font-semibold">
                    SOCIAL MEDIA
                  </h1>
                </div>
                <div className="w[136px] h-[40px] flex mt-3  space-x-3">
                  <div className="w-[40px] h-[40px]  rounded-lg flex justify-center items-center bg-gradient-to-br from-[#405DE6] via-[#5851DB] via-[#FD1D1D] to-[#FCAF45]    ">
                    <a
                      className="w-[25px] h-[25px]  "
                      href="https://www.instagram.com/your_username/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="1x"
                        color="white"
                      />
                    </a>
                  </div>

                  <div className="w-[37.33px] h-[40px] radius-[50px]  ">
                    <a
                      className="W-[20px] h-[20px]"
                      href="https://twitter.com/your_twitter_username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        color="#1DA1F2"
                      />
                    </a>
                  </div>
                  <div className="w-[40px] h-[40px] rounded-[100px] bg-[#1877F2] flex justify-center  ">
                    <div className="w-[18px] h-[18px]flex items-center mt-1">
                      <a
                        href="https://www.facebook.com/your_facebook_username/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          size="1x"
                          color="white"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[74px] bg-black w-full flex justify-between items-center px-4 font-[Poppins]">
          <div className="flex justify-start">
            <h3 className="text-white text-[Poppins] ">©2023 Carelyo</h3>
          </div>

          <div className="">
            <div className="text-white flex space-x-9  font-[Poppins]">
              <h3 className="flex justify-end">legal</h3>
              <h3 className="flex justify-end">Acceptable Use Policy</h3>
              <h3 className=" flex justify-end">Privacy Policy</h3>
              <h3 className=" flex justify-end">Terms of Service</h3>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
