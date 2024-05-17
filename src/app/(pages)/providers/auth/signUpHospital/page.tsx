import SignUpProvisers from "../../Components/fillingYourDataHospital";

import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "../../Components/svgComponent";
export default function SignUpHospital() {
  return (
   <div> <SignUpProvisers Adress={"Hospital Address"} telOrMobileNumber={"Mobile Number"} licens={"MDCN License"} providersName={"Hospital Name"} /> </div>
  );
}
