import Image from 'next/image'
import React from 'react'

const FindNearbyHealthcareFacilities = () => {
  return (
    <div className="mx-auto w-4/5">
      <div className="">
        <h2 className="mt-10 mb-10 font-semibold text-2xl md:text-left text-center">
          Find Nearby Healthcare Facilities{' '}
        </h2>
        <div className="flex justify-center md:items-baseline items-center flex-col md:flex-row gap-7">
          <div className="flex flex-col gap-3 max-w-[350px] shadow-[50px_50px_100px_rgba(50,50,50,0.05)] rounded-2xl">
            <Image
              src="/DoctorMeeting.png"
              alt="Doctor meeting with patient"
              width={350}
              height={125}
            />

            <h4 className=" font-semibold text-2xl">Family Physicians</h4>
            <p className=" font-extralight text-lg">
              Offer comprehensive medical care for individuals and families
            </p>
            <a className=" w-1/2" href="#">
              <div className="flex items-center gap-3">
                <h5 className="font-semibold text-[#45AC60]">Find Now</h5>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.00021H12.17L7.29 13.8802C6.9 14.2702 6.9 14.9102 7.29 15.3002C7.68 15.6902 8.31 15.6902 8.7 15.3002L15.29 8.71021C15.68 8.32021 15.68 7.69022 15.29 7.30022L8.71 0.700215C8.32 0.310215 7.69 0.310215 7.3 0.700215C6.91 1.09021 6.91 1.72022 7.3 2.11022L12.17 7.00022H1C0.45 7.00022 0 7.45021 0 8.00022C0 8.55021 0.45 9.00021 1 9.00021Z"
                    fill="#45AC60"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-3 max-w-[350px] shadow-[50px_50px_100px_rgba(50,50,50,0.05)] rounded-2xl">
            <Image src="/ClinicDesk.png" alt="Clinic help desk" width={350} height={125} />
            <h4 className=" font-semibold text-2xl">Clinics</h4>
            <p className=" font-extralight text-lg">
              Provide convenient and accessible healthcare services
            </p>{' '}
            <a className=" w-1/2" href="#">
              <div className="flex gap-3 items-center">
                <h5 className="font-semibold text-[#45AC60]">Find Now</h5>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.00021H12.17L7.29 13.8802C6.9 14.2702 6.9 14.9102 7.29 15.3002C7.68 15.6902 8.31 15.6902 8.7 15.3002L15.29 8.71021C15.68 8.32021 15.68 7.69022 15.29 7.30022L8.71 0.700215C8.32 0.310215 7.69 0.310215 7.3 0.700215C6.91 1.09021 6.91 1.72022 7.3 2.11022L12.17 7.00022H1C0.45 7.00022 0 7.45021 0 8.00022C0 8.55021 0.45 9.00021 1 9.00021Z"
                    fill="#45AC60"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-3 max-w-[350px] shadow-[50px_50px_100px_rgba(50,50,50,0.05)] rounded-2xl">
            <Image src="/HospitalInformation.png" alt="?" width={350} height={125} />
            <h4 className=" font-semibold text-2xl">Hospitals</h4>
            <p className=" font-extralight text-lg">
              Advanced medical centers equipped with state-of-the-art facilities
            </p>
            <a className=" w-1/2" href="#">
              <div className="flex gap-3 items-center">
                <h5 className="font-semibold text-[#45AC60]">Find Now</h5>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.00021H12.17L7.29 13.8802C6.9 14.2702 6.9 14.9102 7.29 15.3002C7.68 15.6902 8.31 15.6902 8.7 15.3002L15.29 8.71021C15.68 8.32021 15.68 7.69022 15.29 7.30022L8.71 0.700215C8.32 0.310215 7.69 0.310215 7.3 0.700215C6.91 1.09021 6.91 1.72022 7.3 2.11022L12.17 7.00022H1C0.45 7.00022 0 7.45021 0 8.00022C0 8.55021 0.45 9.00021 1 9.00021Z"
                    fill="#45AC60"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindNearbyHealthcareFacilities
