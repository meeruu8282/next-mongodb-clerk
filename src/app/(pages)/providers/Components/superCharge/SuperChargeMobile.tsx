import React from "react";
import Image from "next/image";
import CarelyoButton from "../getStartedButton";


const SuperChargeMobile = () => {
  return (
    <div className="flex justify-center w-screen gap-8 py-5 bg-[#45ac60]">
              <div>


              <h1 className={`text-[poppins] text-3xl font-semibold text-center text-white`} >
                Supercharge <br /> <span className="underline">Productivity</span> <br /> with Carelyo!
              </h1>

              <div className="image-container my-5">
                <Image
                  className=""
                  layout="fixed "
                  width={401}
                  height={212}
                  src="/superchargedoctor.png"
                  alt="Superchargedoctor"
                />
              </div>

            <div className="button-container my-5 flex justify-center">
            <CarelyoButton
                className="  rounded-[25px]  border bg-opacity-25 bg-white text-sm font-semibold "
                buttonText="Connect Today"
              />
            </div>
          </div>
  </div>
  )
}

export default SuperChargeMobile
