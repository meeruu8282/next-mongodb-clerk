import BlurBackGroundDesign from "../Components/blurBackGroundDesign";
import ContactComponent from "../Components/contactComponent";
import HelpCenter from "../Components/helpCenter";
import LocationComponent from "../Components/locationComponent";
import SearchBar from "../Components/searchBar";
import SuperCharge from "../Components/superCharge";
import SuperChargeMobile from "../Components/superCharge/SuperChargeMobile";

export default function Help() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <BlurBackGroundDesign />
      <SearchBar
        title={"Welcome to the Carelyo Help Center!"}
        />
      <HelpCenter />
      <ContactComponent />
      <LocationComponent
        title1={"Visit our stores"}
        title2={"Address"}
        title3={"Email"}
        title4={"Phone Number"}
        logo1={"/Mask group.png"}
        logo2={"/emailGreen.svg"}
        logo3={"/phoneGreen.svg"}
        paragraph1={"Find us at these locations."}
        paragraph21={"Swedcon18 AB, Allmogevägen 106,"}
        paragraph22={"352 53 Växjö, Sweden"}
        link1={"Our locations"}
        link2={"hello@swedcon18.com"}
        link3={"+46701410631"}
      />
       <div className="md:block hidden">
        <SuperCharge />
      </div> 
      <div className="block md:hidden"><SuperChargeMobile /></div> 
    </div>
  );
}