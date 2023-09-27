import React from "react";
import EllipseBackground from "./ellipseBackground";

const BlurBackGroundDesign: React.FC = () => {
  return (
    <>
      <div className="absolute z-[-2] w-[837px] h-[918px] left-[-85px]">
        <div className=" w-[753px] h-[918px] left-[-1px] bg-[#FFFFFF] blur-2xl">
          <div className="  w-[487px] h-[487px] left-[-85px] top-[251px] bg-[#45AC60] opacity-[18%] blur rounded-[100%] "></div>
        </div>
      </div>
      <div className=" absolute w-[256.3px] h-[234.26px] top-[-27px] opacity-25 z-[-2] left-[870px]">

        <EllipseBackground />
      </div>
      <div className="absolute z-[-2] w-[73px] h-[73px] top-[130px]  right-[-32.5px] opacity-[35%] blur-md">
        <div className=" w-[73px] h-[73px]  bg-[#FFFFFF] ">
          <div className="  w-[73px] h-[73px] left-[-85px] top-[251px] bg-[#45AC60]   rounded-[100%] "></div>
        </div>
      </div>
    </>
  );
};

export default BlurBackGroundDesign;
