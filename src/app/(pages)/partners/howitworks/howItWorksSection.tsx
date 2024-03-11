import React from 'react'
import Image from "next/image";






interface HowItWorksSectionTemplateProps {
    heading: string;
    number1: string;
  number2: string;
  number3: string;
  number4: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  header1: string;
  header2: string;
  header3: string;
  header4: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;



  
  
   
  
    // ... andra props för varje sektion av din mall
  }
  
  const HowItWorksSection: React.FC<HowItWorksSectionTemplateProps> = ({
    heading,
    number1,
number2,
number3,
number4,
text1,
text2,
text3,
text4,
header1,
header2,
header3,
header4,
image1,
image2,
image3,
image4,
 
   
    
  
    // ... andra props för varje sektion av din mall
  }) => {
  return (
    <div className='w-full flex justify-center items-center '>
        <div className='w-[90%] '>
            <div className='flex justify-start items-center mb-4'>
                <h1 className='font-bold text-[Poppins] text-2xl sm:text-2xl md:text-2xl lg:text-4xl'>{heading}</h1>
            </div>

            <div className='flex flex-col gap-8'>
                
            <div className='flex sm:flex-row flex-col max-h-[33.3rem] gap-3 justify-center items-center border border-black'>
                <div className='leftside w-[80%] sm:w-1/2 flex flex-col justify-center items-start h-auto  gap-2'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-greenText bg-opacity-50 rounded-full flex justify-center items-center w-[1.7rem] h-[1.7rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem] lg:w-[2.5rem] lg:h-[2.5rem]'>
                            <h2 className='text-greenText text-[Poppins] font-normal text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'>{number1}</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-bold text-[Poppins] text-xl sm:text-2xl md:text-2xl lg:text-4xl'>{header1}</h1>
                        </div>

                    </div>

                    <div className='flex justify-center items-center sm:pl-11 pl-9'>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-base xl:text-lg opacity-50'>{text1}</p>
                    </div>

                </div>
                <div className='rightside w-1/2 h-auto  hidden sm:block'>
                <Image
         className='max-h-[33.1rem]'
           layout="responsive"
               width={510}
               height={424}
               src={image1}
               alt="mobilephone"
             />

                </div>

            </div>

            
            <div className='flex sm:flex-row-reverse flex-col max-h-[33.3rem] gap-3 justify-center items-center '>
                <div className='leftside w-[80%] sm:w-1/2 flex flex-col justify-center items-start h-auto  gap-2'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-greenText bg-opacity-50 rounded-full flex justify-center items-center w-[1.7rem] h-[1.7rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem] lg:w-[2.5rem] lg:h-[2.5rem]'>
                            <h2 className='text-greenText text-[Poppins] font-normal text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'>{number2}</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-bold text-[Poppins] text-xl sm:text-2xl md:text-2xl lg:text-4xl'>{header2}</h1>
                        </div>

                    </div>

                    <div className='flex justify-center items-center sm:pl-11 pl-9'>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-base xl:text-lg opacity-50'>{text2}</p>
                    </div>

                </div>
                <div className='rightside w-1/2 h-auto hidden sm:block'>
                <Image
                  className='max-h-[33.1rem]'
           layout="responsive"
             width={510}
               height={424}
               src={image2}
               alt="number2"
             />

                </div>

            </div>
            <div className='flex sm:flex-row flex-col max-h-[33.3rem] gap-3 justify-center items-center '>
                <div className='leftside w-[80%] sm:w-1/2 flex flex-col justify-center items-start h-auto  gap-2'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-greenText bg-opacity-50 rounded-full flex justify-center items-center w-[1.7rem] h-[1.7rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem] lg:w-[2.5rem] lg:h-[2.5rem]'>
                            <h2 className='text-greenText text-[Poppins] font-normal text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'>{number3}</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-bold text-[Poppins] text-xl sm:text-2xl md:text-2xl lg:text-4xl'>{header3}</h1>
                        </div>

                    </div>

                    <div className='flex justify-center items-center sm:pl-11 pl-9'>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-base xl:text-lg opacity-50'>{text3}</p>
                    </div>

                </div>
                <div className='rightside w-1/2 h-auto  hidden sm:block'>
                <Image
                  className='max-h-[33.1rem]'
           layout="responsive"
               width={510}
               height={424}
               src={image3}
               alt="mobilephone"
             />

                </div>

            </div>
            <div className='flex sm:flex-row-reverse flex-col max-h-[33.3rem] gap-3 justify-center items-center '>
                <div className='leftside w-[80%] sm:w-1/2 flex flex-col justify-center items-start h-auto  gap-2'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-greenText bg-opacity-50 rounded-full flex justify-center items-center w-[1.7rem] h-[1.7rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem] lg:w-[2.5rem] lg:h-[2.5rem]'>
                            <h2 className='text-greenText text-[Poppins] font-normal text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'>{number4}</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-bold text-[Poppins] text-xl sm:text-2xl md:text-2xl lg:text-4xl'>{header4}</h1>
                        </div>

                    </div>

                    <div className='flex justify-center items-center sm:pl-11 pl-9'>
                        <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-base xl:text-lg opacity-50'>{text4}</p>
                    </div>

                </div>
                <div className='rightside w-1/2 h-auto  hidden sm:block'>
                <Image
                  className='max-h-[33.1rem]'
           layout="responsive"
               width={510}
               height={424}
               src={image4}
               alt="mobilephone"
             />

                </div>

            </div>




            </div>




        </div>
        

    </div>
  )
}

export default HowItWorksSection