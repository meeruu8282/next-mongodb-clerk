import SignUpProvisers from "../../Components/startFillingYourData";

import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "../../Components/svgComponent";
export default function DoctorSignUp() {
  return (
   <div> <SignUpProvisers Adress={"Your Address"} telOrMobileNumber={"Telephone Number"} licens={"MDCN License"} providersName={"Full Name"} /> </div>
  );
}
