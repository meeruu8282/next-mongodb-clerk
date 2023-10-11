import CarelyoButton from "../../Components/getStartedButton";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox/joinCarelynowintrobox";
import Keypointsbox from "../../Components/keypointsbox";
import SuperCharge from "../../Components/superCharge";
import Image from "next/image";
import WhychooseCarelyo from "../../Components/whyChooseCarelyo";
import BlurBackGroundDesign from "../../Components/blurBackGroundDesign";
import FirstTextinplatform from "../../Components/firstTextinplatform";

export default function Pharmacies() {
  return (
    <div className="">
    <BlurBackGroundDesign />

    <div className="  flex  justify-end mt-20">
      <div className=" relative w-screen h-auto mt-15">
        <FirstTextinplatform
          headerGreenText1={"Efficient"}
          headerBlackText2={"and Customer-Centric"}
          headerGreenText2="Pharmacy Management"
          headerBlackText3="with Carelyo"
          
          headerBlackText4=""
          paragraph1={
            "Platform dedicated to revolutionizing pharmacy services and enhancing efficiency in medication management."
          }
        />

        
          {/* Use joincarelynowintrobox-component in componentsfolder and send in your costomised props to the tamplate */}
          <JoinCarelynowintrobox
            icon1="/profileicon.svg"
            icon2="/exclamationicon.svg"
            icon3="/agreementicon.svg"
            icon4="/searchicon.svg"
            icon1text="Sign-Up and Profile Creation"
            icon2text="Provide Pharmacy Information"
            icon3text="Agree to Terms and Conditions"
            icon4text="Verification and Approval"
            imageSrc="/pharmacy.jpg"
          />
        </div>
      </div>

      <div className=" relative  w-[1192px] h-[120px] left-[125px] gap-[142px] ">
        <div className=" absolute left-0 w-[526px] h-[120px]">
          <h1 className="  text-[Poppins] h-[120px] text-[40px] font-400 tracking-tight text-left leading-60  ">
            Here are the key points you can expect from Carelyo
          </h1>
        </div>
        <div className=" absolute w-[524px] items-center h-[120px] justify-center right-0 ">
          <p className=" text-[Poppins] h-[120px] flex items-center text-[20px] weight-400 tracking-tight opacity-50 right-0 text-left leading-60">
            With Carelyo, we provide a comprehensive solution to streamline your
            pharmacy operations and improve patient care.
          </p>
        </div>
      </div>

      <div className=" relative flex-row flex justify-center items-center w-[1191px] h-[316px] left-[125px] gap-[24px] mt-20 ">
        <Keypointsbox
          icon={"/Medicinepill.svg"}
          header={"Drug Stock Tracking"}
          paragraph={
            "Easily track the inventory of medications in your pharmacy, ensuring you are aware of the availability of each drug."
          }
          linkto={"/providers/auth/signIn"}
          linktext={"Explore Now"}
        />
        <Keypointsbox
          icon={"/carticon.svg"}
          header={"Order Management"}
          paragraph={
            "Streamline the process of managing medication orders through Carelyo, enabling efficient procurement and timely delivery to patients."
          }
          linkto={"/providers/auth/signIn"}
          linktext={"Explore Now"}
        />
        <Keypointsbox
          icon={"/expireclock.svg"}
          header={"Expiration Date Monitoring"}
          paragraph={
            "Stay on top of medication expiration dates, helping you identify and manage medications nearing their expiry to ensure patient safety."
          }
          linkto={"/providers/auth/signIn"}
          linktext={"Explore Now"}
        />
      </div>

     
      <WhychooseCarelyo 
        image={"/youhavealotofreasons.jpg"}
        header={"You Have Lots Of Reasons To Choose Us"}
        paragraph={"Join Carelyo and experience the transformative power of our platform in streamlining pharmacy operations, enhancing patient care, and maximizing efficiency. Together, we can create a more seamless and customer-centric pharmacy experience that benefits both healthcare providers and patients alike."}
        buttonsText={"Get Carelyo"}
        

        
      />

      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  );
}
