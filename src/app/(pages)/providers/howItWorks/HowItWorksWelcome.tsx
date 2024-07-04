import CarelyoButton from "../Components/getStartedButton";
import Image from 'next/image';
import style from './howItWork.module.css'
import React from "react";
import WelcomeToCarelyo from "../../patients/components/WelcomeToCarelyo";
import Link from 'next/link'; 


interface HowItsWorkWelcomeTemplateProps {

    text1: string;
    text2: string;
    textButton1: string;
    textButton2: string;
    imageSrc: string;
}



const HowItWorksWelcome: React.FC<HowItsWorkWelcomeTemplateProps> = ({
    text1,
    text2,
    textButton1,
    textButton2,
    imageSrc


}) => {
    return (
        <div className="flex w-full flex-col lg:flex-row relative top-0 left-0">
            <div className="w-full lg:w-1/2 justify-center mb-4 flex flex-col">
                <div className="mb-5">
                    <WelcomeToCarelyo />
                </div>
                <h1 className="text-3xl mb-3 leading-tight lg:text-[5rem] lg:text-left text-center font-bold">
                    {text1}
                </h1>
                <p className="font-extralight text-center lg:text-left text-lg lg:text-xl xl:text-xl font-semibold">
                    {text2}
                </p>
                <div className="button-container lg:items-start lg:justify-start justify-center mt-5 flex gap-7">
                    {/* Get started Button */}
                    <div className="flex items-center">
                        <Link href="/providers/pricing">
                            <button 
                                className={`w-[250px] h-[72px] p-[6px] gap-[10px] font-semibold ${style['button-black-border']} ${style['button-spacing']} ${style['button-hover-effect']}`} 
                                style={{ borderRadius: '12px' }}
                            >
                                <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                                    {textButton1}
                                    <div className="ml-3">
                                        <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-white bg-opacity-[25%]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </Link>

                        <Link href="/providers/pricing/90daysFree">
                            <button 
                                className={`w-[250px] h-[72px] p-[6px] gap-[10px] font-semibold ${style['button-black-border']} ${style['button-hover-effect']}`}
                            >
                                <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                                    {textButton2}
                                    <div className="ml-3">
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image src={imageSrc} alt="?" layout="responsive" width={541} height={487} objectFit="" />
            </div>
        </div>
    );
};

export default HowItWorksWelcome;
