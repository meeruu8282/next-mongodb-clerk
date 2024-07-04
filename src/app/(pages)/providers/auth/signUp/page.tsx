import SignUpProvisers from "../../Components/startFillingYourData";

import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "../../Components/svgComponent";
export default function DoctorSignUp() {
  return (
   <div> <SignUpProvisers 
   providerType={"Provider Type"} 
   telOrMobileNumber={"Mobile Number"} 
   email={"Email address"} 
   taxno={"Company Tax Nr"}
   city={"City"}
   state={"State"}
   country={"Country"}
   address={"Your/Company Address"}
   regno={"Company Registration Nr or National Identification Number"}
   providersName={"Company Name or Full Name"} /> </div>
  );
}
