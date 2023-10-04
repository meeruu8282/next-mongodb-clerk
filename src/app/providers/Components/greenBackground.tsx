import Image from "next/image";

export default function Greenbackground() {
  return (
    <div>
    {/* Green background container */}

    <div className="greenBackground w-screen h-[929px] items-center ">

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

     
    </div>
  </div>
  );
}
