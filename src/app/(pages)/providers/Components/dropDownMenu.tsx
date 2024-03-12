import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

type Props = {
  message: string;
};

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  let closeTimeout = useRef<any>(null); // För att hålla referensen till setTimeout
  const currentPath = usePathname();

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

  return (

    <div
      ref={dropdownRef}
      className=" relative z-[1000]"
      id="dropdownPlatform "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >


      <button className={` ${currentPath.startsWith("/providers/platforms/") ? "font-semibold" : "font-normal"} w-[85px] flex justify-between items-center`} onClick={() => setIsOpen(!isOpen)}>Platform
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
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${currentPath === "/providers/platforms/clinics" ? "font-semibold" : "font-normal"}`}>Clinics </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/diagCenters">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${currentPath === "/providers/platforms/diagCenters" ? "font-semibold" : "font-normal"}`}>
                Diagnostic Center
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/hospitals">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${currentPath === "/providers/platforms/hospitals" ? "font-semibold" : "font-normal"}`}>
                Hospitals
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/labCenters">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage ${currentPath === "/providers/platforms/labCenters" ? "font-semibold" : "font-normal"}`}>
                LabCenter
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/pharmacies">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage ${currentPath === "/providers/platforms/pharmacies" ? "font-semibold" : "font-normal"}`}>
                Pharmacies
              </div>
            </Link>
          </li>
          <li>
            <Link href="/providers/platforms/seDoctors">
              <div className={`block px-4 py-2 cursor-pointer hover:text-sage  ${currentPath === "/providers/platforms/seDoctors" ? "font-semibold" : "font-normal"}`}>
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
