import Image from "next/image";
import style from './howItWork.module.css'


interface HowItsWorkPartOneTemplateProps {
    imageSrc: string;
    hashtagNumber: string;
    header: string;
    text1: string;
    text2: string;
}


const HowItWorksPartOne: React.FC<HowItsWorkPartOneTemplateProps> = ({
    imageSrc,
    hashtagNumber,
    header,
    text1,
    text2

}) => {
    return (


        <div className="flex flex-col justify-center items-center w-full max-w-[552.12px] mx-auto h-full max-h-[570px] text-[Poppins] ">


            <div className="flex w-[100%] flex-row justify-start items-center font-normal pb-3 gap-6">
                <div className="flex justify-center items-center">
                    <h1 className="flex justify-center items-center text-[Poppins] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold text-sage leading-10">{hashtagNumber}</h1>
                </div>
                <div className="flex justify-center items-center">
                    <h2 className="flex justify-center items-center text-[Poppins] text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-normal text-black leading-10"> {header}</h2>
                </div>
            </div>

            <div className="flex w-[85%] flex-row justify-center items-center font-normal pb-3">
                <Image className="rounded-3xl"
                    layout="responsive"
                    width={466}
                    height={310.26}
                    src={imageSrc}
                    alt="iPad Registration & Profile Creation"

                />
            </div>

            <div className="flex w-[100%] flex-col justify-center items-center font-normal  bg-gradient-to-br from-sage to-sageLight rounded-3xl text-[Poppins]">
                <div className="flex flex-col justify-center items-start w-[100%] p-5 gap-2">
                    <p className="text-black font-normal text-[Poppins] text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl"> {text1}</p>
                    <p className="text-black font-normal text-[Poppins] text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl"> {text2}</p>
                </div>
            </div>



        </div>

    );
};
export default HowItWorksPartOne;
