import React from 'react'

const WhyJoinCarelyo = () => {
  return (
    <div className="flex w-full">
      <div className="text-container w-1/2">
        <h2 className="font-bold text-4xl mb-3">Why Join Carelyo?</h2>
        <p className="font-extralight mb-2">
          Telemedicine expands your healthcare reach, connecting you with specialists and healthcare
          providers regardless of your location.
        </p>
        <p className=" font-extralight">
          Integrate with electronic health record systems, allowing healthcare providers to access
          and update patients' medical records during virtual consultations. This seamless
          integration ensures that healthcare professionals have up-to-date information and a
          comprehensive view of the patient's medical history, test results, medications, and
          treatment plans.
        </p>
      </div>
      <div className="w-1/2 flex justify-center align-center">
        <img src="/GirlOnTablet.png" alt="girl on tablet" />
      </div>
    </div>
  )
}

export default WhyJoinCarelyo
