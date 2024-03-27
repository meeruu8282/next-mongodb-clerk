import React from 'react'
import style from './introStats.module.css'

interface IntroStatspTemplateProps {
    headerBlackText1: string;
    headerBlackText2: string;
    headerGreenText1: string;
    paragraph1: string;
    number1: string;
    number2: string;
    number3: string;
    number4: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;

}

const IntroStats: React.FC<IntroStatspTemplateProps> = ({
    headerBlackText1,
    headerBlackText2,
    headerGreenText1,
    paragraph1,
    number1,
    number2,
    number3,
    number4,
    text1,
    text2,
    text3,
    text4,

}) => {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className="w-full h-auto flex justify-center items-center flex-col gap-4 sm:mb-14 mb-8">

                <div className="w-[90%] h-auto md:max-w-[70%] lg:max-w-[65%] xl:w-[48%] mx-auto flex justify-center items-center ">
                    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl whitespace-normal text-[Poppins] font-normal">
                        {headerBlackText1}{" "}
                        <span className="text-greenText whitespace-normal font-bold ">
                            {headerGreenText1}
                        </span>{" "}
                        {headerBlackText2}{" "}
                    </h1>
                </div>
                <div className="w-[90%] md:max-w-[80%] lg:max-w-[75%] xl:w-[56%] flex justify-center items-center h-auto opacity-50 mx-auto">
                    <p className="text-center text-[Poppins] text-sm sm:text-base md:text-xl lg:text-xl font-normal  ">
                        {paragraph1}
                    </p>
                </div>
            </div>
            

            <div className={`flex flex-wrap flex-row justify-between items-center w-[95%] lg:w-[95%] xl:w-[80%] ${style.flexContainer} `}>
                <div className='flex flex-col justify-center items-center max-w-[13rem] w-full gap-3'>
                    <div className='flex justify-center items-center'>
                        <h2 className='font-bold text-[Poppins] text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-greenText'>{number1}</h2>
                    </div>
                    <div>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-lg xl:text-lg  opacity-50'>{text1}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center max-w-[13rem] w-full gap-3'>
                    <div className='flex justify-center items-center'>
                        <h2 className='font-bold text-[Poppins] text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-greenText'>{number2}</h2>
                    </div>
                    <div>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-lg xl:text-lg    opacity-50'>{text2}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center max-w-[13rem] w-full gap-3'>
                    <div className='flex justify-center items-center'>
                        <h2 className='font-bold text-[Poppins] text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-greenText'>{number3}</h2>
                    </div>
                    <div>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-lg xl:text-lg  opacity-50'>{text3}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center max-w-[13rem] w-full gap-3'>
                    <div className='flex justify-center items-center'>
                        <h2 className='font-bold text-[Poppins] text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-greenText'>{number4}</h2>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-lg xl:text-lg  opacity-50'>{text4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroStats


