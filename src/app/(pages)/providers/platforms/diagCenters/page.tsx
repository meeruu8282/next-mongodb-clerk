import BlurBackGroundDesign from '../../Components/blurBackGroundDesign'
import FirstTextinplatform from '../../Components/firstTextinplatform'
import JoinCarelynowintrobox from '../../Components/joinCarelynowintrobox/joinCarelynowintrobox'
import SuperCharge from '../../Components/superCharge'
import WhoHaveJoinedTamplate from '../../Components/whoHaveJoined/whoHaveJoined'
import RobustFeaturesforDiagnostic from './robustFeaturesforDiagnostic'
import Howcarelyocanreinforcecomp from './howcarelyocanreinforcecomp'

export default function DiagCenters() {
  return (
    <div className="">
      {/*code in components folder */}
      <BlurBackGroundDesign />

      <div className="  flex  justify-end mt-20">
        <div className=" relative w-screen h-auto mt-15">
          {/* add/remove props for Tamplate in components folder change the content below   */}
          <FirstTextinplatform
            headerBlackText1={'Strengthening '}
            headerGreenText1={'Diagnostic Centers'}
            headerBlackText2="for Enhanced Efficiency"
            paragraph1={
              'Empower diagnostic centers and streamline their processes, allowing them to provide high-quality services to patients.'
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
            imageSrc="/diagnostic.jpg"
          />
        </div>
      </div>

      {/* Robust Features for Diagnostic Test Management and Tracking */}
      <RobustFeaturesforDiagnostic
        header={'Robust Features for Diagnostic Test Management and Tracking'}
        paragraph={
          "Together, let's revolutionize healthcare and make a positive impact on patient well-being."
        }
        icon1={'/pappericon.svg'}
        header1={'01 Centralized Diagnostic Test Management'}
        paragraph1={
          'Provides a centralized system to manage diagnostic test records, including patient information, test requests, and results.'
        }
        icon2={'/profilewaveicon.svg'}
        header2={'02 Efficient Access to Patient Records'}
        paragraph2={
          'Allows healthcare providers to easily access patient records, enabling quick retrieval of relevant information.'
        }
        icon3={'/calendericon.svg'}
        header3={'03 Streamlined Test Request Management'}
        paragraph3={
          'Can create and track test requests, assign them to appropriate personnel, monitor their progress in real-time.'
        }
        icon4={'/clock.svg'}
        header4={'04 Real-Time Result Tracking'}
        paragraph4={
          'Offers real-time tracking of diagnostic test results, keeping healthcare providers updated on the progress of each test.'
        }
      />

      {/*How Carelyo can reinforce? */}
      <Howcarelyocanreinforcecomp
        image={'/happydoctoroncomputer.png'}
        header={'How Carelyo can reinforce?'}
        checkmarkboxheader1={'Seamless Integration of Diagnostic Equipment'}
        checkmarkboxparagraph1={
          'Carelyo provides seamless connectivity options, allowing you to integrate various diagnostic devices and instruments directly into our system. This integration enhances efficiency in conducting tests and generating results.'
        }
        checkmarkboxheader2={'Accurate and Accessible Test Reports'}
        checkmarkboxparagraph2={
          'Enables you to generate comprehensive and customized reports based on diagnostic test results. These reports can be easily accessed and shared with patients.'
        }
        checkmarkboxheader3={'Improved Collaboration and Communication'}
        checkmarkboxparagraph3={
          'You can securely exchange messages, share files, and collaborate on patient cases, ensuring efficient coordination and a smooth diagnostic workflow.'
        }
      />

      {/* add/remove props for Tamplate in components folder change the content below   */}
      <WhoHaveJoinedTamplate
        greenHeaderpart={'500+ Diagnostic Centers'}
        blackHeaderpart={'Who Have Joined'}
        imageSrc1={'/medlab.jpg'}
        imageSrc2={'/radiance.jpg'}
        imageSrc3={'/pathogen.jpg'}
        imageHeader1={'MedLab Diagnostics'}
        imageHeader2={'Radiance Imaging Center'}
        imageHeader3={'PathoGen Diagnostics'}
        titleParagraph1={'General laboratory diagnostics'}
        titleParagraph2={'Medical imaging services'}
        titleParagraph3={'Molecular diagnostics, genetic testing'}
        infoParagraph1={'Offering a wide range of laboratory tests and screenings.'}
        infoParagraph2={
          'Specialized diagnostic center focused on advanced medical imaging services.'
        }
        infoParagraph3={
          'Offering comprehensive genetic testing and infectious disease screenings.s.'
        }
      />
      {/* Code in components folder then superCarge */}
    </div>
  )
}
