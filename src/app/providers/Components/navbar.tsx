"use client";

import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-item">
      <Link href="/" className="text-black text-2xl">
        Home
      </Link>
      <Link href="providers/howItWorks" className="nav-item">
        howitwork
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className=" nav-item">
        Platform
      </button>
      <div className={isOpen ? "dropdown-visible" : "dropdown-hidden"}>
        <ul className="ulPlatform  ">
          <li>
            <Link href="/providers/platforms/clinics">
              <nav>Clinics</nav>
            </Link>
          </li>
          <li>
            <Link href="/providers/platforms/diagCenters">
              <nav>Diagnostisk Center</nav>
            </Link>
          </li>
          <li>
            <Link href="/providers/platforms/hospitals">
              <nav>Hostpital</nav>
            </Link>
          </li>
          <li>
            <Link href="/providers/platsforms/diagCenters" />
            DiagCenters
          </li>
          <li>
            <Link href="/providers/platsforms/diagCenters" />
          </li>
        </ul>{" "}
      </div>

      <Link href="/prising" className="text-black text-2xl">
        <nav> Prising </nav>
      </Link>
      <Link href="/blog" className="text-black  text-2xl">
        Blog
      </Link>
      <Link href="/help" className="text-black  text-2xl">
        Help
      </Link>
      <button className=" getCareButton">Get Care</button>
    </div>
  );
}
