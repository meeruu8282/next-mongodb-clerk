import Image from "next/image";
import style from './clinics.module.css'
import CarelyoButton from "../../Components/getStartedButton";
import Link from "next/link";




interface seamlessAppointmentManagementTamplateProps {

    image1: string;
    image2: string;
    image3: string;
    header: string;
    paragraph: string;
    textbutton: string;


  }

  const SeamlessAppointmentManagement: React.FC<seamlessAppointmentManagementTamplateProps> = ({
    image1,
    image2,
    image3,
    header,
    paragraph,
    textbutton,


  }) => {
  return (
       // All media queries are imported from clinic.module.css by using style.nameofmediaquery
       // Seamless Appointment Management component
       <div className={` relative  flex flex-row w-screen justify-between ${style.centertext}  items-center  h-[680px] mt-40  `}>
       <div className={` absolute  h-[100%] w-[100%] ${style.changeabsolute} ${style.hidingimages} left-[125px] max-w-[501px] max-h-[556.79px]  `}>
         <div className=" absolute bottom-0 w-[100%] h-[100%] max-h-[481px] max-w-[501px] rounded-[25px] bg-neutral-50"></div>

         <div className="  max-w-[501px] max-h-[556.79px] w-[100%] h-auto bottom-0  ">
           <Image
             className=" absolute "
             layout="fixed "
             width={501}
             height={501}
             src={image1}
             alt="Superchargehead"
           />
           <Image
             className="absolute  bottom-0"
             layout="fixed "
             width={501}
             height={501}
             src={image2}
             alt="Superchargebody"
           />
         </div>
       </div>
       <div className={` absolute flex  flex-col h-auto   max-w-[514px] ${style.changeabsolute} ${style.textboxdesign} right-[40px] gap-[32px] `}>
         <div className="    h-auto  w-full gap-[24px] ">
           <div className="  top-0 w-full h-full">
             <h1 className=" text-[Poppins] text-[40px] font-normal leading-60 tracking-tighter text-left">
               {header}
             </h1>
           </div>
           <div className="  bottom-0 w-full h-full opacity-[50%]">
             <p className="text-[poppins] text-[20px] font-normal leading-32 tracking-tighter text-left text-black">
             {paragraph}
             </p>
           </div>
            <div className={` mt-[30px] h-[72px]  ${style.buttonsize}`}>
            <Link href="/providers/pricing" passHref>
           <CarelyoButton
             buttonText={textbutton}
             className={` absolute bottom-0 w-[308px] ${style.buttonsize} mb-1  h-[72px]  gap-[12px] text-[16px] font-semibold line-h-22.4`}
           />
         </Link>
         </div>
         </div>


       </div>

       {/* Practice Schedule img */}
       <div className={` ${style.hidingimage} absolute w-[382px] h-[264px] left-[339px]  top-[400px] `}>
         <div className=" absolute flex justify-center items-center w-[382px] h-[264px] rounded-[25px] bg-white shadow-2xl ">
           <Image
             className=""
             layout="fixed "
             width={300}
             height={234}
             src={image3}
             alt="Cecktable"
           />
         </div>
       </div>
     </div>


  );
};
export default SeamlessAppointmentManagement;
