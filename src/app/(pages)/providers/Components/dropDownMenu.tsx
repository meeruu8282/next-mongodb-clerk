import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Props = {
  message: string;
};

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  let closeTimeout = useRef<any>(null); // För att hålla referensen till setTimeout
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleMouseEnter = () => {
    setIsOpen(true);
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);  // Avbryter tidigare fördröjning om menyn öppnas igen
    }
  }
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 500);  // Fördröj stängningen med 500 ms
  }

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
    setIsOpen(false);
  }

  return (

    <div
      ref={dropdownRef}
      className=" relative z-[1000]"
      id="dropdownPlatform "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >


      <button className={` ${selectedLink? "font-bold" : "hover:text-sage"} w-[85px] flex justify-between items-center`} onClick={() => setIsOpen(!isOpen)}>Platform
        <Image
          className="relative "
          width={12}
          height={9}
          src="/platformdropdownarrow.svg"
          alt=""
        /> </button>



      <div className={isOpen ? "dropdown-list block" : "dropdown-list hidden"}>
        <ul className=" w-[200px] mt-2 border rounded shadow-lg bg-white ">
          <li className="border-b">
            <Link href="/providers/platforms/clinics">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${selectedLink === "clinics" ? "font-bold" : "hover:text-sage"}`} onClick={() => handleLinkClick("clinics")}>Clinics </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/diagCenters">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${selectedLink === "DiagnostiskCenter" ? "font-bold" : "hover:text-sage"}`} onClick={() => handleLinkClick("DiagnostiskCenter")}>
                Diagnostisk Center
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/hospitals">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${selectedLink === "Hostpital" ? "font-bold" : "hover:text-sage"}`} onClick={() => handleLinkClick("Hostpital")}>
                Hostpital
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/labCenters">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${selectedLink === " LabCenter" ? "font-bold" : "hover:text-sage"}`} onClick={() => handleLinkClick(" LabCenter")}>
                LabCenter
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/pharmacies">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${selectedLink === " Pharmacies" ? "font-bold" : "hover:text-sage"}`} onClick={() => handleLinkClick(" Pharmacies")}>
                Pharmacies
              </div>
            </Link>
          </li>
          <li>
            <Link href="/providers/platforms/seDoctors">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${selectedLink === "SeDoctors" ? "font-bold" : "hover:text-sage"}`} onClick={() => handleLinkClick("SeDoctors")}>
                SeDoctors
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
