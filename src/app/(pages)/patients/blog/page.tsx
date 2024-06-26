import React from 'react'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbar/NavbarMobile'

function page() {
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
