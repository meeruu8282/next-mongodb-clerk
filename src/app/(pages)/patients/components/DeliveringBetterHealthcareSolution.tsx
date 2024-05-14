import React from 'react';
import WelcomeToCarelyo from './WelcomeToCarelyo';
import Image from 'next/image';

const DeliveringBetterHealthcareSolution = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row relative top-0 left-0">
      <div className="w-full lg:w-1/2 justify-center mb-4 flex flex-col">
        <div className="mb-5">
          <WelcomeToCarelyo />
        </div>
        <h1 className="text-3xl mb-3 leading-tight lg:text-[5rem] lg:text-left text-center">
          Delivering Better Healthcare Solutions
        </h1>
        <p className="font-extralight text-center lg:text-left text-lg lg:text-xl xl:text-2xl">
          Healthcare platform that seamlessly integrates telemedicine, electronic health records,
          and streamlined workflows for a convenient and efficient healthcare experience.
        </p>
        <div className="button-container lg:items-start lg:justify-start justify-center mt-5 flex gap-7">
          {/* Get started Button */}
          <div className="flex items-center">
            <button className="carelyoButton w-[230px] h-[72px] p-[6px] gap-[10px] font-semibold">
              <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                Get started
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
            {/* Learn more Text */}
            <div className="font-semibold text-sm sm:text-base md:text-base lg:text-base xl:text-base text-black ml-5">
              Learn more
            </div>
            {/* Learn more Icon */}
            <div className="flex items-center">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_341_3389)">
                  <path d="M5 13.6914H16.17L11.29 18.5714C10.9 18.9614 10.9 19.6014 11.29 19.9914C11.68 20.3814 12.31 20.3814 12.7 19.9914L19.29 13.4014C19.68 13.0114 19.68 12.3814 19.29 11.9914L12.71 5.39138C12.32 5.00138 11.69 5.00138 11.3 5.39138C10.91 5.78138 10.91 6.41138 11.3 6.80138L16.17 11.6914H5C4.45 11.6914 4 12.1414 4 12.6914C4 13.2414 4.45 13.6914 5 13.6914Z" className="fill-current text-grayDark" />
                </g>
                <defs>
                  <clipPath id="clip0_341_3389">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.691406)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src="/girlWithHeadset.png" alt="?" layout="responsive" width={541} height={487} objectFit="" />
      </div>
    </div>
  );
};

export default DeliveringBetterHealthcareSolution;
