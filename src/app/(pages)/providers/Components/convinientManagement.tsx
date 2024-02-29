import React from 'react'
import Image from 'next/image'

interface ConvinientManagementTemplateProps {
  text: string // string

  // ... other props for sections of the tamplate
}

const ConvinientManagement: React.FC<ConvinientManagementTemplateProps> = ({ text }) => {
  return (
    <div className="static lg:absolute flex flex-row items-center justify-center w-[294px] h-[74px] top-[370px]  p-[25px 22px] rounded-[20px] gap-[8px] bg-white shadow-[5%] mx-auto">
      <Image
        className=""
        layout="fixed "
        width={23}
        height={22}
        src="/unionCheckmarkgreen.svg"
        alt="Unioncheckmark"
      />

      <div className="w-[218px] h-[24px] flex justify-center items-center">
        <h1 className=" text-[Poppins] text-[16px] font-normal leading-[24px] tracking-tighter text-left ">
          {text}
        </h1>
      </div>
    </div>
  )
}

export default ConvinientManagement
