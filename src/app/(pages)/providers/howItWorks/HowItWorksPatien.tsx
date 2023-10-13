import Image from "next/image";

const HowItWorksPatient: React.FC = ({}) => {
  return (
    <div className=" fle justify-center   ">
      <div className="flex justify-center">
        <div className=" flex  items-center justify-between w-[185px] h-[66px]     ">
          <div className="patientImage">
            <Image
              layout="fixed"
              width={66}
              height={66}
              src="/E11539.svg"
              alt=""
            
            />
          </div>
          <div className="w-[94px] h-[30px] items-center">
            <div className="font-[Poppins] font-normal">Patient</div>
          </div>
        </div>
      </div>
      <div className="mt-[400px]">
        <Image
          layout="fixed"
          width={546}
          height={307}
          src="/NewMacbookProMockupFrontView.png"
          alt=""
         
        />
      </div>
      <div className="w-[552.12] h-[214px] flex items-center justify-center ">
        <div className="w-[490.12px] h-[160px] flex justify-center items-center font-[Popping] font-normal border rounded-[25px] mt-[180px] bg-gradient-to-br from-[#45AC60] to-[#7EDC97]">
          <h1 className="w-[490.12px] h-[160px] flex justify-center items-center text-[20px] ml-2 leading-[]">
            Visit the website provided by your provider to access their Carelyo
            platform. If it's your first time using the Carelyo platform,
            complete your profile by providing necessary personal and medical
            information.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default HowItWorksPatient;