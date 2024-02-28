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
}) => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative flex flex-col items-center justify-between max-w-[80vw] w-full rounded-[25px] mt-28 px-4 py-12">
        <div className="flex justify-center rounded-[25px] bg-neutral-50 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-12">
            <h1 className="text-[poppins] text-2xl font-semibold leading-10 tracking-normal text-center lg:text-left">
              {header}
            </h1>
            <p className="text-[poppins]  text-[16px] text-center md:text-right font-normal text-base leading-[20.8px] text-grayLighter mt-4 md:mt-0">
              {paragraph}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-16 w-full mt-12">
          <div className="flex flex-col lg:flex-row gap-5 ">
            <Hoverfeaturesbox icon={icon1} header={header1} paragraph={paragraph1} />
            <Hoverfeaturesbox icon={icon2} header={header2} paragraph={paragraph2} />
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <Hoverfeaturesbox icon={icon3} header={header3} paragraph={paragraph3} />
            <Hoverfeaturesbox icon={icon4} header={header4} paragraph={paragraph4} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default RobustFeaturesforDiagnostic
