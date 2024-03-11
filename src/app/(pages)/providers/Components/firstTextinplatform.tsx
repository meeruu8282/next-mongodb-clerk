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
  return (  // first header text thats in all platform components
    <div className=" w-screen h-auto flex justify-center items-center flex-col gap-4">
   
            <div className="w-[90%] h-auto md:max-w-[70%] lg:max-w-[60%] xl:max-w-[53%] mx-auto">
              <h1 className="text-center text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl whitespace-normal text-[Poppins] font-bold">
                {headerBlackText1}{" "}
                <span className="text-greenText whitespace-normal font-bold ">
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
            <div className="w-[90%] h-auto opacity-[50%]  md:max-w-[70%] lg:max-w-[60%] xl:max-w-[53%] mx-auto">
              <p className="text-center text-[Poppins] text-sm sm:text-base md:text-xl lg:text-xl w-400 font-normal  ">
                {paragraph1}
              </p>
            </div>
        </div>
  )
}

export default FirstTextinplatform