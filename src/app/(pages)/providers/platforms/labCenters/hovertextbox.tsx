import Image from 'next/image'

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
    <div className=" w-[594.24px] h-[142px] gap-[16px]">
      <div className=" w-[594.24px] h-[126px] gap-[16px] ">
        <h1 className="w-[442px] h-[32px] text-[poppins] text-[24px] font-semibold leading-8 text-left ">
            {header01}</h1>

        <p className="text-[poppins] text-[16px] font-normal leading-6 tracking-tight text-left opacity-50">
            {paragraph01}</p>
      </div>
    </div>
  )
}
export default Hovertextbox
