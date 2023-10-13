import BlurBackGroundDesign from "../Components/blurBackgrounddesign/blurBackGroundDesign";
import SuperCharge from "../Components/superCharge/superCharge";

export default function Help() {
  return (
    <div className="flex justify-center ">
      <BlurBackGroundDesign/>
      
       {/* Code in components folder then superCarge */}
     <SuperCharge/>
    </div>
  );
}
