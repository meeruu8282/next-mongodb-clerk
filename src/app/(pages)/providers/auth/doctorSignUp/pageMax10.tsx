import DoctorProvisers from "../../Components/clinicDoctorOnboarding";
import {
} from "../../Components/svgComponent";
export default function DoctorOnboardClinicMax10() {
  return (
    <div>
  
      <DoctorProvisers
        email={"Email Address:"}
        idno={"National Identification Number"}
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
