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

export default function LabCenters() {
  return (
    <div className="">
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

      {/* Green background container */}
      <div className="greenBackground w-screen h-auto mt-20 ">
        {/* Corner triangle */}
        <div className="absolute right-0 top-0 z-[-1]">
          <div
            className="greenBackgroundTriangle"
            style={{ clipPath: 'polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)' }}
          ></div>
        </div>
        {/* Circle div overlapping the container */}
        <div className="greenCircleContainer z-[-1]">
          <div
            className="greenCircle "
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 24%, 0% 24%)' }}
          ></div>
        </div>

        {/*Revolutionize your laboratory center's with Carelyo contentbelow*/}
        <div className=" my-[85px] px-3 flex flex-row w-full h-auto max-w-[1192px] ">
          {/* Use the tamplate in componentsfolder and send in your costomised props to the tamplate or change content in the tamplate below*/}
          <CarleyoProvides
            header={"Revolutionize your laboratory center's with Carelyo"}
            paragraph={
              'Look no further than Carelyo, the leading platform designed specifically for laboratory centers.'
            }
            checktext1={'Sample management and test result tracking'}
            checktext2={'Communication and integrated reporting'}
            checktext3={'Enhance efficiency, accuracy, and collaboration within laboratory center.'}
            buttontext={'Join us today'}
          />

          <div className=" bg-orange-400   relative flex flex-row justify-end w-[521px] h-auto  ">
            <div className="greenCircleContainer bg-blue-600 opacity-[25%] left-10 w-[52px] h-[52px] top-0 ">
              <div
                className="greenCircle  bg-sage w-[100px]  h-[100px] "
                style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)' }}
              ></div>
            </div>

            <div className=" bg-blue-600 relative flex  justify-end items-end  w-[460px]   h-auto ">
              <Image
                className=" h-auto  w-[460px] "
                layout="responsive "
                fill
                src="/revolutionize.png"
                alt="Cecktable"
              />
              
            </div>
            <div className=" bg-violet-600 absolute top-2/3 left-0 w-auto z-10">
                {/*componentsfolder */}
                <ConvinientManagement text="Convenient Management" />
              </div>
          </div>
        </div>
      </div>

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
