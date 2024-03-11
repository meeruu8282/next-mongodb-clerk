import React from 'react'
import Partnership from '../Components/partnership'
import FirstPartnerplatform from '../Components/firstPartnerplatform'
import HowItWorksSection from './howItWorksSection'





function HowItsWorks() {
  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center items-center sm:mb-14 mb-5'>

        <FirstPartnerplatform
          headerBlackText1={"97% of partners say using"}
          headerGreenText1={"our platform"}
          headerBlackText2="is satisfying."
          paragraph1={
            "Welcome to our partnership program! We value collaboration and aim to create mutually beneficial relationships in the healthcare industry"
          }
        />
      </div>
      <div className='w-full flex justify-center items-center mb-14'>
        <Partnership number1={'482'}
          number2={'2000+'}
          number3={'232'}
          number4={'21'}
          text1={'Family Physician'}
          text2={'Independent Doctor'}
          text3={'Clinicor Hospital'}
          text4={'Country used carelyo'} />

      </div>


      <HowItWorksSection heading={''}
        number1={'1'}
        text1={'Begin the partnership process by visiting our website and accessing the partnership registration page. Fill out and submit the partnership registration form with your organizations details.'}
        header1={'Register on our Website'}
        image1={'/LaptopHowItWorks.png'}

        number2={'2'}
        text2={'Our partnership team will carefully review your registration submission and evaluate your organization based on criteria such as qualifications, expertise, resources, and potential synergy with our platform.'}
        header2={'Evaluation and Assessment'}
        image2={'/TwoPersonTalkHowItWorks.png'}

        number3={'3'}
        text3={'Our collaboration plan aims to leverage each partner strengths and resources to achieve our shared objectives'}
        header3={'Collaboration Planning'}
        image3={'/GroupTalkHowItWorks.png'}

        number4={'4'}
        text4={'With the collaboration plan in place, we will initiate the implementation phase, working together to execute the agreed-upon activities.'}
        header4={'Implementation and Execution'}
        image4={'/DoctorLaptopHowItWorks.png'} />









    </div>
  )
}

export default HowItsWorks