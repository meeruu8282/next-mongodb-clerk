import BlurBackGroundDesign from "../Components/blurBackGroundDesign";
import HelpCenter from "../Components/helpCenter";
import SearchBar from "../Components/searchBar";
import SuperCharge from "../Components/superCharge";

export default function Help() {
  return (
    <div className="flex flex-col justify-center align-center items-center min-h-screen">
      <BlurBackGroundDesign/>
      <SearchBar/>
      <HelpCenter/>
     <SuperCharge/>
    </div>
  );
}
