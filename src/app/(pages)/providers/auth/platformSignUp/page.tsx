
import { link } from "fs";
import PlatformProvisers from "../../Components/platformDetails";

import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "../../Components/svgComponent";
export default function PlatformSignUp() {
  return (
    <div>
  
      <PlatformProvisers
        Adress={"Provider Address"}
        city={"Provider City"}
        code={"Provider Zip/Postal Code"}
        state={"Provider State/Province"}
        country={"Provider Country"}
        currency={"Provider Currency"}
        website={"Provider Website"}
        color={"Provider Color"}
        logo={"Provider Logo"}
        telOrMobileNumber={"Provider Mobile Number"}
        licens={"MDCN License"}
        slogan={"Provider Slogan"}
        title={"Provider Title"}
        companyNo={"Provider Practice Number or Company registartion number"}
        email={"Provider Email"}
        providersName={"Provider Name"}
      />
    </div>
  );
}
