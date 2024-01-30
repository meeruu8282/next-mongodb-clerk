import Image from "next/image";



interface HowItsWorkPartThreeTemplateProps {
  imageSrc: string;
  hashtagNumber: string;
  header: string;
  text1: string;
  text2: string;

}





const HowItWorksThree: React.FC<HowItsWorkPartThreeTemplateProps> = ({
  imageSrc,
  hashtagNumber,
  header,
  text1,
  text2

}) => {
  return (
    <div className="flex flex-col w-full max-w-[546px] mx-auto justify-center h-full max-h-[781px] items-center text-[Poppins] mb-5  mt-10">

    <div className="flex w-full flex-row justify-start items-center font-normal pb-3 gap-6">
      <div className="flex justify-center items-center">
        <h2 className="text-[Poppins] text-5xl font-semibold text-sage leading-10">{hashtagNumber}</h2>
      </div>
      <div className="flex justify-center items-center text-center">
        <h2 className="text-[Poppins] text-3xl font-normal text-black leading-10" >{header}</h2>
      </div>
    </div>

    <div className="flex w-full flex-row justify-center items-center font-normal mb-16">
      <Image
        layout="fixed"
        width={546}
        height={307}
        src={imageSrc}
        alt=""
      />
    </div>

    <div className="flex w-full flex-col justify-center items-center font-normal bg-gradient-to-br from-sage to-sageLight rounded-3xl text-[Poppins]">
      <div className="flex flex-col justify-center items-start w-full pt-5 pl-5 p-8 gap-2">
        <li className="text-black font-normal text-[Poppins] text-lg">{text1}</li>
        <li className="text-black font-normal text-[Poppins] text-lg">{text2}</li>
      </div>
    </div>

  </div>
  );
};
export default HowItWorksThree;
