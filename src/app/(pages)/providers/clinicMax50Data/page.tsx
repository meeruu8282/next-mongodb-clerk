'use client'
import {  } from 'react'
import Navbar from '../Components/NavBar/navbar'
import NavbarMobile from '../Components/NavBar/NavbarMobile'
import DoctorOnboardClinicMax50 from '../auth/doctorSignUp/pageMax50'


export default function ClinicMax50Details() {
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
     <DoctorOnboardClinicMax50></DoctorOnboardClinicMax50>
    </>
  )
}
