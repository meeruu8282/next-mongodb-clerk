"use client";
import React from "react";

import CustomContentBox from "../Components/customContentBox";
import { useState } from "react";
import SuperCharge from "../Components/superCharge";

import ToggleableBox from "../Components/ToggleableBoxProps";
import BlurBackGroundDesign from "../Components/blurBackGroundDesign";
import Head from "next/head";

export default function Pricing() {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  console.log("selectedbox pricing", { selectedBox });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <BlurBackGroundDesign />

      <div className=" flex flex-col justify-center items-center  mt-11 ">
        <div className="w-[921px] h-[108px] flex flex-col text-center ">
          <h1 className=" md:text-3xl text-xl font-semibold ">
            Choose Your Plan
          </h1>
          <div className=" sm:text-xl text-[14px] leading-[32px] opacity-50 font-[Poppins] font-normal mt-4">
            <h2>
              Choose the plan that suits your needs and subscribe to the Carelyo
              platform
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[1100px] h-[22px] flex mb-8  justify-center items-center  ">
        <div className=" hover:border-[#45AC60]  w-[22px] h-[22px] border border-black rounded-full mr-2 flex "></div>
        <div className=" flex text-[16px] font-[Popins] font-semibold  pr-4  ">
          <h3 className="pr-1  text-[12px] sm:text-[16px]">Annual billing </h3>
          <p className="text-[#45AC60]  text-[12px] sm:text-[16px] "> save 20% </p>
        </div>
        <div className="w-[22px] h-[22px] border border-black rounded-full mr-2 hover:border-[#45AC60]  "></div>
        <div className="text-[16px] font-[Popins] flex pr-4 font-semibold">
          <h3 className="pr-1 text-[12px] sm:text-[16px]">Quarterly billing </h3>
          <p className="text-[#45AC60]  text-[12px] sm:text-[16px]">save 15%</p>
        </div>
        <div className="w-[22px] h-[22px] border border-black rounded-full mr-2 hover:border-[#45AC60] "></div>
        <div className=" text-[12px] sm:text-[16px] font-[Popins] flex font-semibold">
          <h3>Monthly billing</h3>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col md:flex-row justify-between  w-auto sm:w-[1120px] h-auto overflow-hidden">
        <CustomContentBox 
          title="Independent Doctor"
          monthlyCost="$29/month"
          descriptionLines={["Enhanced features for", "independent doctors."]}
          features={[
            "Appointment management",
            "Custom branding",
            "Multiple specialty listings",
          ]}
          buttonText="Get Started"
          id={1}
          selectedBox={selectedBox} // Skicka med selectedBox
          setSelectedBox={setSelectedBox} // Skicka med setSelectedBox
        />
        <CustomContentBox
          title="Clinic"
          monthlyCost="$99/month"
          descriptionLines={[
            "Perfect for small clinics with more providers and advanced features.",
          ]}
          features={[
            "Appointment management",
            "Custom branding and clinic profile",
            "EHR integration",
          ]}
          buttonText="Get Started"
          id={2}
          selectedBox={selectedBox} // Skicka med selectedBox
          setSelectedBox={setSelectedBox} // Skicka med setSelectedBox
        />

        <CustomContentBox
          title="Hospital"
          monthlyCost="$499/month"
          descriptionLines={[
            "Suitable for small hospitals with limited departments.",
          ]}
          features={[
            "Appointment management",
            "Provider and department profiles for up to 10 departments",
            "Reporting and analytics",
          ]}
          buttonText="Get Started"
          id={3}
          selectedBox={selectedBox} // Skicka med selectedBox
          setSelectedBox={setSelectedBox} // Skicka med setSelectedBox
        />
      </div>

      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  );
}
