
import HelpCard from "./advantageCard";

import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import NavbarMobile from '../Components/navbar/NavbarMobile'



export default function () {
  return (

    <div className="flex justify-center w-screen h-auto">
    <div className="relative flex  max-w-[1190px] w-[95%] lg:w-[90%] flex-wrap justify-center lg:justify-between">
      <div className="w-[70%] mt-6 md:mt-12 md:mb-2 mb-20 text-center md:text-left md:w-[90%]">
        <h1 className="text-[Poppins] text-[32px] md:text-[24px] leading-[29px] tracking-[0em] left-0 font-semibold mt-5">Why Become a Carelyo Partner?</h1>
      </div>
      <HelpCard
        icon={"/helpCardImg.png"}
        header={"Wide Market Potential"}
        paragraph={
          `provide access to a broad and diverse market. Enhance your visibility among potential healthcase service providers.`
        } 
        link={""}
        />
      <HelpCard
        icon={"/CarelyoPartner1.png"}
        header={"Technological Innovation"}
        paragraph={
          "Carelyo.io is continuously driving technological innovation in healthcare services."
        }
        link={""} />
      <HelpCard
        icon={"/CarelyoPartner2.png"}
        header={"Excellence in Patient Care"}
        paragraph={
          "Our partners are vital in delivering high-quality patient care by integrating your  services with the Carelyo platform."
        } 
        link={""}
        />
      
     
    </div>
    </div>
  )
};


export default page

