import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox/joinCarelynowintrobox";
import Keypointsbox from "../../Components/keypointsbox";
import SuperCharge from "../../Components/superCharge";
import WhychooseCarelyo from "../../Components/whyChooseCarelyo";
import BlurBackGroundDesign from "../../Components/blurBackGroundDesign";
import FirstTextinplatform from "../../Components/firstTextinplatform";
import KeyPoints from "./KeyPoints";

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

      <KeyPoints header={"Here are the key points you can expect from Carelyo"}
       text={"With Carelyo, we provide a comprehensive solution to streamline your pharmacy operations and improve patient care."}
        checkmarkboxheader1={"Drug Stock Tracking"} 
        checkmarkboxparagraph1={"Easily track the inventory of medications in your pharmacy, ensuring you are aware of the availability of each drug."} 
        checkmarkboxheader2={"Order Management"} 
        checkmarkboxparagraph2={"Streamline the process of managing medication orders through Carelyo, enabling efficient procurement and timely delivery to patients."} 
        checkmarkboxheader3={"Expiration Date Monitoring"} 
        checkmarkboxparagraph3={"Stay on top of medication expiration dates, helping you identify and manage medications nearing their expiry to ensure patient safety."} 
        linkto1={"/providers/auth/signIn"}
         linktext1={"Explore Now"} 
         linkto2={"/providers/auth/signIn"} 
         linktext2={"Explore Now"}
          linkto3={"/providers/auth/signIn"} 
          linktext3={"Explore Now"}
           icon1={"/Medicinepill.svg"} 
           icon2={"/carticon.svg"}
            icon3={"/expireclock.svg"} />




     {/*  send in your costomised props in componensfolder or change the content below */}
      <WhychooseCarelyo 
        image={"/youhavealotofreasons.jpg"}
        header={"You Have Lots Of Reasons To Choose Us"}
        paragraph={"Join Carelyo and experience the transformative power of our platform in streamlining pharmacy operations, enhancing patient care, and maximizing efficiency. Together, we can create a more seamless and customer-centric pharmacy experience that benefits both healthcare providers and patients alike."}
        buttonsText={"Get Carelyo"} 
      />

     
    </div>
  );
}
