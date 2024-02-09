import Image from "next/image";
import style from './howItWork.module.css'

interface HowItsWorkPartFiveTamplateProps {
  imageSrc1: string;
  imageSrc2: string;
  hashtagNumber: string;
  header: string;
  text1: string;
  listText1: string;
  listText2: string;

}

const HowItWorksPartFive: React.FC<HowItsWorkPartFiveTamplateProps> = ({
  imageSrc1,
  imageSrc2,
  hashtagNumber,
  header,
  text1,
  listText1,
  listText2

}) => {
  return (
    <div className="w-[90%] flex flex-col justify-center items-center gap-4">
     



       <div className="flex flex-row justify-center items-center w-full ">
       <div className="w-[100%] h-auto flex justify-center items-center font-semibold text-[Poppins] gap-3 " >
        <div className="flex justify-start items-center w-[100%] gap-3">
           <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-sage ">
            {hashtagNumber}
           </h1>
           <h1 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-[Poppins] font-normal text-black">
             {header}
           </h1>
       </div>
       </div>
       </div>


       <div className={` block flex-row justify-start items-center w-full h-full ${style.hidingImageW1080}`}>
       <div className="flex justify-center items-center w-[90%] gap-4 ">
         <div className="w-[100%] h-auto flex justify-start items-center">
           <div className="bild för 5 ipad pr-9">
             <Image
             layout="responsive"
               width={598}
               height={395}
               src={imageSrc1}
               alt="ipad girl"

             />
           </div>
           <div className="bild för 5 mobil ">
             <Image
           layout="responsive"
               width={210}
               height={424}
               src={imageSrc2}
               alt="mobilephone"
             />
           </div>
         </div>
         </div>
       </div>




        <div className={`flex flex-row justify-start items-center w-full h-full text-white text-[Poppins]`}>
           <div className={`flex flex-row justify-start items-center w-[100%] gap-4 ${style.flexboxColumn}`}>
             <div className="flex justify-center items-center w-[100%]  rounded-3xl bg-gradient-to-br from-sage to-sageLight p-5 h-[9.5rem]">
               <div className={`w-[100%] h-[100%] flex flex-col justify-center items-start `}>
                 <p className={`text-black text-[Poppins] font-normal text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl`} >
                   {text1}
                 </p>
               </div>
             </div>
             <div className="flex flex-col justify-center items-center w-[100%] rounded-3xl bg-gradient-to-br from-sage to-sageLight p-5 h-[9.5rem]">
               <div className={`w-[100%] h-[100%] flex flex-col justify-center items-start`}>
                <li className={`text-white text-[Poppins] text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl font-normal`}> {listText1}</li>
                <li className={`text-white text-[Poppins] text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl font-normal`}> {listText2} </li>
               </div>
             </div>
           </div>
        </div>

     </div>
  );
};
export default HowItWorksPartFive;
