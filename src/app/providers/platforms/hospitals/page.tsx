import Image from 'next/image'

export default function Hospitals() {
  return (
    <div className=" h-auto ">
     {/* Green background container */}
  <div className="greenBackground"> 
      <div className="relative">
          {/* Corner triangle */}
          <div 
              className="greenBackgroundTriangle"
              style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)" }}
          >
          </div>
          {/* Circle div overlapping the container */}
          <div className="greenCircleContainer">
              <div
                  className="greenCircle"
                  style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)" }}
              ></div>
          </div>
      </div>
  </div>
  </div>
  )
}