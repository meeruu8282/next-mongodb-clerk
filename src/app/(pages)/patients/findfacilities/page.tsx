import React from 'react'
import style from './findfacilities.module.css'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbar/NavbarMobile'
import FindFacilitiesForHealthcare from './FindFacilitiesForHealthcare'
import ChooseDoctorSpecializations from './ChooseDoctorSpecializations'
import FindNearbyHealthcareFacilities from '../components/FindNearbyHealthcareFacilities'

function findFacilities() {
  return (
    <div>
      <div className="max-h-32px top-25px left-144px">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>
      {/* <BlurBackGroundDesign /> */}

      <div className="w-screen h-auto mt-20 mb-16 flex justify-center
      items-center flex-col">
        <div className={`${style.mainFindFacilities} w-[90%] max-w-7xl mx-auto`}>

          <FindFacilitiesForHealthcare
          title="Find facilities for healthcare"
          />

          <ChooseDoctorSpecializations
          title="Choose Doctor Specializations"
          />

          <FindNearbyHealthcareFacilities />

        </div>
      </div>
    </div>
  )
}

export default findFacilities
