import Image from 'next/legacy/image'

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
    <div className="relative group max-w-xs mx-auto md:max-w-20">
      <div className="absolute z-10 group-hover:-inset-0 bg-sage rounded-[25px] blur opacity-50 transition duration-200"></div>
      <div className="relative flex flex-col items-center z-30 justify-between p-8 border-solid rounded-[15px] gap-8 bg-white hover:border-[1px] border-sage">
        <div className="flex items-center justify-center rounded-[15px] gap-[10px] relative">
          <div className="absolute z-20 w-full h-full bg-sage opacity-10 rounded-[15px]"></div>
          <div className="absolute">
            <Image
              className=""
              layout="fixed"
              width={25}
              height={25}
              src={icon}
              alt="Custom icon"
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center w-[14rem] h-[12rem] gap-[1rem]">
          <h1 className="text-base font-semibold leading-7 tracking-wide text-center">{header}</h1>
          <p className="opacity-[50%] text-sm leading-5 font-normal text-center">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Hoverfeaturesbox
