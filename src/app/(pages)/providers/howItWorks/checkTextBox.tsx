import Image from "next/legacy/image"
import style from './howItWork.module.css'

interface CheckTextboxTemplateProps {
  header: string
  paragraph: string


}

const CheckTextbox: React.FC<CheckTextboxTemplateProps> = ({

  header,
  paragraph,


}) => {
  return (
    <div className=" flex flex-col justify-start items-center gap-2 ">
    <div className="flex flex-row justify-center items-center w-full">
      <div className="h-auto w-auto rounded-2xl p-2 bg-sage bg-opacity-[10%] gap-3">
      <div className="w-auto h-auto rounded-full  items-center">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM7.29 14.79L3.7 11.2C3.31 10.81 3.31 10.18 3.7 9.79C4.09 9.4 4.72 9.4 5.11 9.79L8 12.67L14.88 5.79C15.27 5.4 15.9 5.4 16.29 5.79C16.68 6.18 16.68 6.81 16.29 7.2L8.7 14.79C8.32 15.18 7.68 15.18 7.29 14.79Z"
                  className="fill-current text-sage"
                />
              </svg>
            </div>
      </div>

      <h1 className={`w-[100%] h-[38px] text-[Poppins] text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-semibold pl-2 ${style.changeHeightToAuto}`}>
        {header}
      </h1>
    </div>
    <div className={` w-[100%] h-[128px] opacity-50 text-[Poppins] text-sm sm:text-base md:text-base lg:text-lg xl:text-xl font-normal ${style.changeHeightToAuto}`}>
      {paragraph}
    </div>
  </div>
  )
}
export default CheckTextbox
