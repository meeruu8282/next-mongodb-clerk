import Image from "next/image";
import Link from 'next/link';
import CarelyoButton from "./getStartedButton";


// Define an interface
interface WhychooseCarelyoTamplateProps {
 
  image: string;
  header: string;
  paragraph: string;
  buttonsText: string;
 
    // Optional property: reverseDirection, which is a boolean, used to make the tamplate mirror reversed (used in )
  reverseDirection?: boolean;


 
}

const WhychooseCarelyo: React.FC<WhychooseCarelyoTamplateProps> = ({
 
  image,
  header,
  paragraph,
  buttonsText,
  reverseDirection,
 

}) => {
    const flexDirection = reverseDirection ? "row-reverse" : "row";
  return (
    <div className= "flex justify-center items-center h-[full] top-[1870px] pb-[60px] pt-[40px] mt-20">
    <div className={`flex flex-col md:flex-row flex-${flexDirection} justify-center w-[90%] items-center md:w-[1192px] h-[full] gap-[114px] `}>
      <div className="w-[449px] h-[449px] hidden md:block">
        <Image
          className="rounded-[25px]"
          layout="fixed "
          width={449}
          height={449}
          src={image}
          alt="costomimage"
        />
      </div>
      <div className="w-[full] h-[full] gap-[32px] flex flex-col">
        <div className=" relative h-[304px] w-[629px] gap-[24px] ">
          <div className=" w-[514px] h-[120px]">
            <h1 className="text-[poppins] text-[40px] font-normal leading-60 tracking-tighter text-left">
              {header}
            </h1>
          </div>
          <div className="w-[4/6] md:w-[629px] h-[190px] opacity-[50%] bottom-0  ">
            <p className="text-[Poppins] text-[20px] font-normal leading-8 tracking-tighter text-left">
              {paragraph}
            </p>
          </div>
        </div>
        <div className="w-[full] h-[full] md:hidden">
        <Image
          className="rounded-[25px]"
          layout="fixed "
          width={449}
          height={449}
          src={image}
          alt="customimage"
        />
      </div>
        <div className="flex flex-col h-[72px]" >
        <Link href="/providers/pricing" passHref>
           <CarelyoButton
          buttonText={buttonsText}
          className="flex flex-col justify-center items-center w-[184px]  text-[16px] font-semibold line-h-22.4 h-[72px] "
        />  
        </Link>
        </div>


       
      </div>
    </div>
  </div>
   
  );
};

export default WhychooseCarelyo;
