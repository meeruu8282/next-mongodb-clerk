"use client";

import "font-awesome/css/font-awesome.min.css";

import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-item">
      <Link href="/" className="text-black text-2xl">
        Home
      </Link>
      <Link href="/providers/howItWorks" className="nav-item">
        howitwork
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className=" nav-item">
        Platform <i className="fa fa-chevron-down"></i>
      </button>
      <div className={isOpen ? "dropdown-visible" : "dropdown-hidden"}>
        <ul className="ulPlatform  ">
          <li>
            <Link href="/providers/platforms/clinics">Clinics</Link>
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

      <Link href="/providers/platforms/pricing" className="text-black text-2xl">
        <nav> Pricing </nav>
      </Link>
      <Link href="/providers/blog" className="text-black  text-2xl">
        Blog
      </Link>
      <Link href="/providers/help" className="text-black  text-2xl">
        <nav> Help </nav>
      </Link>
      <button className=" getCareButton">Get Care</button>
    </div>
  );
}
