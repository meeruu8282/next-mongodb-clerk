import Image from "next/image";
import SuperCharge from "../../Components/superCharge";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined";
import BlurBackGroundDesign from "../../Components/blurBackGroundDesign";

export default function LabCenters() {
  return (
    <div>
      <BlurBackGroundDesign/>
      <div className=" flex justify-end ">
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
          <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center  md:text-2xl lg:text-3xl whitespace-normal ">
                <span className="text-greenText whitespace-normal font-bold">
                  Unleash
                </span>{" "}
                the Potential of Your{" "}
                <span className="text-greenText whitespace-normal font-bold">
                  Laboratory Center
                </span>{" "}
                with Carelyo
              </h1>
            </div>
            <div className="w-[858px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                By joining Carelyo, you can unlock a world of opportunities to
                streamline your workflows, optimize resource management, and
                provide exceptional patient care.
              </p>
            </div>
          </div>
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
      <div className="greenBackground">
        {/* Corner triangle */}
        <div className="absolute right-0 top-0">
          <div
            className="greenBackgroundTriangle"
            style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)" }}
          ></div>
        </div>
        {/* Circle div overlapping the container */}
        <div className="greenCircleContainer">
          <div
            className="greenCircle"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%)" }}
          ></div>
        </div>

        <div className="relative"></div>
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
