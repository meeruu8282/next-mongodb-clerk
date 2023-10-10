import Image from "next/image";

const HowItWorksPartFour: React.FC = () => {
  return (
    <div className="  ">
      <div className="flex flex-col w-[518px] h-[581px]  ml-11">
        <div className="w-[416px] h-[60px] gap-[16px] flex ">
          <div className="w-[62px] h-[60px] font-semibold font-[Poppins] text-[40px]">
            <h4 className=" text-[#45AC60]">#4</h4>
          </div>

          <div className="flex items-center">
            {" "}
            <h1 className="font-normal text-[32px] font-[Poppins]">
              Appointment Booking
            </h1>{" "}
          </div>
        </div>
        <div>
          <Image className="rounded-[25px]"
            layout="fixed"
            width={518}
            height={311}
            src="/JepretanLayar 2023-07-01pukul09.261.png"
            alt="appointment_booking"
           
          />
        </div>
        <div className="w-[518px] h-[172px]  rounded-[25px]  bg-gradient-to-br from-[#45AC60] to-[#7EDC97]   flex justify-center items-center mt-9">
          <div className="w-[456px] h-[128px] flex justify-center items-center ">
            <h3 className="text-[20px] font-normal leading-[32px] text-[#FAFAFA] flex justify-center items-center font-[Poppin]">
    
              Select the "See a Doctor" option to schedule an appointment.
              Choose a convenient date and time for your appointment.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorksPartFour;