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
    <div className="  flex flex-col  h-auto w-[100%] max-w-[592px] p-3   gap-[32px]  ">
            <div className=" flex flex-col items-center h-auto w-[100%] max-w-[592px]   ">
              <div className="  w-[100%] h-auto">
                <h1 className="text-[poppins] sm:text-[20px] md:text-[30px] lg:text-[40px] font-semibold leading-13 tracking-tight text-left text-white">
                  {header}
                </h1>
              </div>
              <div className=" w-[100%]  max-w-[592px] h-auto">
                <p className="text-[poppins]  md:text-[15px] lg:text-[20px] font-normal leading-8 tracking-tight text-left text-white opacity-75">
                  {paragraph}
                </p>
              </div>
            </div>

            <div className=" flex flex-col  w-[100%] h-auto max-w-[592px]  gap-[16px] ">
              <div className=" flex flex-row items-center w-[100%] h-auto  gap-[12px]">
                {/*in components folder */}
                <UnionCheckmark />  {/* mediaquerey is called by style from  carleyoProvides.module.css */}
                <div className={`  w-[100%] h-auto  ${style.textsize}  sm:text-[10px] md:text-[15px] lg:text-[20px]`}>
                  <p className="  text-[Poppins]   font-normal text-base leading-6 tracking-tight  text-white opacity-75 ">
                    {checktext1}
                  </p>
                </div>
              </div>
              <div className=" flex flex-row items-center w-[100%] h-auto max-w-[592px]  gap-[12px] ">
                <UnionCheckmark />
                <div className=" max-w-[380px] w-[100%] h-auto ">
                  <p className="  text-[Poppins]  text-[20px] font-normal text-base leading-6 tracking-tight  text-white opacity-75 ">
                    {checktext2}{" "}
                  </p>
                </div>
              </div>
              <div className=" flex flex-row items-center w-[100%] h-auto max-w-[592px]  gap-[12px]">
                <UnionCheckmark />
                <div className="max-w-[380px] w-[100%] h-auto  ">
                  <p className="  text-[Poppins]  text-[20px] font-normal text-base leading-6 tracking-tight  text-white opacity-75 ">
                    {checktext3}{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className={`w-[100%] flex ${style.centerbutton}   h-auto `} >
              <Link href="/providers/auth/signIn" passHref>
                <div className=" rounded-[25px] max-w-[301px] w-full mr-[5px] h-[72px] bottom-0  bg-gradient-to-br from-[rgba(255, 255, 255)] via-[rgba(255, 255, 255)] to-[rgba(255, 255, 255)]  ">
                  <CarelyoButton
                    className="  w-full h-[72px]  rounded-[25px]  border bg-opacity-25 bg-white gap-[12px] font-semibold "
                    buttonText={`${addtext}`}
                  />
                </div>
              </Link>
            </div>
          </div>

  );
};

export default CarleyoProvides;
