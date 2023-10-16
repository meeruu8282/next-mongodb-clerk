import Image from "next/image";
import Link from 'next/link';
import UnionCheckmark from "../unionCheckmark";
import CarelyoButton from "../getStartedButton";
import style from './carleyoProvides.module.css'


interface CarleyoProvidesTemplateProps {
  header: string;   // A string for the header of the component.
  paragraph: string;   // A string for the main paragraph content.
  checktext1: string;  // A string for the first checkbox label.
  checktext2: string;
  checktext3: string;
  buttontext: string;
 
 
}

const CarleyoProvides: React.FC<CarleyoProvidesTemplateProps> = ({
  header,
  paragraph,
  checktext1,
  checktext2,
  checktext3,
  buttontext,


}) => {
  const addtext= buttontext
  return (
    <div className=" flex flex-col h-screen w-auto max-w-[592px] max-h-[481px] ml-5 gap-[32px]  ">
            <div className=" flex flex-col h-auto w-screen max-w-[592px] max-h-[172px] gap-[16px] ">
              <div className=" w-screen h-auto max-w-[592px] max-h-[104px]">
                <h1 className="text-[poppins] sm:text-[20px] md:text-[30px] lg:text-[40px] font-semibold leading-13 tracking-tight text-left text-[#FFFFFF]">
                  {header}
                </h1>
              </div>
              <div className=" w-screen h-auto max-w-[592px] max-h-[96px]">
                <p className="text-[poppins]  md:text-[15px] lg:text-[20px] font-normal leading-8 tracking-tight text-left text-[#FFFFFF] opacity-75">
                  {paragraph}
                </p>
              </div>
            </div>

            <div className=" flex flex-col w-screen h-auto max-w-[592px] max-h-[181px] gap-[16px] ">
              <div className=" flex flex-row items-center w-screen h-auto max-w-[592px] max-h-[45px] mt-5 gap-[12px]">
                {/*in components folder */}
                <UnionCheckmark />  {/* mediaquerey is called by style from  carleyoProvides.module.css */}
                <div className={` w-screen h-auto max-w-[380px] ${style.textsize}  sm:text-[10px] md:text-[15px] lg:text-[20px]`}>
                  <p className="  text-[Poppins]   font-normal text-base leading-6 tracking-tight  text-[#FFFFFF] opacity-75 ">
                    {checktext1}
                  </p>
                </div>
              </div>
              <div className=" flex flex-row items-center w-screen h-auto max-w-[592px] max-h-[45px] gap-[12px] ">
                <UnionCheckmark />
                <div className=" max-w-[380px] w-screen h-auto ">
                  <p className="  text-[Poppins]  text-[20px] font-normal text-base leading-6 tracking-tight  text-[#FFFFFF] opacity-75 ">
                    {checktext2}{" "}
                  </p>
                </div>
              </div>
              <div className=" flex flex-row items-center w-screen h-auto max-w-[592px] max-h-[45px] gap-[12px]">
                <UnionCheckmark />
                <div className="max-w-[380px] w-screen h-auto  ">
                  <p className="  text-[Poppins]  text-[20px] font-normal text-base leading-6 tracking-tight  text-[#FFFFFF] opacity-75 ">
                    {checktext3}{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className=" w-[301px] h-[72px] gap-[24px] ">
              <Link href="/providers/auth/signIn" passHref>
                <div className=" rounded-[25px] w-[301px] h-[72px] bottom-0  bg-gradient-to-br from-[rgba(255, 255, 255)] via-[rgba(255, 255, 255)] to-[rgba(255, 255, 255)]  ">
                  <CarelyoButton
                    className="  w-[301px] h-[72px] p-[22px 32px] rounded-[25px]  border bg-opacity-25 bg-[#FFFFFF] gap-[12px] font-semibold "
                    buttonText={`${addtext}`}
                  />
                </div>
              </Link>
            </div>
          </div>

  );
};

export default CarleyoProvides;
