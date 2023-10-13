import SignUpProvisers from "../../Components/startFillingYourData";

import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "../../Components/svgComponent";
export default function SigUpHospital() {
  return (
   <div> <SignUpProvisers Adress={"Hospital Address"} telOrMobileNumber={"Mobile Number"} licens={"MDCN License"} providersName={"Hospital Name"} /> </div>
  );
}
