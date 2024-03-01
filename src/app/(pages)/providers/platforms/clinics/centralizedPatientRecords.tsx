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
    <div className={` h-auto w-screen mt-5 flex items-center justify-center `}>
      {/* Green background container, some of the css in background is in global */}
      <div className="greenBackground relative flex justify-center   items-center w-screen  h-auto   ">

        {/* Corner triangle */}
        <div className="absolute right-0 top-0 z-[-1]">
          <div
            className="greenBackgroundTriangle "
            style={{ clipPath: 'polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)' }} //Style change how much of a square has to be cut out to create a triangle
          ></div>
        </div>
        {/* Circle div overlapping the container */}
        <div className={` ${style.hidecircle}  greenCircleContainer bottom-0 z-[-1] `}>
          <div
            className="  bottom-0 greenCircle "
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 24%, 0% 24%)' }}
          ></div>
        </div>

        {/* Centralized Patient Records*/}
        <div
          className={`  flex flex-row ${style.changeflex} justify-between items-center my-20  max-w-[1192px] w-screen  h-auto  `}
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
            className={`  flex relative ${style.imagemargin} max-h-[490px] max-w-[521px] w-full h-full `}
          >
            <div className=" absolute greenCircleContainer opacity-[25%] left-10 w-[52px] h-[52px] top-0 z-[-1]">
              <div
                className="greenCircle   bg-sage  w-[100px]  h-auto "
                style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)' }}
              ></div>
            </div>

            <div className={` relative flex justify-end items-center w-[521px] h-auto ${style.fixhight}`}>
             
              <div className="  right-0 max-w-[460px] max-h-[472px] w-[100%] h-auto rounded-[85px]">
                <Image

                  className=" px-4 right-0 "
                  layout="responsive"
                  src={image}
                  width={460}
                  height={472}
                  alt="Cecktable"
                />
              </div>
                 <div className={`absolute ${style.hideconvinient} top-2/3 left-0 w-auto z-10`}>
                {/* in components folder */}
                <ConvinientManagement text={imagebubbletext} />
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
