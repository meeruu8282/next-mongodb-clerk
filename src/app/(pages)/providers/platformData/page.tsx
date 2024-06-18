'use client'
import React, { useState } from 'react'
import Navbar from '../Components/NavBar/navbar'
import NavbarMobile from '../Components/NavBar/NavbarMobile'
import PlatformSignUp from '../auth/platformSignUp/page'


export default function PlatformDetails() {
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
     <PlatformSignUp></PlatformSignUp>
    </>
  )
}
