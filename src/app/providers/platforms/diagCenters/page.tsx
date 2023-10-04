import BlurBackGroundDesign from "../../Components/blurBackGroundDesign";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox";
import SuperCharge from "../../Components/superCharge";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined";

export default function DiagCenters() {
  return (
    <div>
      <div className=" flex justify-end ">
      <BlurBackGroundDesign/>
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
          <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center  md:text-2xl lg:text-3xl whitespace-normal ">
                Strengthening{" "}
                <span className="text-greenText whitespace-normal font-bold">
                  Diagnostic Centers
                </span>{" "}
                for Enhanced Efficiency
              </h1>
            </div>
            <div className="w-[858px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                Empower diagnostic centers and streamline their processes,
                allowing them to provide high-quality services to patients.
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
