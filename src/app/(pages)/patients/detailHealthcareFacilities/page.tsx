'use client'
import OurService from "./ourService"

const DetailHealthcareFacilities = () => {
  return (
    <div>
   
<OurService
        image={"/ourService.png"}
        header1={"Skin Consultation"}
        paragraph1={"Comprehensive asseement of your skin condition and personalized treatment recommendation. "}
        header2={"Acne Treatment"}
        paragraph2={"Trageted solutions for acne-ptone skin,including topical medications,chemical peels, and laser therapies."}
        header3={"Botox and Fillers"}
        paragraph3={"Non-surical cosmetic treatments to reduce wrinles, restore facial valume, and achieve a youthful appearance."}
        header4={"Laser Treatments"}
        paragraph4={"Advanced laser for skin rejuvenation, hair removal, scar reduction, and pigmentation correction."} 
        subtext={"Our service"} 
        >

  </OurService>

  
 
    </div>
  
  )
}

export default DetailHealthcareFacilities
