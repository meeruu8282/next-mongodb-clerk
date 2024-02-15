import CarelyoButton from "../Components/getStartedButton";
import Greenbackground from "../Components/greenBackground";
import style from './howItWork.module.css'
import Image from "next/image";



interface HowItsWorksGreenbackgroundTemplateProps {

    heading1: string;
    heading1Bold: string;
    heading2: string;


    title1: string;
    title2: string;
    title3: string;
    title4: string;

    text1: string;
    text2: string;
    text3: string;
    text4: string;

    imageSrc1: string;
    imageSrc2: string;
    imageSrc3: string;
    imageSrc4: string;

    buttonText1: string;
    buttonText2: string;


}


const HowItWorksGreenbackground: React.FC<HowItsWorksGreenbackgroundTemplateProps> = ({
    heading1,
    heading1Bold,
    heading2,
    title1,
    title2,
    title3,
    title4,
    text1,
    text2,
    text3,
    text4,
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    buttonText1,
    buttonText2,

}) => {
    return (
        <>

            <div className="flex flex-col w-[100%] justify-center bg-cover bg-center items-center text-white gap-7 h-full" style={{ backgroundImage: 'url("/Frame1000006593.jpg")'}}>
                {/* Header */}
                <div className={`flex w-[90%] flex-row justify-between items-center font-normal mt-3 ${style.madeItToCol540}`}>
                    <div className="flex justify-start items-center w-full">
                        <h1 className="text-[Poppins] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl ">{heading1} <span className="block font-bold">{heading1Bold}</span></h1>
                    </div>
                    <div className="flex justify-end items-center ">
                        <h2 className={`text-[Poppins] text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl w-[90%] ${style.madeIt100Width540}`}> {heading2} </h2>
                    </div>
                </div>
                {/* Section */}
                <div className="flex flex-col justify-center items-center gap-6 ">
                    <div className={`flex w-[90%] flex-row h-[100%] justify-center items-center gap-6 ${style.madeItToCol} `}>
                        <div className={`flex flex-col w-2/6  h-[20.1875rem] justify-center items-start text-[Poppins] bg-white bg-opacity-10 border border-white rounded-3xl gap-4 p-6 ${style.reducePaddingW350} ${style.madeItTo90Width} ${style.minHeight}`}>
                            <div className={`hidden lg:flex  justify-center items-center ${style.hidingImageW1080}  `}>
                                <Image
                                    layout="fixed"
                                    width={80}
                                    height={80}
                                    src={imageSrc1}
                                    alt="Self-Employed Doctors"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className=" text-[Poppins] text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-semibold">{title1}</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-[Poppins] text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium">{text1}</p>
                            </div>
                        </div>
                        <div className={`flex w-4/6 h-[20.1875rem] text-[Poppins] border border-white rounded-3xl bg-white bg-opacity-10  ${style.madeItTo90Width} ${style.minHeight}`}>
                            <div className={`flex flex-col w-3/4 justify-center items-start gap-4 p-6 ${style.madeIt100Width} ${style.changeWidthToFull} ${style.reducePaddingW350}`}>
                                <div className="flex justify-center items-center">
                                    <h1 className="text-[Poppins] text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-semibold">{title2}</h1>
                                </div>
                                <div className={`flex justify-center items-center w-[87%] ${style.makeWidth80} ${style.makeWidth75} ${style.madeIt100Width}`}>
                                    <p className="text-[Poppins] text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium">{text2}</p>
                                </div>
                                <div className={` justify-center items-center hidden md:flex ${style.hidingImageW780}`}>
                                    <CarelyoButton
                                        buttonText={`${buttonText1}`}
                                        color="third"
                                        buttonSize="gCb"
                                        size="small" />
                                </div>
                            </div>


                          
                            <div className={`hidden lg:flex flex-col w-1/4 justify-end items-end ${style.hidingImageW1080}`} >
                                <div className={` w-[361px] h-[246px] justify-center items-center `}>
                                    <Image
                                        layout="fixed"
                                        width={361}
                                        height={246}
                                        src={imageSrc2}
                                        alt="Clinics and Hospitals"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex w-[90%] flex-row-reverse h-[100%] justify-center items-center gap-6 ${style.madeItToCol} ${style.addPaddingBottom}`}>

                        <div className={`flex flex-col w-2/6  h-[20.1875rem] justify-center items-start text-[Poppins] bg-white bg-opacity-10 border border-white rounded-3xl gap-4 p-6 ${style.reducePaddingW350} ${style.madeItTo90Width} ${style.minHeight}`}>
                            <div className={` justify-center items-center hidden lg:flex  ${style.hidingImageW1080}`}>
                                <Image
                                    layout="fixed"
                                    width={80}
                                    height={80}
                                    src={imageSrc4}
                                    alt="Pharmacy"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="text-[Poppins] text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-semibold">{title4}</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-[Poppins] text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium">{text4}</p>
                            </div>
                        </div>

                        <div className={`flex w-4/6 h-[20.1875rem] text-[Poppins]  border border-white bg-white bg-opacity-10 rounded-3xl ${style.madeItTo90Width} ${style.minHeight}`}>

                            <div className={`flex flex-col w-3/4 justify-center items-start gap-4 p-6 ${style.reducePaddingW350} ${style.madeIt100Width} ${style.reducePaddingW350}`}>
                                <div className="flex justify-center items-center">
                                    <h1 className="text-[Poppins] text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-semibold">{title3}</h1>
                                </div>
                                <div className={`w-[87%] flex justify-center items-center  ${style.makeWidth80} ${style.makeWidth75} ${style.madeIt100Width}`}>
                                    <p className="text-[Poppins] text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium">{text3}</p>
                                </div>
                                <div className={` justify-center items-center hidden md:flex ${style.hidingImageW780}`}>
                                    <CarelyoButton
                                        buttonText={`${buttonText2}`}
                                        color="third"
                                        buttonSize="gCb"
                                        size="small" />
                                </div>
                            </div>
                            <div className={`hidden lg:flex flex-col w-1/4 justify-end items-end ${style.hidingImageW1080}`} >
                                <div className="w-[361px]  justify-center items-center">
                                    <Image
                                        layout="fixed"
                                        width={361}
                                        height={312}
                                        src={imageSrc3}
                                        alt="Diagnostic Laboratory Centers"

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HowItWorksGreenbackground
