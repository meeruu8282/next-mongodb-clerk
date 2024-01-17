import Image from "next/legacy/image"

interface CheckTextboxTamplateProps {
  header: string
  paragraph: string

  // ... andra props för varje sektion av din mall
}

const CheckTextbox: React.FC<CheckTextboxTamplateProps> = ({
  
  header,
  paragraph,

  // ... andra props för varje sektion av din mall
}) => {
  return (
    <div className=" flex flex-col justify-between ">
    <div className="flex flex-row items-center gap-2">
      <div className="h-[45px] w-[45px] rounded-[15px] p-3 bg-[#45AC60] bg-opacity-[10%] gap-10  ">
        <Image
          className=""
          layout="fixed"
          width={21.67}
          height={21.67}
          src="/greenunioncheckmark.svg"
          alt="Unioncheckmark"
        />
      </div>

      <h1 className=" w-[545px] h-[38px] text-[poppins] text-[24px] font-semibold leading-9 tracking-tighter text-left ">
        {header}
      </h1>
    </div>
    <div className=" w-[591px] h-[128px] opacity-50 text-[poppins] text-[20px] font-normal leading-8 tracking-tighter text-left">
      {paragraph}
    </div>
  </div>
  )
}
export default CheckTextbox
