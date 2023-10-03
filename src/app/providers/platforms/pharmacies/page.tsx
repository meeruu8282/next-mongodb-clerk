import CarelyoButton from "../../Components/getStartedButton";
import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox";
import Keypointsbox from "../../Components/keypointsbox";
import SuperCharge from "../../Components/superCharge";
import Image from "next/image";
import WhychooseCarelyo from "../../Components/whyChooseCarelyo";
import BlurBackGroundDesign from "../../Components/blurBackGroundDesign";

export default function Pharmacies() {
  return (
    <div className="">
      <BlurBackGroundDesign/>
      <div className=" flex justify-end ">
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
          <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center  md:text-2xl lg:text-3xl whitespace-normal ">
                <span className="text-greenText whitespace-normal font-bold">
                  Efficient
                </span>{" "}
                and Customer-Centric
                <span className="text-greenText whitespace-normal font-bold">
                  {" "}
                  Pharmacy Management
                </span>{" "}
                with Carelyo{" "}
              </h1>
            </div>
            <div className="w-[858px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                Platform dedicated to revolutionizing pharmacy services and
                enhancing efficiency in medication management.
              </p>
            </div>
          </div>
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
