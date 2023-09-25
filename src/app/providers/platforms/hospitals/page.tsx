import Image from "next/image";
import SuperCharge from "../../Components/superCharge";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined";
import WhychooseCarelyo from "../../Components/whyChooseCarelyo";

export default function Hospitals() {
  return (
    <div>
      <div className=" flex justify-end ">
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
          <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center text-[40px] md:text-2xl lg:text-3xl whitespace-normal ">
                <span className="text-greenText whitespace-normal font-semibold">
                  Empowering Hospitals
                </span>{" "}
                for Better <br /> Healthcare with Carelyo
              </h1>
            </div>
            <div className="w-[921px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                Joining Carelyo as a hospital brings a multitude of advantages
                and benefits that can transform the way you provide healthcare
                services.
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
            icon2text="Verification and Validation"
            icon3text="Schedule Management"
            icon4text="Starts Accepting Patients"
            imageSrc="/hospitalentry.jpg"
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
      </div>

      <WhychooseCarelyo
        image={"/enhanceefficancy.jpg"}
        header={"Enhancing Efficiency and Quality of Care"}
        paragraph={"By embracing Carelyo's platform, hospitals can unlock numerous advantages that lead to improved efficiency and quality of care. Join Carelyo today and experience the power of a comprehensive platform designed to elevate your hospital's operations, streamline workflows, and provide exceptional care to your patients. Together, let's shape the future of healthcare."}
        buttonsText={"Join Carelyo"}
        reverseDirection={true}
      />

      <WhoHaveJoinedTamplate
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
