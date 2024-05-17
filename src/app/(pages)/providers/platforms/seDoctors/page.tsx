import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarelyoButton from '../../Components/getStartedButton'
import EllipseBackground from '../../Components/ellipseBackground'
import SuperCharge from '../../Components/superCharge'
import JoinCarelynowintrobox from '../../Components/joinCarelynowintrobox/joinCarelynowintrobox'
import WhoHaveJoinedTamplate from '../../Components/whoHaveJoined/whoHaveJoined'
import BlurBackGroundDesign from '../../Components/blurBackGroundDesign'
import FirstTextinplatform from '../../Components/firstTextinplatform'
import SeDoctorsGreenSection from './seDoctorsGreenSection'
import SeDoctorsGreenSectionMobile from './seDoctorsGreenSectionMobile'
import Navbar from '../../Components/NavBar/navbar'
import NavbarMobile from '../../Components/NavBar/NavbarMobile'
import SuperChargeMobile from '../../Components/superCharge/SuperChargeMobile'
export default function Sedoctors() {
  return (
    <div className="">
      <div className="  max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>
      <BlurBackGroundDesign />

      <div className="  flex  justify-end mt-20">
        <div className=" relative w-screen h-auto mt-15">
          <FirstTextinplatform
            headerBlackText1={'Joining Carelyo as a'}
            headerGreenText1={'Self-Employed Doctors'}
            headerBlackText2="comes with numerous advantages"
            paragraph1={
              'With our innovative features and comprehensive support, we aim to empower your practice and enhance patient care.'
            }
          />

          {/* Use joincarelynowintrobox-component in componentsfolder and send in your costomised props to the tamplate */}
          <JoinCarelynowintrobox
            icon1="/profileicon.svg"
            icon2="/searchicon.svg"
            icon3="/calendericon.svg"
            icon4="/chatbubbleicon.svg"
            icon1text="Sign-Up and Profile Creation"
            icon2text="Verification and Validation"
            icon3text="Schedule Management"
            icon4text="Starts Accepting Patients"
            imageSrc="/heartdoctor.png"

            // ... other props for section of tamplate
          />
        </div>
      </div>

      <div className="HideMobileMode h-screen sm:block hidden">
        <SeDoctorsGreenSection
          header={'Here are the key benefits you can enjoy'}
          text={
            'Joining Carelyo as a self-employed doctor comes with numerous advantages that can enhance your practice and provide a seamless experience for both you and your patients.'
          }
          checkmarkboxheader1={'Empowered Patient Outreach'}
          checkmarkboxparagraph1={'Reaching More Patients Than Ever Before'}
          checkmarkboxheader2={'Fortified Messaging Network'}
          checkmarkboxparagraph2={'Secure Communication Channels'}
          checkmarkboxheader3={'Efficient Documentation Management'}
          checkmarkboxparagraph3={'Streamlined Patient History & Documentation'}
          checkmarkboxheader4={'Efficient Scheduling Solution'}
          checkmarkboxparagraph4={'Convenient Appointment Management'}
        />
      </div>

      <div className="ShowMobileMode h-screen sm:hidden block">
        <SeDoctorsGreenSectionMobile
          header={'Here are the key benefits you can enjoy'}
          text={
            'Joining Carelyo as a self-employed doctor comes with numerous advantages that can enhance your practice and provide a seamless experience for both you and your patients.'
          }
          checkmarkboxheader1={'Empowered Patient Outreach'}
          checkmarkboxparagraph1={'Reaching More Patients Than Ever Before'}
          checkmarkboxheader2={'Fortified Messaging Network'}
          checkmarkboxparagraph2={'Secure Communication Channels'}
          checkmarkboxheader3={'Efficient Documentation Management'}
          checkmarkboxparagraph3={'Streamlined Patient History & Documentation'}
          checkmarkboxheader4={'Efficient Scheduling Solution'}
          checkmarkboxparagraph4={'Convenient Appointment Management'}
        />
      </div>

      {/* use WhoHavejoinedtamplate in componentsfolder and send in your costomised props to the tamplate or cgange content below  */}

      <WhoHaveJoinedTamplate
        greenHeaderpart={'10k+ Doctors'}
        blackHeaderpart={'Who Have Joined'}
        imageSrc1={'/DrSarah.jpg'}
        imageSrc2={'/DrJohnSmith.jpg'}
        imageSrc3={'/DrThamson.jpg'}
        imageHeader1={'Dr. Sarah Aulia'}
        imageHeader2={'Dr. John Smith'}
        imageHeader3={'Dr. Thamson'}
        titleParagraph1={'Primary Care Physician'}
        titleParagraph2={'Cardiologist'}
        titleParagraph3={'Primary Care Physician'}
        infoParagraph1={'Highly experienced primary care physician with over 20 years of practice.'}
        infoParagraph2={
          'Renowned cardiologist specializing in the diagnosis & treatment of heart conditions.'
        }
        infoParagraph3={'Medical center with cutting-edge technology and a team professionals. '}
      />
      {/* Code in components folder then superCarge */}
 <div className="supercharge hidden lg:flex justify-center">
              <SuperCharge />
            </div>
            <div className="superChargeMobile lg:hidden">
              <SuperChargeMobile />
            </div>  </div>
  )
}
