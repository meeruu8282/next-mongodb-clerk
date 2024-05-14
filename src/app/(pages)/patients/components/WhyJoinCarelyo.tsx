import React from 'react'

const WhyJoinCarelyo = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full">
      <div className="text-container w-full lg:w-1/2">
        <h2 className="font-bold text-4xl mb-3">Why Join Carelyo?</h2>
        <p className="font-extralight mb-2">
          Telemedicine expands your healthcare reach, connecting you with specialists and healthcare
          providers regardless of your location.
        </p>
        <p className="font-extralight mb-6">
          Integrate with electronic health record systems, allowing healthcare providers to access
          and update patients' medical records during virtual consultations. This seamless
          integration ensures that healthcare professionals have up-to-date information and a
          comprehensive view of the patient's medical history, test results, medications, and
          treatment plans.
        </p>
            <div>
              <button className="carelyoButtonText flex items-center justify-center text-[16px] carelyoButton absolute w-[230px] h-[72px] p-[6px] gap-[10px] font-semibold">
                Join Carelyo Now
                <div className="ml-3">
                  <div className="h-[28px] w-[28px]  rounded-[100px] flex justify-center items-center bg-white bg-opacity-[25%]  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center align-center">
        
        <img src="/GirlOnTablet.png" alt="girl on tablet" />
        
      </div>
      
    </div>
  )
}

export default WhyJoinCarelyo
