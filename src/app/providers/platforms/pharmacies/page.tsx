import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox";
import SuperCharge from "../../Components/superCharge";
import Image from "next/image";

export default function Pharmacies() {
  return (
    <div className="">
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

      <div className=" relative  w-[1192px] h-[120px] left-[125px] gap-[142px]  ">
        <div className=" absolute left-0 w-[526px] h-[120px] ">
          <h1 className="  text-[Poppins] h-[120px] text-[40px] font-400 tracking-tight text-left leading-60  ">
            Here are the key points you can expect from Carelyo
          </h1>
        </div>
        <div className=" absolute w-[524px] items-center h-[120px] justify-center right-0 top-0 ">
          <p className=" text-[Poppins] h-[120px] flex items-center text-[20px] weight-400 tracking-tight opacity-50 right-0 text-left leading-60">
            With Carelyo, we provide a comprehensive solution to streamline your
            pharmacy operations and improve patient care.
          </p>
        </div>
      </div>

      <div className=" relative flex-row flex justify-center items-center w-[1191px] h-[316px] left-[125px] gap-[24px] mt-20 ">
        <div className=" relative  flex justify-center items-center w-[381px] h-[316px] rounded-[25px] ">
          <div className=" w-[310px] h-[259px] top-[100px] left-[35px] gap-[24px]">
            <div className="w-[64px] h-[64px] ">
              <div className="relative flex justify-center items-center">
                <div className=" absolute w-[64px] h-[64px] top-0 rounded-[100%]  bg-[#45AC60] opacity-10 "></div>

                <Image
                  className="absolute top-[14px]"
                  layout="fixed "
                  width={36}
                  height={36}
                  src="/Medicinepill.svg"
                  alt="Costo"
                />
              </div>
            </div>

            <div className="absolute flex flex-col w-[309.34px] h-[171px] bottom-0 gap-[16px] ">
              <div className="w-[309.34px] h-[29px] ">
                <h1 className=" text-[Poppins] text-[24px] font-semibold leading-7 tracking-tight left-0">
                Drug Stock Tracking



                </h1>
              </div>
              <div className=" w-[309.34px] h-[88px] opacity-50">
      

                <p className=" text-[Poppins] text-[16px] font-normal line-h-22.4">
                Easily track the inventory of medications in your pharmacy, ensuring you are aware of the availability of each drug.


                </p>
              </div>
              <div className=" w-[309.34px] h-[22px]">
            

              <a href="/providers/auth/signIn" className=" absolute bottom-0 text-[#000000] underline hover:text-blue-700 cursor-pointer">Explore Now</a>
              </div>

            </div>
          </div>
        </div>
        <div className=" relative flex justify-center items-center w-[381px] h-[316px] rounded-[25px] bg-orange-500">
          <div className="w-[310px] h-[259px] top-[29px] left-[35px] gap-[24px] bg-blue-500"></div>
        </div>
        <div className=" relative flex justify-center items-center w-[381px] h-[316px] rounded-[25px] bg-orange-500">
          <div className=" w-[310px] h-[259px] top-[29px] left-[35px] gap-[24px] bg-blue-500"></div>
        </div>
      </div>

      <div className=" h-[577px] top-[1870px] bg-blue-600">
     <div className="">

     </div>
      </div>
      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  );
}
