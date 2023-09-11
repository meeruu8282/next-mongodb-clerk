

import CustomContentBox from "../Components/customContentBox";
import { useState } from "react";


export default function Pricing() {


  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className=" flex flex-col justify-center items-center left-[125px] ">
        <div className="w-[921px] h-[108px] flex flex-col text-center">
          <h1 className="text-3xl font-semibold ">
            Choose Your Plan
          </h1>
          <p className="w-[921px] h-[32px] opacity-50 font-[Poppins] font-normal mt-4">
            Choose the plan that suits your needs and subscribe to the Carelyo platform
          </p>
        </div>
      </div>

      <div className="flex  justify-between w-[1190px] h-[463px] ">
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
        />
      </div>




    </div>
  );
}
