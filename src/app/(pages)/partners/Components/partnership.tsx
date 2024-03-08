import React from 'react'



interface PartnershipTemplateProps {
  number1: string;
  number2: string;
  number3: string;
  number4: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;


 

  // ... andra props för varje sektion av din mall
}

const Partnership: React.FC<PartnershipTemplateProps> = ({
number1,
number2,
number3,
number4,
text1,
text2,
text3,
text4
 
  

  // ... andra props för varje sektion av din mall
}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
    
          <div className='flex flex-col sm:flex-row justify-between items-center gap-3 w-[95%] lg:w-[95%] xl:w-[80%]'>
              <div className='flex flex-col justify-center items-center max-w-[13rem] w-full gap-3'>
              <div className='flex justify-center items-center'>
                <h2 className='font-bold text-[Poppins] text-2xl sm:text-3xl md:text-3xl lg:text-4xl'>{number1}</h2>
                </div>
                <div>
                <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-xl xl:text-xl opacity-50'>{text1}</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center max-w-[13rem] w-full gap-3'>
              <div className='flex justify-center items-center'>
                <h2 className='font-bold text-[Poppins] text-2xl sm:text-3xl md:text-3xl lg:text-4xl'>{number2}</h2>
                </div>
                <div>
                <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-xl xl:text-xl   opacity-50'>{text2}</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center max-w-[13rem] w-full gap-3'>
              <div className='flex justify-center items-center'>
                <h2 className='font-bold text-[Poppins] text-2xl sm:text-3xl md:text-3xl lg:text-4xl'>{number3}</h2>
                </div>
                <div>
                <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-xl xl:text-xl   opacity-50'>{text3}</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center max-w-[13rem] w-full gap-3'>
              <div className='flex justify-center items-center'>
                <h2 className='font-bold text-[Poppins] text-2xl sm:text-3xl md:text-3xl lg:text-4xl'>{number4}</h2>
                </div>
                <div>
                <p className='text-[Poppins] font-normal text-base sm:text-base md:text-base lg:text-xl xl:text-xl  opacity-50'>{text4}</p>
                </div>
              </div>
            
          
           
          </div>

        
    </div>
  )
}

export default Partnership