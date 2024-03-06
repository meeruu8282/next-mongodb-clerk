import SuperCharge from '../../Components/superCharge'
import JoinCarelynowintrobox from '../../Components/joinCarelynowintrobox/joinCarelynowintrobox'
import WhoHaveJoinedTamplate from '../../Components/whoHaveJoined/whoHaveJoined'
import WhychooseCarelyo from '../../Components/whyChooseCarelyo'
import BlurBackGroundDesign from '../../Components/blurBackGroundDesign'
import FirstTextinplatform from '../../Components/firstTextinplatform'
import IntegratedHospitalManagement from '../../Components/integratedHospitalManagement'

export default function Hospitals() {
  return (
    <div>
      <BlurBackGroundDesign />
      <div className=" flex justify-end mt-20">
        <div className="relative w-screen h-auto mt-15">
          <FirstTextinplatform
            headerGreenText1={'Empowering Hospitals'}
            headerBlackText2={'for Better Healthcare with Carelyo'}
            paragraph1={
              'Joining Carelyo as a hospital brings a multitude of advantages and benefits that can transform the way you provide healthcare services.'
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
            imageSrc="/hospitalentry.jpg"
          />
        </div>
      </div>
      <IntegratedHospitalManagement //In Components folder
        image='/integratedHospitol.png'
      />
      <WhychooseCarelyo //Tamplate in Components folder
        image={'/enhanceefficancy.jpg'}
        header={'Enhancing Efficiency and Quality of Care'}
        paragraph={
          "By embracing Carelyo's platform, hospitals can unlock numerous advantages that lead to improved efficiency and quality of care. Join Carelyo today and experience the power of a comprehensive platform designed to elevate your hospital's operations, streamline workflows, and provide exceptional care to your patients. Together, let's shape the future of healthcare."
        }
        buttonsText={'Join Carelyo'}
        reverseDirection={true} //makes the tamplate be mirror reversed- reuses tamplate code but changes design, mutch less code
      />
      <WhoHaveJoinedTamplate //Tamplate in Components folder
        greenHeaderpart={'15+ Hospitals'}
        blackHeaderpart={'Who Have Joined'}
        imageSrc1={'/Dentist.jpg'}
        imageSrc2={'/rehab.jpg'}
        imageSrc3={'/DrThamson.jpg'}
        imageHeader1={'Harmony Medical Center'}
        imageHeader2={'Serenity Hospital'}
        imageHeader3={'Ciputra Hospital'}
        titleParagraph1={'General Medicine, Surgery, Pediatrics'}
        titleParagraph2={'Cardiology, Orthopedics, Neurology'}
        titleParagraph3={'Obstetrics and Gynecology, Dermatology'}
        infoParagraph1={'Healthcare providing comprehensive medical services to patients.'}
        infoParagraph2={
          'Renowned healthcare facility its commitment to excellence in patient care.'
        }
        infoParagraph3={'Healthcare institution that prioritizes patient well-being and comfort.'}
      />
      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  )
}
