import BlurBackGroundDesign from "../Components/blurBackGroundDesign";
import ContactComponent from "../Components/contactComponent";
import HelpCenter from "../Components/helpCenter";
import LocationComponent from "../Components/locationComponent";
import SearchBar from "../Components/searchBar";
import SuperCharge from "../Components/superCharge";

export default function Help() {
  return (
    <div className="flex flex-col align-center items-center min-h-screen">
      <BlurBackGroundDesign/>
      <SearchBar/>
      <HelpCenter/>
      <ContactComponent/>
      <LocationComponent/>
     <SuperCharge/>
    </div>
  );
}
