import Image from "next/image";
import SuperCharge from "../../Components/superCharge/superCharge";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox/joinCarelynowintrobox";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined/whoHaveJoined";
import BlurBackGroundDesign from "../../Components/blurBackgrounddesign/blurBackGroundDesign";
import CarleyoProvides from "../../Components/carleyoProvides/carleyoProvides";
import ConvinientManagement from "../../Components/convinientManagement";
import FirstTextinplatform from "../../Components/firstTextinplatform";

export default function LabCenters() {
  return (
    <div className="">
    <BlurBackGroundDesign />

    <div className="  flex  justify-end mt-20">
      <div className=" relative w-screen h-auto mt-15">
        <FirstTextinplatform
          headerGreenText1={"Unleash"}
          headerBlackText2={"the Potential of Your"}
          headerGreenText2="Laboratory Center"
          headerBlackText3="with Carelyo"
          
          headerBlackText4=""
          paragraph1={
            "By joining Carelyo, you can unlock a world of opportunities to streamline your workflows, optimize resource management, and provide exceptional patient care."
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



       {/* Green background container */}
       <div className="greenBackground w-screen h-[647px] mt-20 ">
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
            className="greenCircle "
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 24%, 0% 24%)" }}
          ></div>
        </div>

        <div className=" flex flex-row w-[1192px] h-[484px] left-[125px] top-[82px] gap-[81px]">
          <CarleyoProvides
            header={"Revolutionize your laboratory center's with Carelyo"}
            paragraph={"Look no further than Carelyo, the leading platform designed specifically for laboratory centers."}
            checktext1={"Sample management and test result tracking"}
            checktext2={"Communication and integrated reporting"}
            checktext3={"Enhance efficiency, accuracy, and collaboration within laboratory center."}
            buttontext={"Join us today"}
          />

          <div className=" relative w-[521px] h-[484px]   ">
            <div className="greenCircleContainer opacity-[25%] left-10 w-[52px] h-[52px] top-0 z-[-1]">
              <div
                className="greenCircle  bg-[#45AC60] w-[100px]  h-[100px] "
                style={{ clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)" }}
              ></div>
            </div>

            <div className=" absolute bottom-0 w-[521px] h-[472px] top-[12px]  ">
              <div className=" absolute w-[460px] h-[472px]  right-0  rounded-[85px] ">
                <Image
                  className=""
                  layout="fixed "
                  fill
                  src="/revolutionize.png"
                  alt="Cecktable"
                />
              </div>
            </div>
            <ConvinientManagement text="Convenient Management" />
          </div>
        </div>
      </div>
     




      <WhoHaveJoinedTamplate
        greenHeaderpart={"2000+ Laboratory Centers"}
        blackHeaderpart={"Who Have Joined"}
        imageSrc1={"/bioLab.jpg"}
        imageSrc2={"/precisionlab.jpg"}
        imageSrc3={"/healthquest.jpg"}
        imageHeader1={"BioLab Diagnostics"}
        imageHeader2={"Precision Lab Solutions"}
        imageHeader3={"HealthQuest Laboratories"}
        titleParagraph1={"Clinical Pathology & Molecular Diagnostics"}
        titleParagraph2={"Pathology and Genetic Testing"}
        titleParagraph3={"Hematology and Microbiology"}
        infoParagraph1={"Providing accurate and reliable diagnostic testing services"}
        infoParagraph2={"Delivering high-quality testing solutions for healthcare professionals and patients."}
        infoParagraph3={"Delivering high-quality testing solutions for healthcare professionals and patients."}
      />
      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  );
}
