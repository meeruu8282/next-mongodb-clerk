import Image from "next/image";
import Link from 'next/link';
import CarelyoButton from "../getStartedButton";

import style from './joinCarelynow.module.css'


interface CardTemplateProps {
  imageSrc: string;
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;
  icon1text: string;
  icon2text: string;
  icon3text: string;
  icon4text: string;


}

const JoinCarelynowintrobox: React.FC<CardTemplateProps> = ({
  imageSrc,
  icon1,
  icon2,
  icon3,
  icon4,
  icon1text,
  icon2text,
  icon3text,
  icon4text,


}) => {
  return (

    <div className="w-screen flex justify-center items-center border border-black mt-5 mb-8">
      <div className="w-[90%] h-auto flex items-center justify-center flex-col-reverse gap-6 border border-blue-500 md:flex-row">
        {/* vänstersida*/}
        <div className="flex flex-col h-auto justify-center items-start gap-6">

          <div className=" flex items-center w-[289px] h-[45px] gap-4 ">
            <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-sage bg-opacity-[10%]  ">
              <div className="flex justify-center items-center w-[30px] h-[30px]">

                <Image
                  className=""
                  layout="responsive"
                  width={19}
                  height={19}
                  src={icon1}
                  alt="Costomicon1"
                />
              </div>
            </div>

            <div className=" text-[Poppins] text-[16px] text-sm sm:text-sm md:text-sm lg:text-base xl:text-base w-[228px] h-[22px] justify-center justify-items-center">

              {icon1text}
            </div>
          </div>

          <div className="flex items-center w-[289px] h-[45px] gap-4 ">
            <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-sage bg-opacity-[10%]  ">
              <div className="flex justify-center items-center w-[21px] h-[21px]">

                <Image
                  className=""
                  layout="fixed "
                  width={19}
                  height={19}
                  src={icon2}
                  alt="Costomicon2"
                />
              </div>
            </div>
            <div className=" text-[Poppins] text-[16px] w-[228px] h-[22px] justify-center justify-items-center">

              {icon2text}
            </div>
          </div>

          <div className="flex items-center w-[300px] h-[45px] gap-4 ">
            <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-sage bg-opacity-[10%]  ">
              <div className="flex justify-center items-center w-[21px] h-[21px]">

                <Image
                  className=""
                  layout="fixed "
                  width={19}
                  height={19}
                  src={icon3}
                  alt="Costomicon3"
                />
              </div>
            </div>
            <div className=" text-[Poppins] text-[16px]   h-[22px] justify-center justify-items-center">

              {icon3text}
            </div>
          </div>

          <div className="flex items-center w-[300px] h-[45px] gap-4 ">
            <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-sage bg-opacity-[10%]  ">
              <div className="flex justify-center items-center w-[21px] h-[21px]">

                <Image
                  className=""
                  layout="fixed "
                  width={19}
                  height={19}
                  src={icon4}
                  alt="Costomicon4"
                />
              </div>
            </div>
            <div className=" text-[Poppins] text-[16px]   h-[22px] justify-center justify-items-center">

              {icon4text}
            </div>
          </div>
          <div className="flex place-self-center  md:place-self-start">
          <CarelyoButton
          className="w-full"
            buttonText="Join Carelyo Now"
            buttonSize="prb"
            color="primary"
            size="small"
          />
          </div>

       






        </div>






        {/* högersida*/}
        <div className="flex justify-center items-center">

          <Image

            width={1070}
            height={591}
            src={imageSrc}
            alt="Costomimage"
          />



        </div>


      </div>
    </div>

  );
};

export default JoinCarelynowintrobox;




