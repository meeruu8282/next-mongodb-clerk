import Image from "next/image";
import SuperCharge from "../../Components/superCharge";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox/joinCarelynowintrobox";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined/whoHaveJoined";
import WhychooseCarelyo from "../../Components/whyChooseCarelyo";
import BlurBackGroundDesign from "../../Components/blurBackGroundDesign";
import CarleyoProvides from "../../Components/carleyoProvides/carleyoProvides";
import ConvinientManagement from "../../Components/convinientManagement";
import FirstTextinplatform from "../../Components/firstTextinplatform";

export default function Hospitals() {
  return (
    <div className="">
    <BlurBackGroundDesign />

    <div className="  flex  justify-end mt-20">
      <div className=" relative w-screen h-auto mt-15">

        <FirstTextinplatform

          headerGreenText1={"Empowering Hospitals"}
          headerBlackText2={"for Better Healthcare with Carelyo"}
          paragraph1={
            "Joining Carelyo as a hospital brings a multitude of advantages and benefits that can transform the way you provide healthcare services."
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

      {/* Green background container */}  {/* Integrated Hospital Management*/}
      <div className="greenBackground w-screen h-[730px] mt-20 ">
        {/* Corner triangle */}
        <div className="absolute right-0 top-0 z-[-1]">
          <div
            className="greenBackgroundTriangle"
            style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)" }}
          ></div>
        </div>
        {/* Circle div overlapping the container */}
        <div className="greenCircleContainer z-[-1]">
          <div
            className="greenCircle top-[83px]  "
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 24%, 0% 24%)" }}
          ></div>
        </div>

        {/* content in Integrated Hospital Management*/}
        <div className=" flex flex-row w-[1192px] h-[484px] left-[125px] top-[82px] gap-[81px]">
          <div className=" relative w-[521px] h-[484px]">
            <div className="greenCircleContainer opacity-[25%] left-10 w-[52px] h-[52px] top-0 z-[-1]">
              <div
                className="greenCircle  bg-sage w-[100px]  h-[100px] "
                style={{ clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)" }}
              ></div>
            </div>

            <div className=" absolute bottom-0 w-[521px] h-[472px] top-[12px]  ">
              <div className=" absolute w-[460px] h-[472px]   rounded-[85px] ">
                <Image
                  className=""
                  layout="fixed "
                  fill
                  src="/integratedHospitol.png"
                  alt="integratedHospitol"
                />
              </div>
            </div>
            <div className=" absolute right-0 w-[294px] h-[74px]">
              {/*tamplate in components folder */}
               <ConvinientManagement text="Convenient Management" />
            </div>

          </div>

            <CarleyoProvides
            header={"Integrated Hospital Management"}
            paragraph={"Carelyo platform provides a comprehensive solution for managing all aspects of your hospital's operations. "}
            checktext1={"Patient admissions and discharge"}
            checktext2={"Medical records and billing"}
            checktext3={"Integrated system simplifies administrative tasks"}
            buttontext={"Manage your hospital"}
          />


        </div>
      </div>

      <WhychooseCarelyo //Tamplate in Components folder
        image={"/enhanceefficancy.jpg"}
        header={"Enhancing Efficiency and Quality of Care"}
        paragraph={"By embracing Carelyo's platform, hospitals can unlock numerous advantages that lead to improved efficiency and quality of care. Join Carelyo today and experience the power of a comprehensive platform designed to elevate your hospital's operations, streamline workflows, and provide exceptional care to your patients. Together, let's shape the future of healthcare."}
        buttonsText={"Join Carelyo"}
        reverseDirection={true}  //makes the tamplate be mirror reversed- reuses tamplate code but changes design, mutch less code
      />



      <WhoHaveJoinedTamplate //Tamplate in Components folder
        greenHeaderpart={"15+ Hospitals"}
        blackHeaderpart={"Who Have Joined"}
        imageSrc1={"/Dentist.jpg"}
        imageSrc2={"/rehab.jpg"}
        imageSrc3={"/DrThamson.jpg"}
        imageHeader1={"Harmony Medical Center"}
        imageHeader2={"Serenity Hospital"}
        imageHeader3={"Ciputra Hospital"}
        titleParagraph1={"General Medicine, Surgery, Pediatrics"}
        titleParagraph2={"Cardiology, Orthopedics, Neurology"}
        titleParagraph3={"Obstetrics and Gynecology, Dermatology"}
        infoParagraph1={
          "Healthcare providing comprehensive medical services to patients."
        }
        infoParagraph2={
          "Renowned healthcare facility its commitment to excellence in patient care."
        }
        infoParagraph3={
          "Healthcare institution that prioritizes patient well-being and comfort."
        }
      />
      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  );
}
