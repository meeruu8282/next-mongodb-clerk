import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox/joinCarelynowintrobox";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined/whoHaveJoined";
import Image from "next/image";
import BlurBackGroundDesign from "../../Components/blurBackGroundDesign";
import ConvinientManagement from "../../Components/convinientManagement";
import CarleyoProvides from "../../Components/carleyoProvides/carleyoProvides";
import FirstTextinplatform from "../../Components/firstTextinplatform";
import style from './clinics.module.css'
import SuperCharge from "../../Components/superCharge";
import SeamlessAppointmentManagement from "./seamlessApointmentManagement";

const Clinics = () => {
  return (
    <div className="">
      {/* code for green tamplate funktions is in componentsdolder*/}
      <BlurBackGroundDesign />

      <div className="  flex  justify-end mt-20">
        <div className=" relative w-screen h-auto mt-15">

           {/* Use firstTextinplatform-component in componentsfolder and send in your costomised props to the tamplate */}
          <FirstTextinplatform
            headerBlackText1={"Boost Your"}
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

    
      <SeamlessAppointmentManagement 
      image1={"/Superchargehead.png"} 
      image2={"/Superchargebody.png"} 
      image3={"/LargeCheckTable.png"} 
      header={"Seamless Appointment Management"} 
      paragraph={"Our intuitive interface allows you to efficiently manage appointments, allocate resources, and eliminate scheduling conflicts. Visualize your clinic's daily schedule with a user-friendly calendar view."} 
      textbutton={"Manage your appointment"}/>

      {/* Green background container, some of the css in background is in global */} 
      <div className="greenBackground flex justify-center items-center w-screen  max-h-[647px] mt-20 ">
        {/* Corner triangle */}
        <div className="absolute right-0 top-0 z-[-1]">
          <div
            className="greenBackgroundTriangle"
      
            
            style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)" }} //Style change how much of a square has to be cut out to create a triangle
          ></div>
        </div>
        {/* Circle div overlapping the container */}
        <div className="greenCircleContainer z-[-1]">
          <div
            className="greenCircle "
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 24%, 0% 24%)" }}
          ></div>
        </div>



        {/* Centralized Patient Records*/}
        <div className={` absolute flex  ${style.changetextcenter} flex-row  max-w-[1192px] w-screen max-h-[484px]  h-auto gap-[80px] `}>
          <CarleyoProvides
            header={"Centralized Patient Records"}
            paragraph={
              "Carelyo provides a secure and centralized repository for all patient information. Digitize and organize patient records in one place, streamlining your workflow"
            }
            checktext1={"Secure repository patient information"}
            checktext2={
              "Access medical records, treatment plans, and lab results"
            }
            checktext3={
              "Quick & accurate access to patient data during consultations."
            }
            buttontext={"Organize Patient Record"}
          />

          <div className={`absolute ${style.hidegreenbackgroundimg} h-auto right-0 w-[521px] max-h-[484px]`}>
            <div className="greenCircleContainer opacity-[25%] left-10 w-[52px] h-[52px] top-0 z-[-1]">
              <div
                className="greenCircle  bg-[#45AC60]  w-[100px]  h-[100px] "
                style={{ clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)" }}
              ></div>
            </div>

            <div className="  bottom-0 w-[521px] h-[472px] top-[12px]  ">
              <div className=" absolute w-[460px] h-[472px]  right-0  rounded-[85px] ">
                <Image
                  className=""
                  layout="fixed "
                  fill
                  src="/centrelizedPatient.png"
                  alt="Cecktable"
                />
              </div>
            </div> 
             {/* in componens folder*/}
            <ConvinientManagement text="Convenient Records Feature" /> 
          </div> 
        </div>
      </div>

      {/* add/remove props for Tamplate in components folder change the content below   */}
      <WhoHaveJoinedTamplate
        greenHeaderpart={"500+ Clinics"}
        blackHeaderpart={"Who Have Joined"}
        imageSrc1={"/Dentist.jpg"}
        imageSrc2={"/rehab.jpg"}
        imageSrc3={"/DrThamson.jpg"}
        imageHeader1={"Happy Smiles Dental Clinic"}
        imageHeader2={"Elite Physiotherapy Center"}
        imageHeader3={"Serenity MentalHealth Clinic"}
        titleParagraph1={"Dentistry"}
        titleParagraph2={"Physiotherapy"}
        titleParagraph3={"Mental Health"}
        infoParagraph1={
          "At Happy Smiles Dental Clinic, we believe in creating healthy and beautiful smiles"
        }
        infoParagraph2={
          "Specializes in providing expert physiotherapy services to help patients"
        }
        infoParagraph3={
          "Compassionate environment for individuals seeking mental health services"
        }
      />
      {/*componentsfolder */}
      <SuperCharge/>
    </div>
  );
};

export default Clinics;
