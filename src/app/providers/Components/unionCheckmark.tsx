import React from 'react'
import Image from "next/image";
import Link from 'next/link';


  
  const UnionCheckmark:  React.FC = () => {

  
  return (
   
    <div className="h-[45px] w-[45px] rounded-[15px] p-3 bg-[#FFFFFF] bg-opacity-[10%] gap-10  ">
    <Image
                    className=""
                    layout="fixed "
                    width={23}
                    height={22}
                    src="/Union.svg"
                    alt="Unioncheckmark"
                  />
     
    </div>

  
  )
}

export default UnionCheckmark