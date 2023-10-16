import React from "react";
import EllipseBackground from "./ellipseBackground";

const BlurBackGroundDesign: React.FC = () => {
  return (
    <>
    {/*think this code is old, use the one in folder and change to that in all components? */}
      <div className="absolute z-[-2] w-[837px] h-[918px] left-[-85px] ">
        <div className=" w-[753px] h-[918px] left-[-1px] bg-[#FFFFFF] blur-2xl">
          <div className="  w-[487px] h-[487px] left-[-85px] top-[251px] bg-[#45AC60] opacity-[18%] blur rounded-[100%] "></div>
        </div>
      </div>
      <div className=" absolute w-[256.3px] h-[234.26px] top-[-27px] opacity-25 z-[-2] left-[870px]">

        <EllipseBackground />
      </div>
     
          <div className="absolute z-[-2] w-[50px] h-[73px] right-0 top-[100px] opacity-[35%]">
        <div className=" w-[50px] h-[73px]  blur-md bg-[#FFFFFF] ">
          <div className="  w-[50px] h-[73px]  top-[251px] bg-[#45AC60] left-[-]  rounded-[100%] "></div>
        </div>
      </div>
    
    </>
  );
};

export default BlurBackGroundDesign;
