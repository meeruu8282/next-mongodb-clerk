'use client'
import React, { useState } from 'react'

import PricingTable from '../Components/pricing/pricingTable'
import SuperCharge from '../Components/superCharge'
import BlurBackGroundDesign from '../Components/blurBackGroundDesign'
import Head from 'next/head'
import Navbar from '../Components/NavBar/navbar'
import NavbarMobile from '../Components/NavBar/NavbarMobile'

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
    alert(productId) //placeholder function
  }

  return (
    <>
      <div className="  max-h-32px top-25px left-144px ">
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
        <div className=" flex flex-col justify-center items-center mt-11">
          <div className="flex flex-col text-center">
            <h1 className="text-3xl font-semibold ">Choose Your Plan</h1>
            <div className="opacity-50 text-[Poppins] font-normal mt-4">
              Choose the plan that suits your needs and subscribe to the Carelyo platform
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-8 mt-8 justify-center items-center">
          <PricingTable
            selectedType={{ id: type, setItem: setType }}
            onClickGetStarted={handleCreateCheckoutSession}
          />
        </div>
      </div>
    </>
  )
}
