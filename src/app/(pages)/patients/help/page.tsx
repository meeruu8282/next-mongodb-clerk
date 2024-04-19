import React from 'react'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbar/NavbarMobile'
import BlurBackGroundDesign from '../../providers/Components/blurBackgrounddesign/blurBackGroundDesign'
import SearchBar from '../../providers/Components/searchBar'
import HelpCenter from '../../providers/Components/helpCenter'
import ContactComponent from '../../providers/Components/contactComponent'
import LocationComponent from '../../providers/Components/locationComponent'

const patientsHelp = () => {
  return (
    <>
      {/* Navbar start */}
      <div className="max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>
      {/* Navbar end */}

      <div className="flex flex-col items-center mt-16 min-h-screen">
      <BlurBackGroundDesign />
        <SearchBar
          title={"Welcome to the Carelyo Help Center!"}
          />
        <HelpCenter />
        <ContactComponent />
        <LocationComponent
          title1={"Visit our stores"}
          title2={"Address"}
          title3={"Email"}
          title4={"Phone Number"}
          logo1={"/Mask group.png"}
          logo2={"/emailGreen.svg"}
          logo3={"/phoneGreen.svg"}
          paragraph1={"Find us at these locations."}
          paragraph21={"Swedcon18 AB, Allmogevägen 106,"}
          paragraph22={"352 53 Växjö, Sweden"}
          link1={"Our locations"}
          link2={"hello@swedcon18.com"}
          link3={"+46701410631"}
        />
      </div>
    </>
  )
}

export default patientsHelp
