'use client'

import Image from 'next/image'
import Navbar from './(pages)/providers/Components/NavBar/navbar'
import NavbarMobile from './(pages)/providers/Components/NavBar/NavbarMobile'



export default function Home() {
  return (
    <div>
      <div className="  max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div>
   
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>
    </div>
  )
}
