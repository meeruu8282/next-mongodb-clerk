import Image from 'next/legacy/image'

interface CheckTextboxTemplateProps {
  header: string
  paragraph: string
  // Additional props as needed
}

const CheckTextbox: React.FC<CheckTextboxTemplateProps> = ({
  header,
  paragraph,
  // Additional props as needed
}) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="rounded-[15px] p-3 bg-sage bg-opacity-10 flex items-center justify-center">
          <Image
            layout="intrinsic"
            width={21.67}
            height={21.67}
            src="/greenunioncheckmark.svg"
            alt="Unioncheckmark"
          />
        </div>

        <h1 className="text-[poppins] text-lg md:text-xl font-semibold leading-tight text-left">
          {header}
        </h1>
      </div>
      <p className="opacity-50 text-[poppins] text-sm md:text-lg font-normal leading-snug text-left mt-2">
        {paragraph}
      </p>
    </div>
  )
}
export default CheckTextbox
