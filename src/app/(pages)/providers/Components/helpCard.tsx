import Image from "next/image";


interface HelpCardTemplateProps {
    icon: string;
    header: string;
    paragraph: string;
   
  }

  const HelpCard: React.FC<HelpCardTemplateProps> = ({
    icon,
    header,
    paragraph,
  
  }) => {
    return (
        <div className="relative h-[313px] w-[380px] group mt-7">
            <div className="absolute greenBackground inset-0 h-[313px] w-[380px] rounded-[25px] group-hover:blur opacity-50 transition duration-200"></div>
            <div className="relative bg-[#FFFFFF] group-hover:border-[1px] transition duration-200 border-[#45AC60] h-[313px] w-[380px] rounded-[25px] p-8 flex flex-col justify-center align-center ">
            <div>
            <Image
                  className="absolute top-[30px] h-[60px] w-[60px]"
                  layout="fixed"
                  width={36}
                  height={36}
                  src={icon}
                  alt="Help Card"
                />
            </div>
                <h1 className="text-[Poppins] text-[24px] leading-[29px] tracking-[0em] left-0 font-semibold mt-5"> {header}</h1>
                <p className="h-[22px] text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-[#9C9C9C] mt-2">{paragraph}</p>
            </div>
        </div>
    )
}
export default HelpCard