import Image from "next/image";

interface HowItsWorkPartFourTemplateProps {
  imageSrc: string;
  hashtagNumber: string;
  header: string;
  text1: string;
  text2: string;
  
}







const HowItWorksPartFour: React.FC<HowItsWorkPartFourTemplateProps> = ({
  imageSrc,
  hashtagNumber,
  header,
  text1,
  text2
  
}) => {
  return (
   


    <div className="flex flex-col w-full max-w-[518px] mx-auto justify-center h-full  max-h-[581px] items-center text-[Poppins]">

      {/* Header */}
      <div className="flex w-[90%] flex-row justify-start items-center font-normal gap-4 pb-3">
        <div className="flex justify-center items-center">
          <h1 className="flex justify-center items-center text-[Poppins] text-5xl font-semibold text-[#45AC60] leading-10">{hashtagNumber}</h1>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="flex justify-center items-center text-[Poppins] text-3xl font-normal text-[#000000] leading-10"> {header}</h2>
        </div>
      </div>

      <div className="flex w-[90%] flex-row justify-center items-center font-normal pb-3">
        <Image className="rounded-3xl"
         layout="responsive"
          width={518}
          height={311}
          src={imageSrc}
          alt="appointment_booking"

        />
      </div>

      <div className="flex w-[90%] flex-col justify-center items-center font-normal  bg-gradient-to-br from-[#45AC60] to-[#7EDC97] rounded-3xl text-[Poppins]">
        <p className="flex flex-col justify-center items-center w-[100%] px-6 py-4 text-[#FAFAFA]">  {text1} <br />  {text2}
        </p>
      
      </div>



    </div>

  





  );
};
export default HowItWorksPartFour;