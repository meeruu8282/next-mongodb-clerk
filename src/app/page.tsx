'use client'

import Image from 'next/image'
import Navbar from './(pages)/providers/Components/NavBar/navbar'
import NavbarMobile from './(pages)/providers/Components/NavBar/NavbarMobile'
import { Widget } from '@typeform/embed-react'

export default function Home() {
  // Typeform ID
  const typeFormId = 'JlurNqyg'
  return (
    <div>
      <div className="  max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
        <div>
          <Widget id={typeFormId} className="w-screen h-screen" />
        </div>
      </div>
    </div>
  )
}
