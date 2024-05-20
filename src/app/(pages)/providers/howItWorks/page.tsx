import Image from 'next/image'
import SuperCharge from '../Components/superCharge'
import HowItWorksPartFive from './howItWorksPartFive'
import HowItWorksPartOne from './HowItWorksPartOne'
import HowItWorksPartTwo from './HowItWorksPartTwo'
import HowItWorksThree from './HowItWorksThree'

import HowItWorksBenefits from './HowItWorksBenefits'
import BlurBackGroundDesign from '../Components/blurBackGroundDesign'
import HowItWorksWelcome from './HowItWorksWelcome'
import HowItWorksGreenbackground from './HowItWorksGreenbackground'
import HowItWorksPartFour from './HowItWorksPartFour'
import style from './howItWork.module.css'
import SuperChargeMobile from '../Components/superCharge/SuperChargeMobile'
import Navbar from '../Components/NavBar/navbar'
import NavbarMobile from '../Components/NavBar/NavbarMobile'

export default function Howitwork() {
  return (
    <>
      <div className="  max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>

      <div className="w-full justify-center items-center flex flex-col mb-auto">
        <BlurBackGroundDesign />
         <div className="w-4/5 mx-auto flex flex-col gap-32"> 
          <HowItWorksWelcome
            text1={'Healthcare Platform for Providers!'}
            text2={
              'Are you an independent doctor, family physician, or managing a small to medium-sized clinic or hospital? We at Carelyo are here for you!'
            }
            textButton1={'Get Started'}
            textButton2={'Discover More'}
            imageSrc={'/firstpageRec.png'}
          />
        </div> 

        <div className="w-full flex justify-center items-center mx-auto my-auto mt-12">
          <HowItWorksGreenbackground
            heading1={'Who Can Become a'}
            heading1Bold={'Carelyo Health Provider?'}
            heading2={
              'Carelyo welcomes a wide range of healthcare professionals and institutions to join as providers on our platform. '
            }
            title1={'Self-Employed Doctors'}
            text1={
              'If you are a self-employed doctor running your own practice, Carlo offers you the opportunity to expand your reach with online'
            }
            buttonText1={'Join Carelyo'}
            imageSrc1={'/Ellipse_11520.svg'}
            title2={'Clinics and Hospitals'}
            text2={
              'By joining Carelyo, you can streamline your appointment booking process, enhance patient communication, and improve overall efficiency.'
            }
            imageSrc2={'/image-r.svg'}
            title3={'Diagnostic Laboratory Centers'}
            text3={
              'Carelyo offers to seamlessly connect with referring healthcare providers, share test results securely, and ensure timely communication for better patient care.'
            }
            imageSrc3={'/image587.png'}
            buttonText2={'Get Carelyo'}
            title4={'Pharmacy'}
            text4={
              'By joining, you can simplify medication management, & enhance collaboration with healthcare providers.'
            }
            imageSrc4={'/Ellipse11520.svg'}
          />
        </div>

        <div
          className={`block flex-col w-full justify-center h-full items-center text-[Poppins] mx-auto my-auto mt-14 ${style.hideMobileMode}`}
        >
          <div className="w-full justify-center flex items-center mb-5">
            <h1 className="text-[Poppins] font-semibold text-4xl">
              An easier way to interact with patient
            </h1>
          </div>

          <div className={`flex flex-row w-[100%] justify-center ${style.make85Width}`}>
            <div className="leftside w-[100%]  flex flex-col items-center justify-start">
              <div className="flex items-center justify-between w-[185px] h-[66px] mb-[6%] mt-[6%]">
                <div className="w-[66px] h-[66px]">
                  <Image layout="responsive" width={66} height={66} src="/E11538.svg" alt="" />
                </div>
                <div className="w-[94px] h-[30px]flex items-center justify-start">
                  <div className="text-[Poppins] font-normal">Providers</div>
                </div>
              </div>

              <div className="w-[100%] flex flex-row justify-center items-center mt-10 mb-[10%] mx-auto">
                <HowItWorksPartOne
                  hashtagNumber={'#1'}
                  header={' Registration & Profile Creation'}
                  imageSrc={'/iPadPro.png'}
                  text1={'Registering as healthcare service providers.'}
                  text2={'Create a comprehensive profile by entering their personal information'}
                />
              </div>

              <div className="w-[100%] flex justify-center items-center  mx-auto">
                <HowItWorksPartTwo
                  hashtagNumber={'#2'}
                  header={'Listing Services and Availability'}
                  text1={'List the healthcare services they offer on their profile page.'}
                  text2={'Shares their clinic.carelyo.io website with patient'}
                  imageSrc={'/Group 1000005951 1 (1).svg'}
                />
              </div>
            </div>

            <div className="flex justify-center px-10">
              <svg
                className={`${style.height1500}`}
                width="6"
                height="1750"
                viewBox="0 0 6 2117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3V2114"
                  stroke="#45AC60"
                  stroke-opacity="0.08"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <div className="rightside w-[100%] flex flex-col justify-start items-center ">
              <div className=" flex items-center justify-between w-[185px] h-[66px] mt-[6%]">
                <div className="w-[66px] h-[66px]">
                  <Image
                    layout="responsive"
                    width={66}
                    height={66}
                    src="/E11539.svg"
                    alt=""
                    priority
                  />
                </div>
                <div className="w-[94px] h-[30px] flex items-center justify-start">
                  <div className="-[Poppins] font-normal">Patient</div>
                </div>
              </div>

              <div className="w-full flex justify-center items-center mt-[55%]">
                <HowItWorksThree
                  imageSrc={'/NewMacbookProMockupFrontView.png'}
                  hashtagNumber={'#3'}
                  header={'Write your heading here'}
                  text1={
                    'Visit the website provided by your provider to access their Carelyo platform.'
                  }
                  text2={
                    "If it's your first time using the Carelyo platform, complete your profile by providing necessary personal and medical information."
                  }
                />
              </div>

              <div className="flex justify-center items-center pr-[60%]">
                <svg
                  width="121"
                  height="233"
                  viewBox="0 0 121 233"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68 230.5H38C18.67 230.5 3 214.83 3 195.5V85C3 65.67 18.67 50 38 50H83.5C102.83 50 118.5 34.33 118.5 15V0"
                    stroke="#45AC60"
                    stroke-width="5"
                    stroke-dasharray="10 10"
                  />
                </svg>
              </div>

              <div className="flex justify-center items-center">
                <HowItWorksPartFour
                  hashtagNumber={'#4'}
                  header={'Appointment Booking'}
                  imageSrc={'/drsamuel.jpg'}
                  text1={`Select the "See a Doctor" option to schedule an appointment.`}
                  text2={'Choose a convenient date and time for your appointment.'}
                />
              </div>
            </div>
          </div>

          <div className=" w-full flex justify-center items-center ">
            <HowItWorksPartFive
              hashtagNumber={'#5'}
              header={'Consultation and Care'}
              imageSrc1={'/ipadimagehowItWorks708.png'}
              imageSrc2={'/mobilePhonehowitworksimage707.png'}
              text1={
                'During the consultation, providers engage with the client, conduct assessments, diagnose conditions, recommend treatments, and provide medical advice.'
              }
              listText1={'Virtual consultation or visit your provider in person.'}
              listText2={
                'Discuss your health concerns, receive medical advice, and ask any questions you may have.'
              }
            />
          </div>
        </div>

        <div
          className={`Mobilemode twoside section flex-col w-full justify-center items-center mx-auto my-auto h-full hidden ${style.showMobileMode}`}
        >
          <div className="w-full justify-center flex items-center mb-[12%] mt-[10%]">
            <h1
              className={`text-[Poppins] font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl ${style.text2Xl585} ${style.textXl480} ${style.textLg395} ${style.textBase360}`}
            >
              An easier way to interact with patient
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <HowItWorksPartOne
              hashtagNumber={'#1'}
              header={' Registration & Profile Creation'}
              imageSrc={'/iPadPro.png'}
              text1={'Registering as healthcare service providers.'}
              text2={'Create a comprehensive profile by entering their personal information'}
            />

            <HowItWorksPartTwo
              hashtagNumber={'#2'}
              header={'Listing Services and Availability'}
              text1={'List the healthcare services they offer on their profile page.'}
              text2={'Shares their clinic.carelyo.io website with patient'}
              imageSrc={'/Group 1000005951 1 (1).svg'}
            />

            <HowItWorksThree
              imageSrc={'/NewMacbookProMockupFrontView.png'}
              hashtagNumber={'#3'}
              header={'Write your heading here'}
              text1={
                'Visit the website provided by your provider to access their Carelyo platform.'
              }
              text2={
                "If it's your first time using the Carelyo platform, complete your profile by providing necessary personal and medical information."
              }
            />

            <HowItWorksPartFour
              hashtagNumber={'#4'}
              header={'Appointment Booking'}
              imageSrc={'/drsamuel.jpg'}
              text1={`Select the "See a Doctor" option to schedule an appointment.`}
              text2={'Choose a convenient date and time for your appointment.'}
            />
            <HowItWorksPartFive
              hashtagNumber={'#5'}
              header={'Consultation and Care'}
              imageSrc1={'/ipadimagehowItWorks708.png'}
              imageSrc2={'/mobilePhonehowitworksimage707.png'}
              text1={
                'During the consultation, providers engage with the client, conduct assessments, diagnose conditions, recommend treatments, and provide medical advice.'
              }
              listText1={'Virtual consultation or visit your provider in person.'}
              listText2={
                'Discuss your health concerns, receive medical advice, and ask any questions you may have.'
              }
            />
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <HowItWorksBenefits
            image={'/Rectangle34624354.png'}
            header={'THE BENEFITS OF JOINING CARELYO AS A PROVIDER'}
            checkmarkboxheader1={'Expanded Reach and Patient Base'}
            checkmarkboxparagraph1={
              'Reach a larger pool of potential patients, including those who prefer the convenience of online consultations. '
            }
            checkmarkboxheader2={'Easy Appointment Management'}
            checkmarkboxparagraph2={
              'Through the integrated scheduling system, you can effortlessly manage and organize appointments, set availability, and view upcoming consultations. '
            }
            checkmarkboxheader3={'Synchronized Patient Communication'}
            checkmarkboxparagraph3={
              "Communication between providers and patients using the platform's you can interact with patients before, during, and after consultations."
            }
          />
        </div>

        <div className="supercharge hidden lg:flex justify-center">
              <SuperCharge />
            </div>
            <div className="superChargeMobile lg:hidden">
              <SuperChargeMobile />
            </div>
        
      </div>
    </>
  )
}
