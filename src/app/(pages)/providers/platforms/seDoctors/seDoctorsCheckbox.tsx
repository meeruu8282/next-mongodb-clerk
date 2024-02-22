import Image from "next/image";


interface CheckboxTemplateProps {
  header: string
  paragraph: string


}


const SeDoctorsCheckbox: React.FC<CheckboxTemplateProps> = ({

  header,
  paragraph,


})  => {
    return (

      <div className="main flex flex-row min-h-[7rem] gap-2 justify-center ">
        <div className="leftside flex justify-center items-start ">
          <div className="flex justify-center items-center ">
            <div className=" rounded-lg p-3 bg-white bg-opacity-[10%]">
              <div className="border border-white rounded-full">
              <svg
                className="w-[0.8rem] h-[0.8rem] sm:h-[1.2rem] sm:w-[1.2rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                  xmlns="http://www.w3.org/2000/svg"
                ></path>
              </svg>

              </div>
          

            </div>

         

          </div>

        </div>

        <div className="rightside flex justify-center items-start">
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="flex justify-center items-center 2xl:w-[80%]">    
              <h1 className="font-semibold text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-[poppins]">{header}</h1>
            </div>
            <div className="flex justify-center items-center">
            <p className="font-normal text-sm sm:text-base md:text-base lg:text-base xl:text-base text-[poppins]">{paragraph}</p>

            </div>
           
          </div>
        </div>
      </div>
  
    )
}

export default SeDoctorsCheckbox





