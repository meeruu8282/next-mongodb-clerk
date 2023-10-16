import Image from "next/image";

export default function Greenbackground() {
  return (
    <div>
    {/* Green background container some of the css is called from global like greenBackground */}

    <div className="greenBackground w-screen h-[929px] items-center ">

      {/* Corner triangle */}
      <div className="absolute right-0 top-0">
        <div
          className="greenBackgroundTriangle"
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)" }} //changes shape of the squere div to a triangle
        ></div>
      </div>
      {/* Circle div overlapping the container */}
      <div className="greenCircleContainer">
        <div
          className="greenCircle" //makes the squere div to be a cirkle 
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%)" }} //changes shape of the cirkle to be half
        ></div>
      </div>

     
    </div>
  </div>
  );
}
