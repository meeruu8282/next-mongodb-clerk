"use client";
import React, { useState } from "react";

import CustomContentBox from "../Components/customContentBox";
import ToggleBilling from "../Components/ToggleBilling";
import SuperCharge from "../Components/superCharge";
import BlurBackGroundDesign from "../Components/blurBackGroundDesign";
import Head from "next/head";

export default function Pricing() {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  /*   const validBillingOptions = ['Annual', 'Quarterly', 'Monthly'];
  const [selectedBill, setSelectedBill] = useState<typeof validBillingOptions[number]>(
    'Annual'
  );
  */

  const [selectedBill, setSelectedBill] = useState<string | null>(null);
  const billingOptions = [
  { id: 'Annual', text: 'Annual billing', savingsText: 'save 20%' },
  { id: 'Quarterly', text: 'Quarterly billing', savingsText: 'save 15%' },
  { id: 'Monthly', text: 'Monthly billing', savingsText: '' },
  ];
  const pricesOptions = [
    {
      id: 1,
      title: 'Independent Doctor',
      cost: '$29/month',
      description: 'Enhanced features for \nindependent doctors.', //"\n" is a new line
      features: [
        'Appointment management',
        'Custom branding',
        'Multiple specialty listings',
      ]
    },
    {
      id: 2,
      title: 'Clinic',
      cost: '$99/month',
      description:
        'Perfect for small clinics with more providers and advanced features.',
      features: [
        'Appointment management',
        'Custom branding and clinic profile',
        'EHR integration',
      ]
    },
    {
      id: 3,
      title: 'Hospital',
      cost: '$499/month',
      description:
        'Suitable for small hospitals with limited departments.',
      features: [
        'Appointment management',
        'Provider and department profiles for up to 10 departments',
        'Reporting and analytics',
      ]
    }
  ];

  console.log("selectedbox pricing", {selectedBox})
  console.log("selected billing: ", {selectedBill})

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <BlurBackGroundDesign/>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className=" flex flex-col justify-center items-center mt-11">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl font-semibold ">Choose Your Plan</h1>
          <div className="opacity-50 text-[Poppins] font-normal mt-4">
            Choose the plan that suits your needs and subscribe to the Carelyo
            platform
          </div>
        </div>
      </div>
      {/* Select billing component */}
      <div className="flex mb-8 mt-8 justify-center items-center">
        {billingOptions.map(({ id, text, savingsText }) => (
          <ToggleBilling
            key={id}
            id={id}
            selectedBill={selectedBill}
            setSelectedBill={setSelectedBill}
            isChecked={id === selectedBill}
            onToggle={() => {
              setSelectedBill(id === selectedBill ? null : id);
            }}
            billingText={text}
            savesText={savingsText}
          />
        ))}
      </div>
        {/* Select prices component */}
      <div className="flex gap-2">
        {pricesOptions.map(({ id, title, cost, description, features }) => (
          <CustomContentBox
            key={id}
            id={id}
            title={title}
            monthlyCost={cost}
            descriptionLines={description}
            features={features}
            buttonText="Get Started"
            selectedBox={selectedBox} // Skicka med selectedBox
            setSelectedBox={setSelectedBox} // Skicka med setSelectedBox
          />
        ))}
      </div>
      <SuperCharge />
    </div>
  );
}
