
import { link } from "fs";
import SignUpProvisers from "../../Components/fillingYourDataClinic";

import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "../../Components/svgComponent";
export default function ClinicSignUp() {
  return (
    <div>
  
      <SignUpProvisers
        Adress={"Clinic Address"}
        telOrMobileNumber={"Mobile Number"}
        licens={"MDCN License"}
        providersName={"Clinic Name"}
      />
    </div>
  );
}
