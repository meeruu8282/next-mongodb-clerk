import Image from 'next/image'
import Hoverfeaturesbox from './hoverfeaturesbox'

interface RobustFeaturesforDiagnosticTamplateProps {
  //props to fill this tamplate
  header: string
  paragraph: string

  //props to fill hoverfeaturesbox tamplate
  icon1: string
  header1: string
  paragraph1: string

  icon2: string
  header2: string
  paragraph2: string

  icon3: string
  header3: string
  paragraph3: string

  icon4: string
  header4: string
  paragraph4: string

  // ... andra props för varje sektion av din mall
}

const RobustFeaturesforDiagnostic: React.FC<RobustFeaturesforDiagnosticTamplateProps> = ({
  header,
  paragraph,

  icon1,
  header1,
  paragraph1,

  icon2,
  header2,
  paragraph2,

  icon3,
  header3,
  paragraph3,

  icon4,
  header4,
  paragraph4,

  // ... andra props för varje sektion av din mall
}) => {
  return (
    <div className="">
      <div className=" flex justify-center w-screen">
        <div className="relative flex flex-col items-center justify-between w-[1190px] h-[499px] rounded-[25px] mt-[150px] ">
          <div className=" w-[1190px] h-[309px] flex justify-center rounded-[25px] bg-[#FAFAFA]">
            <div className=" flex justify-between items-center h-[84px] w-[1090px] mt-12">
              <h1 className="w-[529px] h-[84px] text-[poppins] text-2xl font-semibold leading-10 tracking-normal text-left ">
                {header}
              </h1>
              <p className=" w-[389.64px] h-[42px] text-[poppins] text-[16px] text-right font-normal text-base leading-[20.8px]  text-[#A6A6A6]">
                {paragraph}
              </p>
            </div>
          </div>
          <div className=" absolute flex justify-between w-[1116px] h-[306px] gap-[16px] bottom-0 ">
            <Hoverfeaturesbox 
            icon={icon1} 
            header={header1} 
            paragraph={paragraph1} />

            <Hoverfeaturesbox 
            icon={icon2} 
            header={header2} 
            paragraph={paragraph2} />

            <Hoverfeaturesbox 
            icon={icon3} 
            header={header3} 
            paragraph={paragraph3} />

            <Hoverfeaturesbox 
            icon={icon4} 
            header={header4} 
            paragraph={paragraph4} />

    
          </div>
        </div>
      </div>
    </div>
  )
}
export default RobustFeaturesforDiagnostic
