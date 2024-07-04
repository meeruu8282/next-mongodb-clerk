'use client'
import React, { useState } from 'react'

import PricingFreeTable from '../../Components/pricing/pricingFreeTable'
import SuperCharge from '../../Components/superCharge'
import SuperChargeMobile from '../../Components/superCharge/SuperChargeMobile'
import BlurBackGroundDesign from '../../Components/blurBackGroundDesign'
import Head from 'next/head'
import Navbar from '../../Components/NavBar/navbar'
import NavbarMobile from '../../Components/NavBar/NavbarMobile'
import Link from 'next/link'; 

export default function Pricing() {
  const [type, setType] = useState<string>('monthly') //monthly | quarterly | yearly

  // handleCreateCheckoutSession should have the stripe POST logic */
  // Example:
  /*
  const handleCreateCheckoutSession = async (productId:string) => {
  const res = await fetch(`/api/stripe/checkout-session`, {
    method: "POST",
    body:JSON.stringify(productId),
    headers: {
      "Content-Type": "application/json",
    },
  });
  */

  const handleCreateCheckoutSession = (productId: string) => {
    console.log(productId) //placeholder function
  }

  return (
    <>
      <div className="max-h-32px top-25px left-144px">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <BlurBackGroundDesign />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className="flex flex-col justify-center items-center mt-11">
          <div className="flex flex-col text-center">
            <h1 className="text-3xl font-semibold">Start your 90 Days for free now.</h1>
            
            <div className="opacity-50 text-[Poppins] font-normal mt-4">
            Choose the plan that suits your needs and subscribe to the Carelyo platform
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-8 mt-8 justify-center items-center">
          <PricingFreeTable
            selectedType={{ id: type, setItem: setType }}
            onClickGetStarted={handleCreateCheckoutSession}
          />
        </div>
          <div className="supercharge hidden lg:flex justify-center">
              <SuperCharge />
            </div>
            <div className="superChargeMobile lg:hidden">
              <SuperChargeMobile />
            </div> 
      </div>
    </>
  )
}
