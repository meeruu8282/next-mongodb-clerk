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


            <div className="flex w-[100%] flex-row justify-start items-center font-normal gap-7 pb-3">
                <div className="flex justify-center items-center">
                    <h1 className="flex justify-center items-center text-[Poppins] text-4xl font-semibold text-[#45AC60] leading-10">{hashtagNumber}</h1>
                </div>
                <div className="flex justify-center items-center">
                    <h2 className={`flex justify-center items-center text-[Poppins] text-3xl font-normal text-[#000000] leading-10 ${style.textXlarge}`}> {header}</h2>
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

            <div className="flex w-[100%] flex-col justify-center items-center font-normal  bg-gradient-to-br from-[#45AC60] to-[#7EDC97] rounded-3xl text-[Poppins]">
                <div className="flex flex-col justify-center items-start w-[100%] p-5 gap-2">
                    <p className="text-[#000000] font-normal text-[Poppins] text-xl"> {text1}</p>
                    <p className="text-[#000000] font-normal text-[Poppins] text-xl"> {text2}</p>
                </div>
            </div>



        </div>

    );
};
export default HowItWorksPartOne;


