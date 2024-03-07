import React from 'react'
import WelcomeToCarelyo from './WelcomeToCarelyo'
import Image from 'next/image'

const DeliveringBetterHealthcareSolution = () => {
  return (
    <div className="flex w-full relative top-0 left-0">
      <div className="w-1/2 justify-center flex flex-col">
        <div className="mb-5">
          <WelcomeToCarelyo />
        </div>
        <h1 className=" text-[5rem] ">Delivering Better Healthcare Solutions</h1>
        <p className=" font-extralight text-base">
          Healthcare platform that seamlessly integrates telemedicine, electronic health records,
          and streamlined workflows for a convenient and efficient healthcare experience.
        </p>
        <div className="button-container mt-5 flex gap-7">
          <button className="bg-[#45AC60] text-white rounded-full px-5 py-4">Sign Up</button>
          <a className="my-auto font-bold" href="#">
            Learn More *Arrow*
          </a>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          src="/girlWithHeadset.png"
          alt="?"
          layout="responsive"
          width={541}
          height={487}
          objectFit=""
        />
      </div>
    </div>
  )
}

export default DeliveringBetterHealthcareSolution
