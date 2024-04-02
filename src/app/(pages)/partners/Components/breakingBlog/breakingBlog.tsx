import React from 'react'
import CarelyoButton from '../../../providers/Components/getStartedButton';
import Image from "next/image";







interface BreakingBlogTemplateProps {
  heading: string;
  heading2: string;
  buttonText: string;
  text1: string;
  text2: string;
  image1: string;
  image2: string;
  minutes1: string;
  minutes2: string;

}

const breakingBlog: React.FC<BreakingBlogTemplateProps> = ({
  heading,
  heading2,
  buttonText,
  text1,
  text2,
  image1,
  image2,
  minutes1,
  minutes2,


}) => {
  return (
    <div className='flex flex-col w-screen justify-center items-center gap-4 '>
      <div className='flex justify-center items-start md:flex-row flex-col w-[90%] gap-3 mb-10'>
        <div className='flex justify-start items-center w-full'>
          <h1 className='text-greenText text-[Poppins] font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>{heading}</h1>
        </div>
        <div className='flex justify-end items-center w-full'>
          <div className='flex flex-col justify-center items-start gap-2'>
            <p className='opacity-[50%] text-[Poppins] font-normal text-sm sm:text-base md:text-lg lg:text-lg'>{heading2}</p>
            <div className='max-w-[11.3rem]'>
              <CarelyoButton
                buttonText={buttonText}
                buttonSize="prb"
                color="primary"
                size="small" />

            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center md:flex-row flex-col w-[90%] border border-black gap-4 h-auto '>
        <div className='flex flex-col justify-center items-start md:w-2/5 w-full h-full gap-2 '>
          <div className='max-h-[32rem] object-cover w-[100%]'>
            <Image
              className='max-h-[32rem] object-cover h-[100%]' 
              layout="responsive"
              width={493}
              height={435}
              src={image1}
              alt="GroupHighfive-breakingBlog"
            />
          </div>





          <h2 className='text-[Poppins] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl md:w-[86%] w-full  h-[4rem] '>{text1}</h2>
          <div className='flex flex-row justify-center items-center gap-2 mt-auto '>
            <p className='opacity-[50%] font-semibold text-xs sm:text-sm md:text-base lg:text-base'>Carelyo</p>
            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3.5" r="3" fill="#45AC60" />
            </svg>
            <p className='opacity-[50%] font-semibold text-xs sm:text-sm md:text-base lg:text-base'>{minutes1}</p>
          </div>

        </div>
        <div className='flex flex-col justify-center items-start md:w-3/5 w-full h-full gap-2 '>

          <div className='max-h-[32rem] object-cover w-[100%]'>
            <Image
              className='max-h-[32rem] object-cover h-[100%]'
              layout="responsive"
              width={679}
              height={435}
              src={image2}
              alt="Videocall-breakingBlog"
            />
          </div>


          <h2 className='text-[Poppins] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl md:w-[55%]  w-full h-[4rem]'>{text2}</h2>
          <div className='flex flex-row justify-center items-center gap-2 mt-auto'>
            <p className='opacity-[50%] font-semibold text-xs sm:text-sm md:text-base lg:text-base'>Carelyo</p>
            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3.5" r="3" fill="#45AC60" />
            </svg>
            <p className='opacity-[50%] font-semibold text-xs sm:text-sm md:text-base lg:text-base'>{minutes2}</p>


          </div>

        </div>

      </div>



    </div>
  )
}

export default breakingBlog