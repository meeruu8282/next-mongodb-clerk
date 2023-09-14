
import Image from 'next/image'
import SuperCharge from '../../Components/superCharge';
import JoinCarelynowintrobox from '../../Components/joinCarelynowintrobox';


export default function Hospitals() {
  return (
    <div>
      
      
      <div className=" flex justify-end ">
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
        <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center  md:text-2xl lg:text-3xl whitespace-normal ">
              Joining carelyo as a{" "}
                <span className="text-greenText whitespace-normal font-bold">
                  Self-Employed <br /> Doctors
                </span>{" "}
                comes with numerous advantages
              </h1>
            </div>
            <div className="w-[858px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                With our innovative features and comprehensive support, we aim
                to empower your practice and enhance patient care.
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
       {/* Code in components folder then superCarge */}
     <SuperCharge/>
    </div>
  );
}

