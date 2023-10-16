import Link from "next/link";
import CarelyoButton from "../../Components/getStartedButton";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox/joinCarelynowintrobox";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined/whoHaveJoined";
import Image from "next/image";
import BlurBackGroundDesign from "../../Components/blurBackGroundDesign";
import ConvinientManagement from "../../Components/convinientManagement";
import CarleyoProvides from "../../Components/carleyoProvides/carleyoProvides";
import FirstTextinplatform from "../../Components/firstTextinplatform";
import style from './clinics.module.css'
import SuperCharge from "../../Components/superCharge";

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

      {/* All media queries are imported from clinic.module.css by using style.nameofmediaquery  */}
       {/* Seamless Appointment Management component, maybe change to tamplate? */}
      <div className={` relative  flex flex-row w-screen justify-between ${style.centertext}  items-center  h-[680px] mt-40  `}>
        <div className={` absolute  h-[100%] w-[100%] ${style.changeabsolute} ${style.hidingimages} left-[125px] max-w-[501px] max-h-[556.79px]  `}>
          <div className=" absolute bottom-0 w-[100%] h-[100%] max-h-[481px] max-w-[501px] rounded-[25px] bg-[#FAFAFA]"></div>
          
          <div className="  max-w-[501px] max-h-[556.79px] w-[100%] h-auto bottom-0  ">
            <Image
              className=" absolute "
              layout="fixed "
              width={501}
              height={501}
              src="/Superchargehead.png"
              alt="Superchargehead"
            />
            <Image
              className="absolute  bottom-0"
              layout="fixed "
              width={501}
              height={501}
              src="/Superchargebody.png"
              alt="Superchargebody"
            />
          </div>
        </div>
        <div className={` absolute flex  flex-col h-auto   max-w-[514px] ${style.changeabsolute} ${style.textboxdesign} right-[40px] gap-[32px] `}>
          <div className="    h-auto  w-full gap-[24px] ">
            <div className="  top-0 w-full h-full">
              <h1 className=" text-[Poppins] text-[40px] font-normal leading-60 tracking-tighter text-left">
                Seamless Appointment Management
              </h1>
            </div>
            <div className="  bottom-0 w-full h-full opacity-[50%]">
              <p className="text-[poppins] text-[20px] font-normal leading-32 tracking-tighter text-left text-[#000000]">
                Our intuitive interface allows you to efficiently manage
                appointments, allocate resources, and eliminate scheduling
                conflicts. Visualize your clinic's daily schedule with a
                user-friendly calendar view.
              </p>
            </div>
             <div className={` mt-[30px] h-[72px]  ${style.buttonsize}`}>
             <Link href="/providers/pricing" passHref>
            <CarelyoButton
              buttonText="Manage your appointment"
              className={` absolute bottom-0 w-[308px] ${style.buttonsize} mb-1  h-[72px]  gap-[12px] text-[16px] font-semibold line-h-22.4`}
            />
          </Link>
          </div>
          </div>
         
         
        </div>

        {/* Practice Schedule img */}
        <div className={` ${style.hidingimage} bg-red-500 absolute w-[382px] h-[264px] left-[339px]  top-[400px] `}>
          <div className=" absolute flex justify-center items-center w-[382px] h-[264px] rounded-[25px] bg-[#FFFFFF] shadow-2xl ">
            <Image
              className=""
              layout="fixed "
              width={300}
              height={234}
              src="/LargeCheckTable.png"
              alt="Cecktable"
            />
          </div>
        </div>
      </div>

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
        <div className={` bg-red-600 absolute flex  ${style.changetextcenter} flex-row  max-w-[1192px] w-screen max-h-[484px]  h-auto gap-[80px] `}>
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
