import Image from "next/image";

interface HowItsWorkPartTwoTemplateProps {
    imageSrc: string;
    hashtagNumber: string;
    header: string;
    text1: string;
    text2: string;

}



const HowItWorksPartTwo: React.FC<HowItsWorkPartTwoTemplateProps> = ({

    hashtagNumber,
    header,
    text1,
    text2,
    imageSrc

}) => {
    return (

        <div className="flex flex-col w-full max-w-[597px] mx-auto justify-center h-full  max-h-[575.94px] items-center text-[Poppins]">

            <div className="flex w-[100%] flex-row justify-start items-center font-normal gap-6 ">
                <div className="flex justify-center items-center">
                    <h2 className="flex justify-center items-center text-[Poppins] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold text-sage leading-10"> {hashtagNumber} </h2>
                </div>
                <div className="flex justify-center items-center">
                    <h2 className="flex justify-center items-center text-[Poppins] text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-normal text-black leading-10"> {header}</h2>
                </div>
            </div>

            <div className="flex w-[100%] flex-col justify-center items-center font-normal  rounded-3xl text-[Poppins]">
                <div className="flex flex-col justify-center items-start w-[100%] pt-5 pl-2">
                    <li className="text-black font-normal text-[Poppins] text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl"> {text1}</li>
                    <li className="text-black font-normal text-[Poppins] text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl">{text2}</li>
                </div>
            </div>

            <div className="flex w-[100%] flex-row justify-center items-center font-normal pb-3 rounded-3xl border border-sage mt-3">
                <Image className="rounded-3xl"
                    layout="responsive"
                    width={518.74}
                    height={394.39}
                    src={imageSrc}
                    alt="Listing Services and Availability"
                />
            </div>

        </div>
    );
};
export default HowItWorksPartTwo;
