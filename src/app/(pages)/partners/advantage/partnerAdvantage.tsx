import Image from 'next/image'
import Link from 'next/link'
import CarelyoButton from '../../providers/Components/getStartedButton'
import styles from './partnerAdvantage.module.css';

interface PartnerAdvantageProps {
  image: string
  header: string
  paragraph: string
  subText: string
  buttonText: string
  reverseDirection?: boolean
  children?: React.ReactNode
}

const PartnerAdvantage: React.FC<PartnerAdvantageProps> = ({
  image,
  header,
  paragraph,
  subText,
  buttonText,
  reverseDirection,
}) => {
  const flexDirection = reverseDirection ? 'row-reverse' : 'row'
  return (
    <div className={`${styles.myClass} flex justify-center items-center my-[50px] py-[100px] max-w-[1400px] w-full h-auto`}>

      <div
        className={`flex flex-${flexDirection} justify-center items-center max-w-[1190px]h-auto w-full gap-[100px]`}
      >
        <div className="h-auto">
          <Image
            className={`rounded-25 h-auto ${styles.hidingImage}`}
            layout="fixed"
            width={1190}
            height={388}
            src={image}
            alt="partnerAdvantage"
          />
        </div>

        <div className="flex w-full h-auto max-w-[558px] flex-col">
          {/* Text content */}
          <div className="w-full gap-[19px] h-auto  max-w-[558px] flex flex-col items-start">
          <h1 className={`${styles.headerText} text-[32px] font-semibold tracking-tight text-left`}>
              {header}
            </h1>
            <p className="opacity-50 font-normal leading-8 text-left text-[16px]">{paragraph}</p>
            <h5 className="text-xl font-semibold text-[16px] opacity-50 ">{subText}</h5>
            {/* Button */}
            <div className="max-h-[72px] h-auto max-w-[194px] w-full">
              <Link href="/contact" passHref>
              <div className={`${styles.centerButton}`}> 
                <CarelyoButton
                  buttonText={buttonText}
                  className="flex justify-center items-center font-semibold "
                />
                 </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerAdvantage
