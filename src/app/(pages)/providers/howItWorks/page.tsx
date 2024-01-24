import Image from "next/image";
import SuperCharge from "../Components/superCharge";
import HowItWorksPartFive from "./howItWorksPartFive";
import HowItWorksPartOne from "./HowItWorksPartOne";

import HowItWorksBenefits from "./HowItWorksBenefits";
import "./howitwork.css";
import BlurBackGroundDesign from "../Components/blurBackGroundDesign";
import HowItWorksWelcome from "./HowItWorksWelcome";
import HowItWorksGreenbackground from "./HowItWorksGreenbackground";
import HowItWorksPartFour from "./HowItWorksPartFour";


export default function Howitwork() {
  return (



    <div className=" w-screen justify-center items-center">
      <BlurBackGroundDesign />
      <div className="w-full flex justify-center items-center mb-12">
        <HowItWorksWelcome
          welcomeText={"Welcome to Carelyo 👋"}
          text1={"Healthcare Platform for Providers!"}
          text2={"Are you an independent doctor, family physician, or managing a small to medium-sized clinic or hospital? We at Carelyo are here for you!"}
          textButton1={"Get Started"}
          textButton2={"Discover More"}
          imageSrc={"/firstpageRec.png"}
        />
      </div>


      <div className="w-full flex justify-center items-center">
        <HowItWorksGreenbackground
          heading1={"Who Can Become a"}
          heading1Bold={"Carelyo Health Provider?"}
          heading2={"Carelyo welcomes a wide range of healthcare professionals and institutions to join as providers on our platform. "}
          title1={"Self-Employed Doctors"}
          text1={"If you are a self-employed doctor running your own practice, Carlo offers you the opportunity to expand your reach with online"}
          buttonText1={"Join Carelyo"}
          imageSrc1={"/Ellipse_11520.svg"}
          title2={"Clinics and Hospitals"}
          text2={"By joining Carelyo, you can streamline your appointment booking process, enhance patient communication, and improve overall efficiency."}
          imageSrc2={"/image-r.svg"}
          title3={"Diagnostic Laboratory Centers"}
          text3={"Carelyo offers to seamlessly connect with referring healthcare providers, share test results securely, and ensure timely communication for better patient care."}
          imageSrc3={"/image587.png"}
          buttonText2={"Get Carelyo"}
          title4={"Pharmacy"}
          text4={"By joining, you can simplify medication management, & enhance collaboration with healthcare providers."}
          imageSrc4={"/Ellipse11520.svg"}
        />
      </div>




      <div className="w-full md:w-[737px] h-[60px] mt-[100px] justify-center flex items-center">
        <h1 className="font-[Poppins] font-semibold text-[40px]">
          An easier way to interact with patient
        </h1>
      </div>

      <div className="flex border border-blue-500 ">
        <div className="leftside-of-howitwork w-full  flex flex-col items-center mt-[100px] border border-yellow-400   relative">
          <div className="bg-red-300 flex items-center justify-center w-[185px] h-[66px] mb-[20px] pr-1 border ">
            <div className="w-[66px] h-[66px]">
              <Image
                layout="fixed"
                width={66}
                height={66}
                src="/E11538.svg"
                alt=""
              />
            </div>
            <div className="w-[94px] h-[30px] items-center">
              <div className="font-[Poppins] font-normal">Providers</div>
            </div>
          </div>

       

       
       
          <HowItWorksPartOne 
           hashtagNumber={"#1"} 
           header={" Registration & Profile Creation"} 
           imageSrc={"/iPadPro.png"}
           text1={"Registering as healthcare service providers."} 
           text2={"Create a comprehensive profile by entering their personal information"}/>
          

          

          <div className="absolute right-[60px] top-[732px] transform -translate-y-[50%]">
            <Image
              className="  "
              layout="fixed"
              width={42}
              height={204}
              src="/Vector677.svg"
              alt="677"
              priority
            />
          </div>

          <div className="w-[597px] h-[575.94px] ml-[130px] justify-center  mt-[715px]">
            <div className="flex justify-center items-center w-[552px] h-[60px]">
              <div className=" w-[58px] h-[60px]">
                <div className="font-[Poppins] font-semibold text-[40px] text-[#45AC60] leading-[60px] ">
                  #2
                </div>
              </div>
              <div className=" items-center w-[475px] h-[48px]">
                <div className=" font-[Poppins] font-medium text-[32px] leading-[48px] ">
                  Listing Services and Availability
                </div>
              </div>
            </div>

            <div className="w-[597] h-[66px] ml-5">
              <div className=" font-[Poppins] text-[20px] leading-[32px] tracking-tighter opacity-50">
                List the healthcare services they offer on their profile page.
                Shares their clinic.carelyo.io website with patient
              </div>
            </div>
            <div className=" absolute justify-centerw-[554px] h-[425px] border-[2px] border-[#45AC60] rounded-[25px] flex items-center mt-5 right-[110px]">
              <div className="w-[518.74px] h-[394.39px] ">
                <div>
                  <Image
                    className=" absolute   "
                    layout="fixed"
                    width={518.74}
                    height={394.39}
                    src="/Group 1000005951 1 (1).svg"
                    alt="add service"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[431px] h-[60px] flex  justify-center items-center font-semibold font-[Poppns]">
            <div>
              <h1 className="w-[61px] h-[60px] text-[40px] items-center text-[#45AC60]">
                {" "}
                #5
              </h1>
            </div>
            <div>
              <h1 className="w-[351px] h-[48px] text-[32px]">
                Consultation and Care
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center  ">
          <Image
            className="  bg-[#45AC600D] h-[2111px] w-[1px] border-[1px] mt-[100px]  item-center "
            layout="fixed"
            width={66}
            height={66}
            src="/E11539.svg"
            alt=""
          />
        </div>

        <div className="right side  w-full  bg-blue-500 ">
          <div className=" flex justify-center   ">
            <div className="flex justify-center">
              <div className=" flex  items-center justify-between w-[185px] h-[66px] mt-[100px]  border  ">
                <div className="">
                  <Image
                    layout="fixed"
                    width={66}
                    height={66}
                    src="/E11539.svg"
                    alt=""
                    priority
                  />
                </div>
                <div className="w-[94px] h-[30px] items-center">
                  <div className="font-[Poppins] font-normal">Patient</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className=" w-full flex justify-center items-center">
        <div className="w-[100%] ">
          <HowItWorksPartFive
            hashtagNumber={"#5"}
            header={"Consultation and Care"}
            imageSrc1={"/ipadimagehowItWorks708.png"}
            imageSrc2={"/mobilePhonehowitworksimage707.png"}
            text1={"During the consultation, providers engage with the client, conduct assessments, diagnose conditions, recommend treatments, and provide medical advice."}
            text2={"Virtual consultation or visit your provider in person. Discuss your health concerns, receive medical advice, and ask any questions you may have."}
          />
        </div>

      <div className="flex">
      <HowItWorksPartFour 
      hashtagNumber={"#4"}
       header={"Appointment Booking"} 
       imageSrc={"/drsamuel.jpg"} 
       text1={`Select the "See a Doctor" option to schedule an appointment.`} 
       text2={"Choose a convenient date and time for your appointment."}/>
      </div>







      <div className="w-full flex justify-center items-center mt-8">
        <HowItWorksBenefits
          image={"/Rectangle34624354.png"}
          header={"THE BENEFITS OF JOINING CARELYO AS A PROVIDER"}
          checkmarkboxheader1={"Expanded Reach and Patient Base"}
          checkmarkboxparagraph1={"Reach a larger pool of potential patients, including those who prefer the convenience of online consultations. "}
          checkmarkboxheader2={"Easy Appointment Management"}
          checkmarkboxparagraph2={"Through the integrated scheduling system, you can effortlessly manage and organize appointments, set availability, and view upcoming consultations. "}
          checkmarkboxheader3={"Synchronized Patient Communication"}
          checkmarkboxparagraph3={"Communication between providers and patients using the platform's you can interact with patients before, during, and after consultations."}
        />
      <div className=" w-full flex justify-center items-center">
        <div className="w-[100%] ">
          <HowItWorksPartFive
            hashtagNumber={"#5"}
            header={"Consultation and Care"}
            imageSrc1={"/ipadimagehowItWorks708.png"}
            imageSrc2={"/mobilePhonehowitworksimage707.png"}
            text1={"During the consultation, providers engage with the client, conduct assessments, diagnose conditions, recommend treatments, and provide medical advice."}
            text2={"Virtual consultation or visit your provider in person. Discuss your health concerns, receive medical advice, and ask any questions you may have."}
          />
        </div>
      </div>








      <div className="w-full flex justify-center items-center mt-8">
        <HowItWorksBenefits
          image={"/Rectangle34624354.png"}
          header={"THE BENEFITS OF JOINING CARELYO AS A PROVIDER"}
          checkmarkboxheader1={"Expanded Reach and Patient Base"}
          checkmarkboxparagraph1={"Reach a larger pool of potential patients, including those who prefer the convenience of online consultations. "}
          checkmarkboxheader2={"Easy Appointment Management"}
          checkmarkboxparagraph2={"Through the integrated scheduling system, you can effortlessly manage and organize appointments, set availability, and view upcoming consultations. "}
          checkmarkboxheader3={"Synchronized Patient Communication"}
          checkmarkboxparagraph3={"Communication between providers and patients using the platform's you can interact with patients before, during, and after consultations."}
        />
      </div>








      <div className="">
        <SuperCharge />
      </div>
    </div>
  );
}
