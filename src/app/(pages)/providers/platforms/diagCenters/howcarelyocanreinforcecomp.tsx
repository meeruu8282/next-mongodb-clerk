import Image from 'next/legacy/image'
import CheckTextbox from './checktextbox'
import style from './diagCenters.module.css'
interface HowcarelyocanreinforcecompTamplateProps {
  image: string
  header: string

  checkmarkboxheader1: string
  checkmarkboxparagraph1: string
  checkmarkboxheader2: string
  checkmarkboxparagraph2: string
  checkmarkboxheader3: string
  checkmarkboxparagraph3: string

  // ... andra props för varje sektion av din mall
}

const Howcarelyocanreinforcecomp: React.FC<HowcarelyocanreinforcecompTamplateProps> = ({
  image,
  header,

  checkmarkboxheader1,
  checkmarkboxparagraph1,
  checkmarkboxheader2,
  checkmarkboxparagraph2,
  checkmarkboxheader3,
  checkmarkboxparagraph3,

  // ... andra props för varje sektion av din mall
}) => {
  return (
    <div className="  flex justify-center items-center  p-10 h-auto w-screen mt-8 bg-neutral-50">
      <div className={`  flex ${style.changeflex}  justify-between items-center gap-[20px]`}>
        <div className=" relative max-h-[600px] h-auto max-w-[570px] w-screen flex justify-between ">
          <div className="  max-w-[509px] w-[100%] max-h-[600px] h-auto flex items-center ">
          <div className=" max-w-[509px] w-[100%] max-h-[554px] h-auto rounded-[20px]">
              {/* Här ersätter vi den absoluta bredden med en relativ storlek */}
              <div className="relative p-4 w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  className="absolute top-0 left-0 w-full h-auto"
                  layout="responsive" // Vi använder layout="responsive" för att göra bilden responsiv
                  width={509}
                  height={554}
                  src={image}
                  alt="happy doctor"
                />
              </div>
            </div>
          </div>
          <Image
            className=" w-screen  absolute p-2 top-0 right-0"
            layout="fixed"
            width={52}
            height={52}
            src="/onefourthcirkle.svg"
            alt="Custom icon"
          />
        </div>

        <div className="  flex p-3 flex-col justify-between w-auto h-auto ">
          <div className="  w-[216px] h-[26px] text-[poppins] text-[16px] font-semibold leading-6 tracking-tighter text-left ">
            {header}
          </div>
          <div className="max-w-[591px] w-fill h-auto gap-4   flex flex-col justify-between ">
            <CheckTextbox header={checkmarkboxheader1} paragraph={checkmarkboxparagraph1} />
            <CheckTextbox header={checkmarkboxheader2} paragraph={checkmarkboxparagraph2} />
            <CheckTextbox header={checkmarkboxheader3} paragraph={checkmarkboxparagraph3} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Howcarelyocanreinforcecomp
