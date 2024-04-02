import Image from "next/image";
import React from "react";

interface iconProps {
  className?: string;
  width: string;
  height: string;
}
//<Icon{name} className="{TW classes}" />
//example: <Searchicon width="16" height="16" className="fill-current text-neutral-400" />

export const Searchicon: React.FC<iconProps> = ({ className, width, height }) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5625 10.25H10.8712L10.6262 10.0137C11.4837 9.01625 12 7.72125 12 6.3125C12 3.17125 9.45375 0.625 6.3125 0.625C3.17125 0.625 0.625 3.17125 0.625 6.3125C0.625 9.45375 3.17125 12 6.3125 12C7.72125 12 9.01625 11.4837 10.0137 10.6262L10.25 10.8712V11.5625L14.625 15.9287L15.9287 14.625L11.5625 10.25ZM6.3125 10.25C4.13375 10.25 2.375 8.49125 2.375 6.3125C2.375 4.13375 4.13375 2.375 6.3125 2.375C8.49125 2.375 10.25 4.13375 10.25 6.3125C10.25 8.49125 8.49125 10.25 6.3125 10.25Z" className={className} />
  </svg>
);

export const SearchiconLarge: React.FC<iconProps> = ({ className, width, height }) => (
  <svg width={width} height={height} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.8806 0.5C15.2506 0.5 19.6186 4.868 19.6186 10.238C19.6186 12.7715 18.6463 15.0823 17.0553 16.8165L20.186 19.9407C20.479 20.2337 20.48 20.7077 20.187 21.0007C20.041 21.1487 19.848 21.2217 19.656 21.2217C19.465 21.2217 19.273 21.1487 19.126 21.0027L15.9575 17.843C14.2907 19.1778 12.1773 19.977 9.8806 19.977C4.5106 19.977 0.141602 15.608 0.141602 10.238C0.141602 4.868 4.5106 0.5 9.8806 0.5ZM9.8806 2C5.3376 2 1.6416 5.695 1.6416 10.238C1.6416 14.781 5.3376 18.477 9.8806 18.477C14.4226 18.477 18.1186 14.781 18.1186 10.238C18.1186 5.695 14.4226 2 9.8806 2Z" className={className} />
  </svg>
);

export const LocationIcon: React.FC<iconProps> = ({ className, width, height }) => (
  <svg width={width} height={height} viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0.192383C3.13 0.192383 0 3.32238 0 7.19238C0 11.3624 4.42 17.1124 6.24 19.3024C6.64 19.7824 7.37 19.7824 7.77 19.3024C9.58 17.1124 14 11.3624 14 7.19238C14 3.32238 10.87 0.192383 7 0.192383ZM7 9.69238C5.62 9.69238 4.5 8.57238 4.5 7.19238C4.5 5.81238 5.62 4.69238 7 4.69238C8.38 4.69238 9.5 5.81238 9.5 7.19238C9.5 8.57238 8.38 9.69238 7 9.69238Z" className={className} />
  </svg>
);
