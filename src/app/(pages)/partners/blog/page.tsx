import React from 'react'
import Navbar from '../Componentspartners/navbar/Navbar'
import NavbarMobile from '../Componentspartners/navbar/NavbarMobile'
import BreakingBlog from '../Components/breakingBlog/breakingBlog'

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
      <div className='flex justify-center items-center'>
      <BreakingBlog heading={'Breaking Blog About Carelyo'}
        heading2={'Welcome to blog page! We are dedicated to providing you can access an update of news'}
        buttonText={'Find Blog'}
        text1={'Celebrating Successful Collaborations with Our Partners'}
        text2={'Revolutionizing Telemedicine: A Partnership for the Future'}
        image1={'/GroupHighfive-breakingBlog.png'}
        image2={'/Videocall-breakingBlog.png'}
         minutes1={'2 Minutes ago'} 
        minutes2={'45 minutes ago'}/>

      </div>
   
    </div>
  )
}

export default blog
