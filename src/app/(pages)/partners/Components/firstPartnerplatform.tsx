import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface FirstPartnerplatformTemplateProps {
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
  
  const FirstPartnerplatform: React.FC<FirstPartnerplatformTemplateProps> = ({
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
    <div className="w-full h-auto flex justify-center items-center flex-col gap-4">
   
            <div className="w-[90%] h-auto md:max-w-[70%] lg:max-w-[65%] xl:w-[48%] mx-auto flex justify-center items-center ">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl whitespace-normal text-[Poppins] font-normal">
                {headerBlackText1}{" "}
                <span className="text-greenText whitespace-normal font-bold ">
                  {headerGreenText1}
                </span>{" "}
                {headerBlackText2}{" "}
              </h1>
            </div>
            <div className="w-[90%] md:max-w-[80%] lg:max-w-[75%] xl:w-[56%] flex justify-center items-center h-auto opacity-50 mx-auto">
              <p className="text-center text-[Poppins] text-sm sm:text-base md:text-xl lg:text-xl font-normal  ">
                {paragraph1}
              </p>
            </div>

            
        </div>
  )
}

export default FirstPartnerplatform