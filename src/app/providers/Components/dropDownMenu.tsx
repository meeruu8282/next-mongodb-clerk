import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Props = {
  message: string;
};

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div
      ref={dropdownRef}
      className=" relative z-[1000]"
      id="dropdownPlatform "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={() => setIsOpen(!isOpen)}>Platform</button>
      <div className={isOpen ? "dropdown-list block" : "dropdown-list hidden"}>
        <ul className="mt-2 border rounded shadow-lg bg-white ">
          <li className="border-b">
            <Link href="/providers/platforms/clinics">
            
              <div  className="block px-4 py-2 hover:text-[#5EEF84]  cursor-pointer"       >   Clinics </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/diagCenters">
              <div className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                Diagnostisk Center
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/hospitals">
              <div className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                Hostpital
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/labCenters">
              <div className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                LabCenter
              </div>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/pharmacies">
              <div className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                Pharmacies
              </div>
            </Link>
          </li>
          <li>
            <Link href="/providers/platforms/seDoctors">
              <div className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
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
