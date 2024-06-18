
import { link } from "fs";
import DoctorProvisers from "../../Components/doctorOnboarding";

import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "../../Components/svgComponent";
export default function DoctorOnboardSignUp() {
  return (
    <div>
  
      <DoctorProvisers
        email={"Email Address:"}
        expdate={"MDCN Expiration Date"}
        telOrMobileNumber={"Mobile Number"}
        licens={"Medical and Dental council number (MDCN)"}
        issuedate={"MDCN Issued date"}
        providersName={"Doctor's First Name"}
        providersLastName={"Doctor's Last Name"}

      />
    </div>
  );
}
