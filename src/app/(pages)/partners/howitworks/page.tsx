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
      <div className='w-full flex justify-center items-center'>
      <Partnership number1={'482'}
       number2={'2000+'}
        number3={'232'}
        number4={'21'} 
        text1={'Family Physician'}
        text2={'Independent Doctor'}
        text3={'Clinicor Hospital'}
        text4={'Country used carelyo'}/>

      </div>

    
      <HowItWorksSection/>

  

      

    



    </div>
  )
}

export default HowItsWorks