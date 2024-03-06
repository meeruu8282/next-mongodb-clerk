import React from 'react'

const UseCarelyoRightNow = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-normal">
        Use <span className=" font-extrabold">Carelyo</span> right now
      </h2>
      <p className="text-center font-light max-w-xl mx-auto mt-5">
        Here's a step-by-step guide on how to utilize our services, including telemedicine,
        electronic health records (EHRs), and our streamlined workflow
      </p>
      <div className="w-full flex gap-6 mt-6">
        <div className="image-container w-1/2">
          <img src="/girlWithMask.png" alt="?" />
        </div>
        <div className="button-container w-1/2"></div>
      </div>
    </div>
  )
}

export default UseCarelyoRightNow
