import CarelyoButton from "../Components/getStartedButton";
import Image from 'next/image';
import style from './howItWork.module.css'
import React from "react";



interface HowItsWorkWelcomeTemplateProps {

    welcomeText: string;
    text1: string;
    text2: string;
    textButton1: string;
    textButton2: string;
    imageSrc: string;
}



const HowItWorksWelcome: React.FC<HowItsWorkWelcomeTemplateProps> = ({


    welcomeText,
    text1,
    text2,
    textButton1,
    textButton2,
    imageSrc


}) => {
    return (

        <div className="flex w-[80%] h-full flex-row justify-center items-center">

            <div className="leftside w-[100%] flex flex-col justify-center items-center gap-6">

                <div className={`flex w-full justify-start items-center ${style.make85Width}`}>
                    <h1 className="text-[16px] text-sage font-semibold font-[Poppins]">
                        {welcomeText}
                    </h1>
                </div>

                <div className={`flex w-full justify-start items-center ${style.flexJusticeCenter}`}>
                    <h2 className={`text-6xl w-[45%] ${style.make85Width} font-semibold font-[Poppins]`}>
                        {text1}
                    </h2>
                </div>

                <div className={`flex w-full justify-start items-center ${style.flexJusticeCenter}`}>
                    <p className={`text-md w-[70%] ${style.make85Width} font-normal font-[Poppins]`}>
                        {text2}
                    </p>
                </div>

                <div className={`flex flex-row w-full justify-start items-center gap-7 ${style.flexColumn} ${style.make85Width}`}>
                    <div className="">
                        <CarelyoButton
                            buttonText={textButton1}
                            buttonSize="vLB"
                            color="primary"
                            size="small"
                        />
                    </div>
                    <div className="flex">
                        <div className="w-full ">
                            <div className="w-[116px] h-[22px] flex">
                                <div className="font-semibold text-[16px] text-black font-[Poppins]">
                                    {textButton2}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[24px] h-[24px]">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_341_3389)">
                                        <path
                                            d="M5 13.6914H16.17L11.29 18.5714C10.9 18.9614 10.9 19.6014 11.29 19.9914C11.68 20.3814 12.31 20.3814 12.7 19.9914L19.29 13.4014C19.68 13.0114 19.68 12.3814 19.29 11.9914L12.71 5.39138C12.32 5.00138 11.69 5.00138 11.3 5.39138C10.91 5.78138 10.91 6.41138 11.3 6.80138L16.17 11.6914H5C4.45 11.6914 4 12.1414 4 12.6914C4 13.2414 4.45 13.6914 5 13.6914Z"
                                            fill="#323232"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_341_3389">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(0 0.691406)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className={`w-full h-[100%] flex justify-end items-center ${style.hidingImage}`}>
                <Image
                    src={imageSrc}
                    alt="entre"
                    width={698}
                    height={667} />
            </div>

        </div>

    );
};

export default HowItWorksWelcome;
