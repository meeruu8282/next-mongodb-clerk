import BlurBackGroundDesign from "../Components/blurBackGroundDesign";
import SearchBar from "../Components/searchBar";
import SuperCharge from "../Components/superCharge";

export default function Help() {
  return (
    <div className="justify-center items-center min-h-screen">
      <BlurBackGroundDesign/>
      <SearchBar/>
       {/* Code in components folder then superCarge */}
     <SuperCharge/>
    </div>
  );
}
