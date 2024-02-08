import Navbar from "./(pages)/providers/Components/NavBar/navbar";
import Footer from "./(pages)/providers/Components/Footer/Footer";
import FooterMobile from "./(pages)/providers/Components/Footer/FooterMobile";

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
import SuperCharge from "./(pages)/providers/Components/superCharge";
import NavbarMobile from "./(pages)/providers/Components/NavBar/NavbarMobile";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carelyo",
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
        <div className=" h-[157.69px] gap-[24px] z-auto ">
          <div> </div>
          <div className="h-[65px] w-screen hidden bg-[rgba(22,28,40,1)] md:flex items-end ">
            <div className="topNavbarInner justify-end ml-28">
              <div className="  w-[391px] h-[17px]">
                <div className="  flex space-x-3 h-[17px] text-[13px] font-[Inter] leading-5 ">
                  <h1>FOR PATIENTS</h1>
                  <div> </div>
                  <div>
                    <div>
                      <h1>
                        FOR PROVIDERS
                        <div className="bg-white w-[100px] h-[6px] rounded-tr-[25px] rounded-tl-[24px]"></div>
                      </h1>
                    </div>
                  </div>

                  <h1>FOR PARTNERS</h1>
                  <h1>FOR SHOP</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="  max-h-32px top-25px left-144px ">
          <div className="hidden md:block">
   <Navbar />
</div>
<div className="block md:hidden">
  <NavbarMobile />
</div>
          </div>
          <div className="rounded-[30px] ">
            <h1 className="text-[64px]  leading-[83px];"></h1>
          </div>
        </div>
<div className="min-h-screen">
        {children}
        </div>
        <div className="hidden md:block">
            <Footer/>
        </div>
        <div className="block md:hidden">
            <FooterMobile/>
        </div>
      </body>
    </html>
  )
}
