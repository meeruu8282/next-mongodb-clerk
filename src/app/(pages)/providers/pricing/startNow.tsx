'use client'
import React, { useState } from 'react'

import PricingTable from '../Components/pricing/pricingTable'
import SuperCharge from '../Components/superCharge'
import SuperChargeMobile from '../Components/superCharge/SuperChargeMobile'
import BlurBackGroundDesign from '../Components/blurBackGroundDesign'
import Head from 'next/head'
import Navbar from '../Components/NavBar/navbar'
import NavbarMobile from '../Components/NavBar/NavbarMobile'
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
            <h1 className="text-3xl font-semibold">Try Carelyo for 90 Days for Free</h1>
            <div className="flex justify-center mt-5"> {/* Centering the button */}
              <Link href="/providers/pricing/90daysFree">
                <button 
                  className={`w-[190px] h-[52px] p-[8px] gap-[10px] font-semibold button-green-border button-hover-effect button-black-border
`} >
                  <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                    Start now
                    <div className="ml-3">
                      <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-white bg-opacity-[25%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
            <div className="opacity-50 text-[Poppins] font-normal mt-4">
              No monthly subcription free for 90 days. Only a 16% per completed consultation.
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-8 mt-8 justify-center items-center">
          <PricingTable
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
