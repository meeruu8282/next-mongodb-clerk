import React from 'react'
import Navbar from '../Componentspartners/navbar/Navbar'
import NavbarMobile from '../Componentspartners/navbar/NavbarMobile'

const blog = () => {
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

export default blog
