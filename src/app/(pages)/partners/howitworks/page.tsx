import React from 'react'
import HowItWorksSection from './howItWorksSection'
import Navbar from '../Components/navbar/Navbar'
import NavbarMobile from '../Components/navbar/NavbarMobile'
import IntroStats from '../Components/introStats/IntroStats'



const HowItsWorks = () => {
  return (
    <>
    <div>      
      <div className=" max-h-32px top-25px left-144px ">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
    </div>
    </div>
    <div className='w-screen flex flex-col justify-center items-center'>
    <IntroStats
       headerBlackText1={"97% of partners say using"}     
       headerGreenText1={"our platform"} 
       headerBlackText2={" is satisfying."} 
       paragraph1={"Welcome to our partnership program! We value collaboration and aim to create mutually beneficial relationships in the healthcare industry"}
     number1={"482"}
     text1={"Family Physician"} 
     number2={"2000+"} 
     text2={"Independent Doctor"} 
     number3={"232"} 
     text3={"Clinicor Hospital"} 
     number4={"21"} 
      text4={"Country used carelyo"}  
    />

       

        <div className='w-full flex justify-center items-center mb-14 mt-4'>
          <HowItWorksSection
            heading={'How It Works'}
            
            number1={'1'}
            header1={'Register on our Website'}
            text1={'Begin the partnership process by visiting our website and accessing the partnership registration page. Fill out and submit the partnership registration form with your organizations details.'}
            image1={'/LaptopHowItWorks.png'}

            number2={'2'}
            header2={'Evaluation and Assessment'}
            text2={'Our partnership team will carefully review your registration submission and evaluate your organization based on criteria such as qualifications, expertise, resources, and potential synergy with our platform.'}
            image2={'/TwoPersonTalkHowItWorks.png'}

            number3={'3'}
            header3={'Collaboration Planning'}
            text3={'Our collaboration plan aims to leverage each partner strengths and resources to achieve our shared objectives'}
            image3={'/GroupTalkHowItWorks.png'}

            number4={'4'}
            header4={'Implementation and Execution'}
            text4={'With the collaboration plan in place, we will initiate the implementation phase, working together to execute the agreed-upon activities.'}
            image4={'/DoctorLaptopHowItWorks.png'} />

        </div>
      </div>
      </>
  )
}

export default HowItsWorks