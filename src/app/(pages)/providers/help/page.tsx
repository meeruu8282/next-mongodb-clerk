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
        undertitle={""} />
      <HelpCenter />
      <ContactComponent />
      <LocationComponent
        title1={"Visit our stores"}
        title2={"Address"}
        title3={"Email"}
        title4={"Phone Number"}
        logo1={"/Mask group.png"}
        logo2={
          <svg className="ml-6" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="44" rx="22" fill="#45AC60" fill-opacity="0.15" />
            <g clip-path="url(#clip0_341_1234)">
              <path d="M30 14H14C12.9 14 12.01 14.9 12.01 16L12 28C12 29.1 12.9 30 14 30H30C31.1 30 32 29.1 32 28V16C32 14.9 31.1 14 30 14ZM29.6 18.25L22.53 22.67C22.21 22.87 21.79 22.87 21.47 22.67L14.4 18.25C14.15 18.09 14 17.82 14 17.53C14 16.86 14.73 16.46 15.3 16.81L22 21L28.7 16.81C29.27 16.46 30 16.86 30 17.53C30 17.82 29.85 18.09 29.6 18.25Z" className="fill-current text-sage" />
            </g>
            <defs>
              <clipPath id="clip0_341_1234">
                <rect width="24" height="24" fill="white" transform="translate(10 10)" />
              </clipPath>
            </defs>
          </svg>
        }
        logo3={
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="44" rx="22" className="fill-current text-sage" fill-opacity="0.1" />
            <g clip-path="url(#clip0_341_1236)">
              <path d="M29.23 25.2598L26.69 24.9698C26.08 24.8998 25.48 25.1098 25.05 25.5398L23.21 27.3798C20.38 25.9398 18.06 23.6298 16.62 20.7898L18.47 18.9398C18.9 18.5098 19.11 17.9098 19.04 17.2998L18.75 14.7798C18.63 13.7698 17.78 13.0098 16.76 13.0098H15.03C13.9 13.0098 12.96 13.9498 13.03 15.0798C13.56 23.6198 20.39 30.4398 28.92 30.9698C30.05 31.0398 30.99 30.0998 30.99 28.9698V27.2398C31 26.2298 30.24 25.3798 29.23 25.2598Z" className="fill-current text-sage" />
            </g>
            <defs>
              <clipPath id="clip0_341_1236">
                <rect width="24" height="24" fill="white" transform="translate(10 10)" />
              </clipPath>
            </defs>
          </svg>
        }
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
