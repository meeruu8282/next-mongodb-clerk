import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import NavbarMobile from '../Components/navbar/NavbarMobile'

const page = () => {
  return (
    <div>
      {' '}
      <div className="  max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>
    </div>
  )
}

export default page
