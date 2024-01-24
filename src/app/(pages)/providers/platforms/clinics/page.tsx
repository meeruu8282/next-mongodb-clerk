import JoinCarelynowintrobox from '../../Components/joinCarelynowintrobox/joinCarelynowintrobox'
import WhoHaveJoinedTamplate from '../../Components/whoHaveJoined/whoHaveJoined'
import BlurBackGroundDesign from '../../Components/blurBackGroundDesign'
import FirstTextinplatform from '../../Components/firstTextinplatform'
import SuperCharge from '../../Components/superCharge'
import SeamlessAppointmentManagement from './seamlessApointmentManagement'
import CentralizedPatientRecords from './centralizedPatientRecords'

const Clinics = () => {
  return (
    <div className="">
      {/* code for green tamplate funktions is in componentsdolder*/}
      <BlurBackGroundDesign />

      <div className="  flex  justify-end mt-20">
        <div className=" relative w-screen h-auto mt-15">
          {/* Use firstTextinplatform-component in componentsfolder and send in your costomised props to the tamplate */}
          <FirstTextinplatform
            headerBlackText1={'Boost Your'}
            headerGreenText1={"Clinic's Efficiency"}
            headerBlackText2="and"
            headerGreenText2="Growth"
            headerBlackText3="with Carelyo"
            paragraph1={
              "Streamline your appointment management, centralize patient information, foster collaboration, simplify referral processes, and gain valuable insights into your clinic's performance."
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
            imageSrc="/threedoctors.png"
          />
        </div>
      </div>


      {/* tamplate in clinicfolder there you can add props */} 
      <SeamlessAppointmentManagement
        image1={'/Superchargehead.png'}
        image2={'/Superchargebody.png'}
        image3={'/LargeCheckTable.png'}
        header={'Seamless Appointment Management'}
        paragraph={
          "Our intuitive interface allows you to efficiently manage appointments, allocate resources, and eliminate scheduling conflicts. Visualize your clinic's daily schedule with a user-friendly calendar view."
        }
        textbutton={'Manage your appointment'}
      />

      {/* tamplate in clinicfolder there you can add props */} 
      <CentralizedPatientRecords
        header={'Centralized Patient Records'}
        paragraph={
          'Carelyo provides a secure and centralized repository for all patient information. Digitize and organize patient records in one place, streamlining your workflow'
        }
        checkmarktext1={'Secure repository patient information'}
        checkmarktext2={'Access medical records, treatment plans, and lab results'}
        checkmarktext3={'Quick & accurate access to patient data during consultations.'}
        buttontext={'Organize Patient Record'}
        imagebubbletext={'Convenient Records Feature'}
        image={'/centrelizedPatient.png'}
      />

      {/* add/remove props for Tamplate in components folder change the content below   */}
      <WhoHaveJoinedTamplate
        greenHeaderpart={'500+ Clinics'}
        blackHeaderpart={'Who Have Joined'}
        imageSrc1={'/Dentist.jpg'}
        imageSrc2={'/rehab.jpg'}
        imageSrc3={'/DrThamson.jpg'}
        imageHeader1={'Happy Smiles Dental Clinic'}
        imageHeader2={'Elite Physiotherapy Center'}
        imageHeader3={'Serenity MentalHealth Clinic'}
        titleParagraph1={'Dentistry'}
        titleParagraph2={'Physiotherapy'}
        titleParagraph3={'Mental Health'}
        infoParagraph1={
          'At Happy Smiles Dental Clinic, we believe in creating healthy and beautiful smiles'
        }
        infoParagraph2={'Specializes in providing expert physiotherapy services to help patients'}
        infoParagraph3={'Compassionate environment for individuals seeking mental health services'}
      />
      {/*componentsfolder */}
      <SuperCharge />
    </div>
  )
}

export default Clinics
