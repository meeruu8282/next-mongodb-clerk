import JoinCarelynowintrobox from "../../Components/joinCarelynowintrobox";
import SuperCharge from "../../Components/superCharge";

export default function DiagCenters() {
  return (
    <div>
      <div className=" flex justify-end ">
        <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
          <div className="  absolute w-[858px] h-[192px] left-[150px] gap-[64px] ">
            <div className="w-[838px]  h-[104px] max-w-screen-sm mx-auto">
              <h1 className="text-center  md:text-2xl lg:text-3xl whitespace-normal ">
                Strengthening{" "}
                <span className="text-greenText whitespace-normal font-bold">
                  Diagnostic Centers
                </span>{" "}
                for Enhanced Efficiency
              </h1>
            </div>
            <div className="w-[858px] h-[64px] opacity-[50%]">
              <p className="text-center font-poppins w-400  md:text-[15px] lg:text-[20px] ">
                Empower diagnostic centers and streamline their processes,
                allowing them to provide high-quality services to patients.
              </p>
            </div>
          </div>
          {/* Use joincarelynowintrobox-component in componentsfolder and send in your costomised props to the tamplate */}
          <JoinCarelynowintrobox
            icon1="/profileicon.svg"
            icon2="/searchicon.svg"
            icon3="/calendericon.svg"
            icon4="/chatbubbleicon.svg"
            icon1text="Sign-Up and Profile Creation"
            icon2text="Provide Pharmacy Information"
            icon3text="Verification and Validation"
            icon4text="Managing Laboratory Operations"
            imageSrc="/diagnostic.jpg"
          />
        </div>
      </div>
      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>
  );
}
