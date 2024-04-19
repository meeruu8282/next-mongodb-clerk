import React from "react";
import EllipseBackground from "../ellipseBackground";
import style from './blurBackGroundDesign.module.css'

const BlurBackGroundDesign: React.FC = () => {
  return (
    <>
      {/* Left big blurred circle */}
      <div className="absolute z-[-2] left-0 top-0">
        <div className="relative w-[753px] h-[918px]">
          <div className="absolute left-0 bg-white opacity-60 blur-2xl w-[753px] h-[918px]">
            <div className="absolute left-[-85px] top-[251px] bg-sage opacity-[16%]
            blur-lg rounded-full w-[487px] h-[487px]"></div>
          </div>
        </div>
      </div>

      {/* Circle grid 8x8 */}
      {/*style from blurBackGroundDesign.module.css */}
      <div className={`absolute ${style.changeellipseposition} w-[256.3px] h-[234.26px]
      top-[-27px] opacity-25 z-[-2] left-[870px]`} >
        <EllipseBackground />
      </div>

      {/* Right small blurred circle */}
      <div className="absolute z-[-2] w-full top-[90px] flex justify-end right-0 overflow-hidden">
        <div className="relative w-[120px] h-[120px]">
          <div className="absolute w-[120px] h-[120px] flex items-center justify-center right-0">
            <div className="absolute blur-md w-[73px] h-[73px] right-[-38px] bg-sage
            opacity-25 rounded-[100%]"></div>
          </div>
        </div>
      </div>

    </>
  );
};

export default BlurBackGroundDesign;
