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

            <div className="flex flex-col w-[100%] justify-center h-full items-center bg-gradient-to-br from-[#45AC60] to-[#7EDC97] text-white gap-7">
                {/* Header */}
                <div className="flex w-[90%] flex-row justify-between items-center font-normal pt-12">
                    <div className="flex justify-start items-center">
                        <h1 className="font-[Poppins] text-4xl">{heading1} <span className="block font-bold">{heading1Bold}</span></h1>
                    </div>
                    <div className="flex justify-end items-centerw-[90%]">
                        <h2 className="font-[Poppins] text-xl w-[80%]"> {heading2} </h2>
                    </div>
                </div>

                {/* Section */}
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className={`flex w-[90%] flex-row h-[100%] justify-center items-center gap-6 ${style.madeItToCol}`}>

                        <div className={`flex flex-col w-2/6  h-[20.1875rem] justify-center items-start font-[Poppins] border border-[#FFFFFF] rounded-3xl gap-4 p-8 ${style.madeItTo90Width}`}>
                            <div className={`flex justify-center items-center ${style.hidingImageW1080}  `}>
                                <Image
                                    layout="fixed"
                                    width={80}
                                    height={80}
                                    src={imageSrc1}
                                    alt="Self-Employed Doctors"

                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="text-2xl font-semibold">{title1}</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-xl font-medium">{text1}</p>
                            </div>
                        </div>

                        <div className={`flex w-4/6 h-[20.1875rem] font-[Poppins] border border-[#FFFFFF] rounded-3xl ${style.madeItTo90Width}`}>

                            <div className={`flex flex-col w-3/4 justify-center items-start gap-6 p-8 ${style.madeItTo90Width} `}>
                                <div className="flex justify-center items-center p-4">
                                    <h1 className="font-semibold font-[Poppins] text-3xl">{title2}</h1>
                                </div>
                                <div className={`flex justify-center items-center w-[87%] ${style.makeWidth80} ${style.makeWidth75} ${style.text100width}`}>
                                    <p className="text-xl font-medium w-full">{text2}</p>
                                </div>
                                <div className={`flex justify-center items-center ${style.buttonStart}`}>
                                    <CarelyoButton
                                        buttonText={`${buttonText1}`}
                                        color="third"
                                        buttonSize="gCb"
                                        size="small" />
                                </div>
                            </div>
                            <div className={`flex flex-col w-1/4 justify-end items-end ${style.hidingImageW1080}`} >
                                <div className="w-[361px] h-[246px] justify-center items-center">
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

                    <div className={`flex w-[90%] flex-row-reverse h-[100%] justify-center items-center gap-6 ${style.madeItToCol}`}>

                        <div className={`flex flex-col w-2/6  h-[20.1875rem] justify-center items-start font-[Poppins] border border-[#FFFFFF] rounded-3xl gap-4 p-8 ${style.madeItTo90Width}`}>
                            <div className={`flex justify-center items-center ${style.hidingImageW1080}  `}>
                                <Image
                                    layout="fixed"
                                    width={80}
                                    height={80}
                                    src={imageSrc4}
                                    alt="Pharmacy"

                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="text-2xl font-semibold">{title4}</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-xl font-medium">{text4}</p>
                            </div>
                        </div>

                        <div className={`flex w-4/6 h-[20.1875rem] font-[Poppins] border border-[#FFFFFF] rounded-3xl ${style.madeItTo90Width}`}>

                            <div className={`flex flex-col w-3/4 justify-center items-start gap-6 p-8 `}>
                                <div className="flex justify-center items-center">
                                    <h1 className="font-semibold font-[Poppins] text-4xl">{title3}</h1>
                                </div>
                                <div className={`w-[87%] flex justify-center items-center  ${style.makeWidth80} ${style.makeWidth75} ${style.text100width}`}>
                                    <p className="text-xl font-medium">{text3}</p>
                                </div>
                                <div className={`flex justify-center items-center ${style.buttonStart}`}>
                                    <CarelyoButton
                                        buttonText={`${buttonText2}`}
                                        color="third"
                                        buttonSize="gCb"
                                        size="small" />
                                </div>
                            </div>
                            <div className={`flex flex-col w-1/4 justify-end items-end ${style.hidingImageW1080}`} >
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



{/* <h1 className="font-[Poppins] text-4xl ">Who Can Become a <span className="block font-bold">Carelyo Health Provider?</span></h1> */ }