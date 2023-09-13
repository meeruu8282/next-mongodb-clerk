

import Image from 'next/image'
import SuperCharge from '../../Components/superCharge'
import JoinCarelyheader from '../../Components/joinCarelyoheader'

export default function Clinics() {
  return (
    <div>

      <JoinCarelyheader userType='Self-Employed Doctors'/>


    {/* Green background container */}
    <div className="greenBackground">
      {/* Corner triangle */}
      <div className="absolute right-0 top-0">
        <div
          className="greenBackgroundTriangle"
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)" }}
        ></div>
      </div>
      {/* Circle div overlapping the container */}
      <div className="greenCircleContainer">
        <div
          className="greenCircle"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%)" }}
        ></div>
      </div>

      <div className="relative"></div>
    </div>
     {/* Code in components folder then superCarge */}
     <SuperCharge/>
  </div>
  )
}
