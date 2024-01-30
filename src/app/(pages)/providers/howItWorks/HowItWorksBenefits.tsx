import Image from "next/legacy/image"
import CheckTextbox from "./checkTextBox"
import style from './howItWork.module.css'


interface BenefitsTemplateProps {
    image: string
    header: string


    checkmarkboxheader1: string
    checkmarkboxparagraph1: string
    checkmarkboxheader2: string
    checkmarkboxparagraph2: string
    checkmarkboxheader3: string
    checkmarkboxparagraph3: string

  }

  const HowItWorksBenefits: React.FC<BenefitsTemplateProps> = ({

      image,
      header,

      checkmarkboxheader1,
      checkmarkboxparagraph1,
      checkmarkboxheader2,
      checkmarkboxparagraph2,
      checkmarkboxheader3,
      checkmarkboxparagraph3,



  }) => {
    return (
      <div className="flex justify-center flex-row  items-center h-[100%] w-[90%] mt-8 ">
        <div className={`flex flex-col w-2/4 justify-center items-start ${style.center}`}>
          <div className=" w-[100%] h-auto text-[poppins]  font-semibold pb-7">
              <h1 className=" text-sage text-base font-semibold">{header}</h1>
          </div>
          <div className="flex flex-col justify-between items-center">
           <CheckTextbox
           header={checkmarkboxheader1}
           paragraph={checkmarkboxparagraph1}/>
            <CheckTextbox
           header={checkmarkboxheader2}
           paragraph={checkmarkboxparagraph2}/>
            <CheckTextbox
           header={checkmarkboxheader3}
           paragraph={checkmarkboxparagraph3}/>

          </div>
        </div>



      <div className={`flex justify-center items-center gap-5 w-2/4 ${style.hidingImageW1080}`}>
        <div className="h-[600px] w-full flex justify-center items-center">
          <div className="w-[509px] h-[600px] flex justify-center items-start ">
          <div className="flex justify-center items-center pr-2" >
            <Image
                 layout="fixed"
                 width={52}
                 height={52}
                src="/Vector673.svg"
                alt="Custom icon"
              />
            </div>
            <div className="w-[509px] h-[554px] rounded-[4rem] pt-4">
              <Image
                layout="fixed"
                width={509}
                height={554}
                src={image}
                alt="womenwithcomputer"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
    )
  }
  export default HowItWorksBenefits;
