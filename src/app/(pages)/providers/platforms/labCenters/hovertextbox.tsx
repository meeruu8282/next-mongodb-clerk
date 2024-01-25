
interface HovertextboxTamplateProps {
  header01: string
  paragraph01: string

  // ... andra props för varje sektion av din mall
}

const Hovertextbox: React.FC<HovertextboxTamplateProps> = ({
  header01,
  paragraph01,

  // ... andra props för varje sektion av din mall
}) => {
  return (
    <div className="relative group">
      <div className="absolute group-hover:-inset-10 bg-sage rounded-[25px] blur opacity-5  "></div>

      <div className=" relative flex flex-col justify-center items-center w-[629px] h-[180px] bg-white  rounded-[25px]  hover:border-[1px] border-sage ">
        <div className="  w-[594.24px] h-[122px] gap-[16px] rounded-[25px] ">
          <div className=" w-[594.24px] h-[126px] gap-[16px] ">
            <h1 className="w-[442px] h-[32px] text-[poppins] text-[24px] font-semibold leading-8 text-left ">
              {header01}
            </h1>

            <p className="text-[poppins] text-[16px] font-normal leading-6 tracking-tight text-left opacity-50">
              {paragraph01}
            </p>
          </div>
          <div className="w-[526px] border-[1px] left-0  border-sage group-hover:hidden "></div>
        </div>
      </div>
    </div>
  )
}
export default Hovertextbox
