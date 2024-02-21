import Image from 'next/legacy/image'
import CheckTextbox from './checktextbox'

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
    <div className="flex justify-center items-center h-[669px] w-screen mt-8 bg-neutral-50">
      <div className="flex justify-between items-center gap-[20px]">
        <div className=" relative h-[600px] w-[570px] flex justify-between ">
          <div className="w-[509px] h-[600px] flex items-center ">
            <div className="w-[509px] h-[554px] rounded-[20px] ">
              <Image
                className=" absolute top-0 right-0 rounded-[20px]"
                layout="fixed"
                width={509}
                height={554}
                src={image}
                alt="happy doctor"
              />
            </div>
          </div>
          <Image
            className=" absolute top-0 right-0"
            layout="fixed"
            width={52}
            height={52}
            src="/onefourthcirkle.svg"
            alt="Custom icon"
          />
        </div>

        <div className=" flex flex-col justify-between w-[591px] h-[569px] ">
          <div className="w-[216px] h-[26px] text-[poppins] text-[16px] font-semibold leading-6 tracking-tighter text-left ">
            {header}
          </div>
          <div className="w-[591px] h-[527px]  flex flex-col justify-between ">
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
