
import Image from 'next/image'

export default function Sedoctors() {
  return (
    <div className=" h-auto ">
    <h1 className="text-center text-3xl ">
        Joining carelyo as a{" "}
        <span className="text-greenText">
            Self-Employed <br /> Doctors
        </span>{" "}
        comes with numerous advantages
    </h1>
    <p className="text-center">
        With our innovative features and comprehensive support, we aim to
        empower your practice and enhance patient care.
    </p>
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
