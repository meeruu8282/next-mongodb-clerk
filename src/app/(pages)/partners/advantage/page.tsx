import HelpCard from "./advantageCard";

import PartnerAdvantage from "./partnerAdvantage";


import React from 'react'
import IntroStats from "../Componentspartners/introStats/IntroStats";




const Advantage = () => {
  return (

    <div className="flex justify-center items-center w-screen h-auto flex-col">
      <IntroStats    
       headerBlackText1={"97% of partners say using"}     
       headerGreenText1={"our platform"} 
       headerBlackText2={" is satisfying."} 
       paragraph1={"Welcome to our partnership program! We value collaboration and aim to create mutually beneficial relationships in the healthcare industry"}
     number1={"482"}
     text1={"Family Physician"} 
     number2={"2000+"} 
     text2={"Independent Doctor"} 
     number3={"232"} 
     text3={"Clinicor Hospital"} 
     number4={"21"} 
      text4={"Country used carelyo"}  />

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
    <PartnerAdvantage
    
     image={"/partnerAdvantage.png"}
     header={"Partner Advantage"}
     paragraph={"Partnering with us opens up a world of advantages, incloding access to a vast network, collaborative opprtunities, enhanced credibility, increased exposure and marketing, technical support and resources, and the opportunity for continuous growth and collaboration. By becoming our partner, you can leverage these advantages to expand your reach, enhance your organization's reputation, and drive positive change in the healthcare industry."} 
     buttonText={"Contact Us"}
     subText={"We are excited to explore the possibilites together!"}>

    </PartnerAdvantage>
     
    </div>
    </div>
  )
};

export default Advantage