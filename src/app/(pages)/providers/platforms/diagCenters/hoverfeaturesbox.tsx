import Image from "next/legacy/image"

interface HoverfeaturesboxTamplateProps {
  icon: string
  header: string
  paragraph: string

  // ... andra props för varje sektion av din mall
}

const Hoverfeaturesbox: React.FC<HoverfeaturesboxTamplateProps> = ({
  icon,
  header,
  paragraph,

  // ... andra props för varje sektion av din mall
}) => {
  return (
    <div className='relative group'>
       <div className="absolute group-hover:-inset-10 bg-sage rounded-[25px] blur opacity-5  "></div>


    <div className=" relative flex flex-col items-center justify-between w-[267px] h-[306px] p-8   border-solid rounded-[15px] gap-[6px] bg-white hover:border-[1px] border-sage ">
      <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[15px] gap-[10px] relative">
        <div className="absolute w-full h-full bg-sage opacity-10 rounded-[15px]"></div>
        <div className="absolute">
          <Image
          className=""
          layout="fixed"
          width={25}
          height={25}
          src={icon}
          alt="Custom icon" />
        </div>
      </div>

      <div className=" flex flex-col justify-between items-center w-[256px] h-[158px]  gap-[16px] ">
        <h1 className=" w-[224px] h-[58px] text-[poppins] text-base font-semibold leading-7 tracking-wide text-center ">
          {header}
        </h1>

        <p className=" w-[224px] h-[88px] opacity-[50%] text-[poppins] text-[14px] leading-5 font-normal  text-center">
          {paragraph}
        </p>
      </div>
    </div>
    </div>
  )
}
export default Hoverfeaturesbox
