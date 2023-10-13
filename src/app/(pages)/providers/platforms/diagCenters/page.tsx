import BlurBackGroundDesign from "../../Components/blurBackgrounddesign/blurBackGroundDesign";
import FirstTextinplatform from "../../Components/firstTextinplatform";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox/joinCarelynowintrobox";
import SuperCharge from "../../Components/superCharge/superCharge";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined/whoHaveJoined";

export default function DiagCenters() {
  return (
    <div className="">
    <BlurBackGroundDesign />

    <div className="  flex  justify-end mt-20">
      <div className=" relative w-screen h-auto mt-15">
        <FirstTextinplatform
          headerBlackText1={"Strengthening "}
          headerGreenText1={"Diagnostic Centers"}
          headerBlackText2="for Enhanced Efficiency"
       
          paragraph1={
            "Empower diagnostic centers and streamline their processes, allowing them to provide high-quality services to patients."
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
      <WhoHaveJoinedTamplate
        greenHeaderpart={"500+ Diagnostic Centers"}
        blackHeaderpart={"Who Have Joined"}
        imageSrc1={"/medlab.jpg"}
        imageSrc2={"/radiance.jpg"}
        imageSrc3={"/pathogen.jpg"}
        imageHeader1={"MedLab Diagnostics"}
        imageHeader2={"Radiance Imaging Center"}
        imageHeader3={"PathoGen Diagnostics"}
        titleParagraph1={"General laboratory diagnostics"}
        titleParagraph2={"Medical imaging services"}
        titleParagraph3={"Molecular diagnostics, genetic testing"}
        infoParagraph1={"Offering a wide range of laboratory tests and screenings."}
        infoParagraph2={"Specialized diagnostic center focused on advanced medical imaging services."}
        infoParagraph3={"Offering comprehensive genetic testing and infectious disease screenings.s."}
      />
      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  );
}
