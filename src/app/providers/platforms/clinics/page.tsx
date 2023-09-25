import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox";
import WhoHaveJoinedTamplate from "../../Components/whoHaveJoined";
const Clinics = () => {
  return (
    <div>
      <div className=" flex justify-end ">
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
          <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center  md:text-2xl lg:text-3xl whitespace-normal ">
                Boost your{" "}
                <span className="text-greenText whitespace-normal font-bold">
                  Clinic's Efficiency
                </span>{" "}
                and
                <span className="text-greenText whitespace-normal font-bold">
                  {" "}
                  Growth{" "}
                </span>
                with Carelyo
              </h1>
            </div>
            <div className="w-[921px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                Streamline your appointment management, centralize patient
                information, foster collaboration, simplify referral processes,
                and gain valuable insights into your clinic's performance.
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
            imageSrc="/threedoctors.png"
          />
        </div>
      </div>
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
        infoParagraph1={"At Happy Smiles Dental Clinic, we believe in creating healthy and beautiful smiles"}
        infoParagraph2={"Specializes in providing expert physiotherapy services to help patients"}
        infoParagraph3={"Compassionate environment for individuals seeking mental health services"}
      />
    </div>
  );
};

export default Clinics;
