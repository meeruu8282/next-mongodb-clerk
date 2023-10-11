import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface FirstTextinplatformTamplateProps {
    headerBlackText1?: string;
    headerBlackText2?: string;
    headerBlackText3?: string;
    headerBlackText4?: string;
    headerBlackText5?: string;
    headerGreenText1?: string;
    headerGreenText2?: string;
    headerGreenText3?: string;
    headerGreenText4?: string;
    headerGreenText5?: string;
    paragraph1: string;
   
  
    // ... andra props för varje sektion av din mall
  }
  
  const FirstTextinplatform: React.FC<FirstTextinplatformTamplateProps> = ({
    headerBlackText1,
    headerBlackText2,
    headerBlackText3,
    headerBlackText4,
    headerBlackText5,
    headerGreenText1,
    headerGreenText2,
    headerGreenText3,
    headerGreenText4,
    headerGreenText5,
    paragraph1,
   
    
  
    // ... andra props för varje sektion av din mall
  }) => {
  return (
    <div className=" w-screen h-auto ">
            <div className="w-screen  h-auto max-w-[838px] mx-auto">
              <h1 className="text-center sm:text-[20px] md:text-[30px] lg:text-[40px]  whitespace-normal ">
                {headerBlackText1}{" "}
                <span className="text-greenText whitespace-normal font-bold">
                  {headerGreenText1}
                </span>{" "}
                {headerBlackText2}{" "}
                <span className="text-greenText whitespace-normal font-bold">
                {headerGreenText2}
                </span>{" "}
                {headerBlackText3}{" "}
                <span className="text-greenText whitespace-normal font-bold">
                {headerGreenText3}
                </span>{" "}
                {headerBlackText4}{" "}
                <span className="text-greenText whitespace-normal font-bold">
                {headerGreenText4}
                </span>{" "}
                {headerBlackText5}{" "}
                <span className="text-greenText whitespace-normal font-bold">
                {headerGreenText5}
                </span>{" "}

              </h1>
            </div>
            <div className="w-screen h-auto opacity-[50%] mt-3 max-w-[921px] mx-auto">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                {paragraph1}
              </p>
            </div>
          </div>
  )
}

export default FirstTextinplatform