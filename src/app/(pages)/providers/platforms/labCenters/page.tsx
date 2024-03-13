import Image from 'next/image'
import SuperCharge from '../../Components/superCharge'
import JoinCarelynowintrobox from '../../Components/joinCarelynowintrobox/joinCarelynowintrobox'
import WhoHaveJoinedTamplate from '../../Components/whoHaveJoined/whoHaveJoined'
import BlurBackGroundDesign from '../../Components/blurBackGroundDesign'
import CarleyoProvides from '../../Components/carleyoProvides/carleyoProvides'
import ConvinientManagement from '../../Components/convinientManagement'
import FirstTextinplatform from '../../Components/firstTextinplatform'
import Hovertextbox from './hovertextbox'
import JoiningCarelyoEnablesYouto from './joiningCarelyoEnablesYouto'
import style from './labCenter.module.css'
import Revolutionizeyourlaboratory from './revolutionizeyourlaboratory'
import Navbar from '../../Components/NavBar/navbar'
import NavbarMobile from '../../Components/NavBar/NavbarMobile'

export default function LabCenters() {
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
            headerGreenText1={'Unleash'}
            headerBlackText2={'the Potential of Your'}
            headerGreenText2="Laboratory Center"
            headerBlackText3="with Carelyo"
            headerBlackText4=""
            paragraph1={
              'By joining Carelyo, you can unlock a world of opportunities to streamline your workflows, optimize resource management, and provide exceptional patient care.'
            }
          />

          {/* Use joincarelynowintrobox-component in componentsfolder and send in your costomised props to the tamplate */}
          <JoinCarelynowintrobox
            icon1="/profileicon.svg"
            icon2="/searchicon.svg"
            icon3="/calendericon.svg"
            icon4="/chatbubbleicon.svg"
            icon1text="Sign-Up and Profile Creation"
            icon2text="Provide Pharmacy Information"
            icon3text="Verification and Validation"
            icon4text="Managing Laboratory Operations"
            imageSrc="/labratory.jpg"
          />
        </div>
      </div>

      <JoiningCarelyoEnablesYouto
        header={'Joining Carelyo Enables You to:'}
        paragraph={
          "Don't miss out on the transformative power of Carelyo for your laboratory center. Join our platform today and unlock a new era of efficiency, accuracy, and excellence in laboratory services"
        }
        image={'/chemistdoctor.png'}
        header01={'01. Streamline Workflows'}
        paragraph01={
          'Simplify and automate essential processes, reducing manual efforts and eliminating errors. From sample intake to result delivery, experience a seamless workflow that saves time and improves productivity.'
        }
        header02={'02. Optimize Resource Management'}
        paragraph02={
          'Efficiently manage laboratory resources, including equipment, supplies, and personnel. Maximize utilization, minimize wastage, and ensure smooth operations to meet the demands of your growing laboratory center.'
        }
        header03={'03. Enhance Patient Care'}
        paragraph03={
          'Provide patients with accurate and timely test results, enabling faster diagnoses and personalized treatment plans. With Carelyo, you can deliver superior patient experiences, fostering trust and loyalty among your clientele.'
        }
        header04={'04. Foster Collaboration'}
        paragraph04={
          'Collaborate seamlessly with healthcare providers, referring physicians, and patients. Share test results securely, exchange critical information, and facilitate effective communication to deliver comprehensive care.'
        }
      />

      <Revolutionizeyourlaboratory
        header={"Revolutionize your laboratory center's with Carelyo"}
        paragraph={
          'Look no further than Carelyo, the leading platform designed specifically for laboratory centers.'
        }
        checktext1={'Sample management and test result tracking'}
        checktext2={'Communication and integrated reporting'}
        checktext3={'Enhance efficiency, accuracy, and collaboration within laboratory center.'}
        image={'/revolutionize.png'}
        buttontext={'Join us today'}
        whitebubble={'Convenient Management'}
      />

      <WhoHaveJoinedTamplate
        greenHeaderpart={'2000+ Laboratory Centers'}
        blackHeaderpart={'Who Have Joined'}
        imageSrc1={'/bioLab.jpg'}
        imageSrc2={'/precisionlab.jpg'}
        imageSrc3={'/healthquest.jpg'}
        imageHeader1={'BioLab Diagnostics'}
        imageHeader2={'Precision Lab Solutions'}
        imageHeader3={'HealthQuest Laboratories'}
        titleParagraph1={'Clinical Pathology & Molecular Diagnostics'}
        titleParagraph2={'Pathology and Genetic Testing'}
        titleParagraph3={'Hematology and Microbiology'}
        infoParagraph1={'Providing accurate and reliable diagnostic testing services'}
        infoParagraph2={
          'Delivering high-quality testing solutions for healthcare professionals and patients.'
        }
        infoParagraph3={
          'Delivering high-quality testing solutions for healthcare professionals and patients.'
        }
      />
      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  )
}
