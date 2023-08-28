import Navbar from "./providers/Components/navbar";
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
        <div className="mainContainerNavbar">
          <div>
            <div className="topNavbar-black">
              <div className="topNavbarInner">
                <h1 className="upperNavbar-text">FOR PATIENTS</h1>

                <h1 className="upperNavbar-text">FOR PROVIDERS</h1>
                <h1 className="upperNavbar-text">FOR PARTNERS</h1>
                <h1 className="upperNavbar-text">FOR SHOP</h1>
              </div>
            </div>
            <div className="mainCarelyoNavbar">
              <Navbar />
            </div>
            <div className="healthCarePlatform">
              <h1 className="healthCarePlatform-Inner">
                Healthcare Platform for Providers!
              </h1>
              <h2 hCPFM-ISText>
                Are you an independent doctor, family physician, or managing a
                small to medium-sized clinic or hospital? We at Carelyo are here
                for you!
              </h2>
            </div>
          </div>
        </div>

        {children}

        <div className="bg-gray-100 flex justify-center h-[422px] top-[5978px] justify-between">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* About Section */}
              <div>
                <h2 className="text-xl font-bold mb-3">About Us</h2>
                <p>CREYELO</p>
              </div>

              {/* Links Section */}
              <div>
                <h2 className="text-xl font-bold mb-3">Quick Links</h2>
                <ul>
                  <li className="mb-2">
                    <a href="/" className="hover:text-indigo-400">
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/about" className="hover:text-indigo-400">
                      About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/services" className="hover:text-indigo-400">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-indigo-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Copyright Section */}
              <div className="md:text-right text-center">
                <p>© 2023 Carelyo. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
