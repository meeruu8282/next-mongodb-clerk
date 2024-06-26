import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import style from './whoHaveJoined.module.css'

interface WhoHaveJoinedTamplateProps {
    greenHeaderpart: string;
    blackHeaderpart: string;
    imageSrc1: string;
    imageSrc2: string;
    imageSrc3: string;
    imageHeader1: string;
    imageHeader2: string;
    imageHeader3: string;
    titleParagraph1: string;
    titleParagraph2: string;
    titleParagraph3: string;
    infoParagraph1: string;
    infoParagraph2: string;
    infoParagraph3: string;


  }

  const WhoHaveJoinedTamplate: React.FC<WhoHaveJoinedTamplateProps> = ({
    greenHeaderpart,
    blackHeaderpart,
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageHeader1,
    imageHeader2,
    imageHeader3,
    titleParagraph1,
    titleParagraph2,
    titleParagraph3,
    infoParagraph1,
    infoParagraph2,
    infoParagraph3,



  }) => {
  return (



    <div className='flex justify-center items-center '>
      {/* mediaqueries is imorted from whoHaveJoined.module.css with  ${style.nameofmediaquerie}   */}
    <div className="relative flex flex-col justify-center items-center w-screen h-auto  max-w-[1192px] min-h-[620px] mt-[100px]  gap-[48px] ">
        <div className=" flex justify-center items-center w-screen h-auto max-h-[52px] ">
          <h2 className=" text-[Poppins] text-[40px] w-600 line-height-[52px] tracking-[-2%] text-center font-bold ">
            <span className="text-greenText whitespace-normal">
            {greenHeaderpart}
            </span>{" "}
            {blackHeaderpart}
          </h2>
        </div>
        <div className="  max-w-[1192px] min-h-[520px] w-screen h-auto gap-[24px] ">
          <div className={`flex ${style.flex} flex-row max-w-[1192px] min-h-[424px] w-screen h-auto justify-between`} >
            <div className={`flex ${style.flexitem} justify-center items-center w-[379px] h-[424px] rounded-[25px]`} >
              <div className=" w-[350px] h-[371] gap-[24px] top-[17px] left-[14px]">
                <div className="w-[350px] h-[233px] rounded-[25px]">
                  <Image
                    className=""
                    layout="fixed "
                    width={351}
                    height={233}
                    src={imageSrc1}
                    alt="Costomimage1"
                  />
                </div>
                <div className="w-[350px] h-[114px] gap-[24px]">
                  <div className="w-[346px] h-[130px] gap-[16px]">
                    <div className="w-[329.62px] h-[70px] gap-[3px] ">
                      <h1 className="text-[Poppins] text-[24px] leading-[29px] tracking-[0em] left-0 font-semibold mt-5 ">
                      {imageHeader1}
                      </h1>
                      <p className=" h-[22px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-grayLight mt-2 ">
                      {titleParagraph1}
                      </p>
                    </div>
                    <p className="w-[329px] h-[44px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-grayLighter mt-1 ">
                    {infoParagraph1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex justify-center ${style.flexitem} items-center  w-[379px] h-[424px] rounded-[25px]`}>
              <div className="  w-[350px] h-[371] gap-[24px] top-[17px] left-[14px]">
                <div className="w-[350px] h-[233px] rounded-[25px]">
                  <Image
                    className=""
                    layout="fixed "
                    width={351}
                    height={233}
                    src={imageSrc2}
                    alt="Costomimage2"
                  />
                </div>
                <div className="w-[350px] h-[114px] gap-[24px]">
                <div className="w-[346px] h-[130px] gap-[16px]">
                    <div className="w-[329.62px] h-[70px] gap-[3px] ">
                      <h1 className="text-[Poppins] text-[24px] leading-[29px] tracking-[0em] left-0 font-semibold mt-5 ">
                      {imageHeader2}
                      </h1>
                      <p className="h-[22px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-grayLight mt-2 ">
                      {titleParagraph2}
                      </p>
                    </div>
                    <p className="w-[329px] h-[44px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-grayLighter mt-1 ">
                    {infoParagraph2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className= {`flex justify-center ${style.flexitem} items-center w-[379px] h-[424px] rounded-[25px]`}>
              <div className=" w-[350px] h-[371] gap-[24px] top-[17px] left-[14px]">
                <div className="w-[350px] h-[233px] rounded-[25px]">
                  <Image
                    className=""
                    layout="fixed "
                    width={351}
                    height={233}
                    src={imageSrc3}
                    alt="Costomimage3"
                  />
                </div>

                <div className="w-[350px] h-[114px] gap-[24px]">

                <div className="w-[346px] h-[130px] gap-[16px]">
                    <div className="w-[350px] h-[70px] gap-[3px] ">
                      <h1 className="text-[Poppins] text-[24px] leading-[29px] tracking-[0em] left-0 font-semibold mt-5 ">
                      {imageHeader3}
                      </h1>
                      <p className=" h-[22px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-grayLight mt-2 ">
                      {titleParagraph3}
                      </p>
                    </div>
                    <p className="w-[329px] h-[44px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-grayLighter mt-1 ">
                    {infoParagraph3}
                    </p>
                  </div>
                   </div>
              </div>
            </div>
          </div>
      </div>
      <div className={` w-screen h-[72px] flex flex-row items-center justify-end ${style.ButtonCareley}`}>
         <Link href="/providers/auth/signIn" passHref>
        <button className={`carelyoButton mx-20  w-[184px] h-[72px] p-[22px] gap-[12px] rounded-[35px] font-semibold right-0 bottom-0`}>
            <div>
              <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                Get Carelyo
                <div className="ml-3">
                  <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-white bg-opacity-[25%]  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
          </Link>
          </div>
      </div>
      </div>
  )
}

export default WhoHaveJoinedTamplate
