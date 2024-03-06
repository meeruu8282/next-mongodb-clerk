import React from 'react'
import Image from 'next/image'

interface ConvinientManagementTemplateProps {
  text: string // string

  // ... other props for sections of the tamplate
}

const ConvinientManagement: React.FC<ConvinientManagementTemplateProps> = ({ text }) => {
  return (
    <div className="  flex flex-row items-center justify-center max-w-[294px] w-[100%] h-[74px]   p-5 rounded-[20px] gap-[8px] bg-white shadow-[5%]">
      <Image
        className=""
        layout="fixed "
        width={23}
        height={22}
        src="/unionCheckmarkgreen.svg"
        alt="Unioncheckmark"
      />

      <div className="max-w-[218px] w-[100%] h-[24px] flex justify-center items-center">
        <h1 className=" text-[Poppins] text-[16px] font-normal leading-[24px] tracking-tighter text-left ">
          {text}
        </h1>
      </div>
    </div>
  )
}

export default ConvinientManagement
