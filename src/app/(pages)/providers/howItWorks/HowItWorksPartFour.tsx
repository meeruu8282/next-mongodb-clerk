import Image from "next/image";
import style from './howItWork.module.css'

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



    <div className={`flex flex-col w-full max-w-[518px] mx-auto justify-center h-full max-h-[581px] items-center text-[Poppins] ${style.removeMaxWidth780}`}>

      {/* Header */}
      <div className="flex w-[90%] flex-row justify-start items-center font-normal gap-4 pb-3">
        <div className="flex justify-center items-center">
          <h1 className="flex justify-center items-center text-[Poppins] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold text-sage leading-10">{hashtagNumber}</h1>
        </div>
        <div className="flex justify-center items-center">
          <h2 className={`flex justify-center items-center text-[Poppins] text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-normal text-black leading-10 ${style.textBase360}`}> {header}</h2>
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

      <div className="flex w-[90%] flex-col justify-center items-center font-normal  bg-gradient-to-br from-sage to-sageLight rounded-3xl text-[Poppins]">
        <div className={`w-[100%] h-[100%] flex flex-col justify-center items-start p-6 gap-2 text-neutral-50`}>
                <li className={`text-white text-[Poppins] text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl font-normal`}> {text1}</li>
                <li className={`text-white text-[Poppins] text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl font-normal`}> {text2} </li>
         </div>

      </div>



    </div>







  );
};
export default HowItWorksPartFour;
