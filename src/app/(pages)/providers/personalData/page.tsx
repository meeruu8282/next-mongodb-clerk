'use client'
import React, { useState } from 'react'
import Navbar from '../Components/NavBar/navbar'
import NavbarMobile from '../Components/NavBar/NavbarMobile'
import BlurBackGroundDesign from '../Components/blurBackGroundDesign'
import SignUpProvisers from '../Components/startFillingYourData'
import DoctorSignUp from '../auth/signUp/page'


export default function PersonalDetails() {
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
     <DoctorSignUp></DoctorSignUp>
    </>
  )
}
