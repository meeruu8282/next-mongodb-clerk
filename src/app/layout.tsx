import Navbar from "./providers/Components/navbar";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
                  <h1>FOR PROVIDERS</h1>
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
        <div className="bg-gray-100 h-[300px] top-[5978px] flex ">
          <div className="flex justify-between items-center  mt-9  w-screen h-[270px] p-[0px] pr-[88px] pl-[88px]  ">
            {/* Lägg till flex här */}
            <div className="  w-[332px] h-[114.09px] ">
              <div className="w-[113px] h-[68.09px]  ">
                <Image
                  src="/Mask group.png"
                  alt="Mask Image"
                  width={113}
                  height={68.09}
                />
              </div>
              <div className="w-[332px] h-[22px]  top-0 ">
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
              <div className=" w-[150px] h-[222px] gap-[18px] font-[Poppins] font-medium text-[16px]  ">
                <nav className="mt-5">Home</nav>
                <nav className="mt-2">About Us</nav>
                <nav className="mt-2"> Platforms</nav>
                <nav className="mt-2"> Partners</nav>
              </div>
            </div>
            <div>
              <div className=" w-[205px] h-[110px] gap-[24px]  text-[16px]">
                <h1 className=" flex justify-center  items-center font-[Poppins] w-[205px] h-[24px]">
                  CONTACT INFORMATION
                </h1>
                <div className="">
                  <h2 className="w-[205px] h-[22px] font-normal font-[Poppins]">
                    info@carelyo.io
                  </h2>
                </div>
                <div>
                  <h2 className="w-[205px] h-[22px]"> +1 (123) 456-7890</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[136px] h-[194px] gap-[65px] ">
                <div>
                  <h1 className="font-[Poppins]">SOCIAL MEDIA</h1>
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
