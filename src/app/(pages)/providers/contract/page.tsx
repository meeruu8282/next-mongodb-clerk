'use client'
import { ReactNode, useState, useEffect } from "react";

import Link from 'next/link'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ToggleableBox from "../Components/ToggleableBoxProps";
import Navbar from '../Components/NavBar/navbar'
import NavbarMobile from '../Components/NavBar/NavbarMobile'
export default function Contract() {

  return (
    
    <div className="justify-center items-center">
        
      <div className="  max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>

      <div className="background-greenFillText absolute z-[-500] flex justify-center items-center w-screen h-[554px] top-0 bg-sageOpacityHigh rounded-[5px]">
        <div className="w-[921px] h-[108px] justify-center flex flex-col">
          <div className="w-[920px] h-[52px] flex justify-center">
            <h1 className="text-[40px] font-[Poppins] font-semibold">
              Platform Agreement
            </h1>
          </div>
          <div className="mt-4"></div>
          <div className="w-[921px] h-[32px] opacity-50 flex justify-center items-center">
            <p className="flex justify-center items-center">
              Please sign the platform agreement below.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="custom-shadow bg-white relative z-10 mt-[300px] flex flex-col justify-center items-center h-[662px] w-[1194px] rounded-[25px]">
          <div className="w-[1114px] h-[582px]">
            <div className="justify-end w-[1114px] h-[526px] mt-5">
              <div className="w-full h-[32px]">
                <h2 className="font-semibold font-[Poppins] text-[32px]">
                  Carelyo Cloud Connect Platform Agreement
                </h2>
              </div>
              <div className="mt-10"></div>
              <div className="w-[1114px] h-[430px] mb-0">
                <div className="flex w-[1114px] h-[84px]">
                  <div className="w-full h-auto font-[Poppins] text-[16px]">
                    This Carelyo Cloud Connect Agreement is entered into between the entity you represent, or, if you do not designate an entity in connection with a Subscription purchase or renewal, you individually (“Customer”), and Carelyo Sweden Operations Limited (“Carelyo”). It consists of the terms and conditions below, Use Rights, SLA, and all documents referenced within those documents (together, the “agreement”). It is effective on the date that your Reseller provisions your Subscription. Key terms are defined in Section 10. 1. Grants, rights and terms. All rights granted under this agreement are non-exclusive and non-transferable and apply as long as neither Customer nor any of its Affiliates is in material breach of this agreement. a. Software. Upon acceptance of each order, Microsoft grants Customer a limited right to use the Software in the quantities ordered. (i) Use Rights. The Use Rights in effect when Customer orders.
                  </div>
                </div>
                <div className="flex w-[1114px] h-[35px] mt-20">
                  <div className="w-full font-[Poppins] text-[16px]">
                    NOTE THIS WILL BE EMBEDDED SO THE CUSTOMER CAN READ THROUGH IT. IT WILL BE SCROLLABLE.
                  </div>
                </div>
                <div className="flex w-[1114px] h-[24px] mt-16">
                  <div className="flex pr-4">
                    <ToggleableBox id="uniqueId" isChecked={true} onToggle={(id) => console.log("Toggled with ID:", id)} />
                  </div>
                  <div className="flex w-full h-[22px] font-[Poppins] font-normal text-[18px]">
                    I acknowledge that I have read and understood the Carelyo Cloud Connect Platform Agreement as stated herein.
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex items-center w-full mt-4">
                    <div className="w-[200px] font-[Poppins] text-[16px]">
                      Customer Name:
                    </div>
                    <div className="w-full border-b-2 border-gray-300">
                      <input
                        type="text"
                        className="w-full border-none focus:ring-0"
                      />
                    </div>
                  </div>
                  <div className="flex items-center w-full mt-4">
                    <div className="w-[200px] font-[Poppins] text-[16px]">
                      Enter your signature:
                    </div>
                    <div className="w-full border-b-2 border-gray-300">
                      <input
                        type="text"
                        className="w-full border-none focus:ring-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1114px] h-[54px] flex font-[Poppins]">
            <Link href="/providers/doctorData">
              <div className="flex justify-center items-center w-[549px] h-[54px] rounded-[8px] border-[1px] text-sage hover:bg-sage hover:text-white">
                <h1 className="w-[41px] h-[22px] flex justify-center items-center">
                  Back
                </h1>
              </div>
            </Link>
            <div className="w-[10px]"></div>
            <Link href="/providers/platformData">
              <div className="flex justify-center items-center w-[549px] h-[54px] rounded-[8px] border-[1px] text-sage hover:text-white hover:bg-sage">
                <h1 className="w-[75px] h-[22px] flex justify-center items-center">
                  Continue
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[80px]"></div>
    </div>
  );
}
