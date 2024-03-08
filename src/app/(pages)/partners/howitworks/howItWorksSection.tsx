import React from 'react'
import Image from "next/image";

function HowItWorksSection() {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[90%] border border-black'>
            <div className='flex justify-start items-center'>
                <h1 className='font-bold text-[Poppins] text-xl sm:text-2xl md:text-2xl lg:text-4xl'>How It Works</h1>
            </div>



            <div className='flex flex-row max-h-[33.3rem] gap-3'>
                <div className='leftside w-1/2 flex flex-col justify-center items-start h-auto'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-green-300 bg-opacity-15 rounded-3xl flex justify-center items-center w-[2.5rem] h-[2.5rem]'>
                            <h2>1</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-bold text-[Poppins] text-xl sm:text-2xl md:text-2xl lg:text-4xl'>Register on our Website</h1>
                        </div>

                    </div>

                    <div className='flex justify-center items-center pl-11'>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-base xl:text-lg opacity-50'>Begin the partnership process by visiting our website and accessing the partnership registration page. Fill out and submit the partnership registration form with your organization's details.</p>
                    </div>

                </div>
                <div className='rightside w-1/2 h-auto '>
                <Image
           layout="fixed"
               width={510}
               height={424}
               src="/LaptopHowItsWork.png"
               alt="mobilephone"
             />

                </div>

            </div>

        </div>
        

    </div>
  )
}

export default HowItWorksSection