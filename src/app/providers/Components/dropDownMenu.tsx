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

  return (
    <div ref={dropdownRef} className="z-[1000]" id="dropdownPlatform "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}>
      <button onClick={() => setIsOpen(!isOpen)}>Platform</button>

      <div className={isOpen ? "block " : "hidden"}>
        <ul className="mt-2 border rounded shadow-lg bg-white ">
          <li className="border-b">
            <Link href="/providers/platforms/clinics">
              <p className="block px-4 py-2 hover:text-[#5EEF84]  cursor-pointer">
                Clinics
              </p>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/diagCenters">
              <p className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                Diagnostisk Center
              </p>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/hospitals">
              <p className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                Hostpital
              </p>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/labCenters">
              <p className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                LabCenter
              </p>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/providers/platforms/pharmacies">
              <p className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                Pharmacies
              </p>
            </Link>
          </li>
          <li>
            <Link href="/providers/platforms/seDoctors">
              <p className="block px-4 py-2 hover:text-[#45AC60]  cursor-pointer">
                SeDoctors
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
