import Image from 'next/image'
import style from './clinics.module.css'
import ConvinientManagement from '../../Components/convinientManagement'
import CarleyoProvides from '../../Components/carleyoProvides/carleyoProvides'

interface CentralizedPatientRecordsTamplateProps {
  header: string
  paragraph: string
  checkmarktext1: string
  checkmarktext2: string
  checkmarktext3: string
  buttontext: string
  imagebubbletext: string
  image: string
}

const CentralizedPatientRecords: React.FC<CentralizedPatientRecordsTamplateProps> = ({
  header,
  paragraph,
  checkmarktext1,
  checkmarktext2,
  checkmarktext3,
  buttontext,
  imagebubbletext,
  image,
}) => {
  return (
    <div className={`relative  ${style.greenDiv}  `}>
      
      <div className="greenBackground  flex justify-center items-center  w-screen max-h-[647px] mt-20 ">
        {/* Corner triangle */}
        <div className="absolute right-0 top-0 z-[-1]">
          <div
            className="greenBackgroundTriangle "
            style={{ clipPath: 'polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)' }} //Style change how much of a square has to be cut out to create a triangle
          ></div>
        </div>
        {/* Circle div overlapping the container */}
        <div className="greenCircleContainer z-[-1]">
          <div
            className="greenCircle "
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 24%, 0% 24%)' }}
          ></div>
        </div>

        {/* Centralized Patient Records*/}
        <div
          className={` absolute flex  ${style.changetextcenter} flex-row  max-w-[1192px] w-screen max-h-[484px]  h-auto gap-[80px] `}
        >
          <CarleyoProvides
            header={header}
            paragraph={paragraph}
            checktext1={checkmarktext1}
            checktext2={checkmarktext2}
            checktext3={checkmarktext3}
            buttontext={buttontext}
          />

          <div
            className={`absolute ${style.hidegreenbackgroundimg} h-auto right-0 w-[521px] max-h-[484px]`}
          >
            <div className="greenCircleContainer opacity-[25%] left-10 w-[52px] h-[52px] top-0 z-[-1]">
              <div
                className="greenCircle  bg-sage  w-[100px]  h-[100px] "
                style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)' }}
              ></div>
            </div>

            <div className="  bottom-0 w-[521px] h-[472px] top-[12px]  ">
              <div className=" absolute w-[460px] h-[472px]  right-0  rounded-[85px] ">
                <Image
                  className="mobileImageClass"
                  layout="fixed "
                  fill
                  src={image}
                  alt="Cecktable"
                />
              </div>
            </div>
            {/* in componens folder*/}
            <ConvinientManagement text={imagebubbletext}  />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CentralizedPatientRecords
