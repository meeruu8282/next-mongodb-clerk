import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox";
import SuperCharge from "../../Components/superCharge";

export default function Pharmacies() {
    return ( 

       <div> 
        <div className=" flex justify-end ">
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
        <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center  md:text-2xl lg:text-3xl whitespace-normal ">
              
                <span className="text-greenText whitespace-normal font-bold">
                Efficient
                </span>{" "} and Customer-Centric 
                <span className="text-greenText whitespace-normal font-bold">
                {" "}Pharmacy Management
                </span>{" "}
                with Carelyo{" "}
              </h1>
            </div>
            <div className="w-[858px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
              Platform dedicated to revolutionizing pharmacy services and enhancing efficiency in medication management.
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
       {/* Code in components folder then superCarge */}
     <SuperCharge/>

       </div>
    )
    
   
  }