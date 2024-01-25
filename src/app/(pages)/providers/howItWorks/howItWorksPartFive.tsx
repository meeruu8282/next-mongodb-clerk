import Image from "next/image";

interface HowItsWorkPartFiveTamplateProps {
  imageSrc1: string;
  imageSrc2: string;
  hashtagNumber: string;
  header: string;
  text1: string;
  text2: string;

}

const HowItWorksPartFive: React.FC<HowItsWorkPartFiveTamplateProps> = ({
  imageSrc1,
  imageSrc2,
  hashtagNumber,
  header,
  text1,
  text2

}) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center  mt-9 ">



       <div className="flex flex-row justify-center items-center w-full ">
       <div className="w-[90%] h-auto flex justify-center items-center font-semibold font-[Poppns] gap-3 " >
        <div className="flex justify-start items-center w-[100%] border gap-3">
           <h1 className="text-[40px] text-sage ">
            {hashtagNumber}
           </h1>
           <h1 className="text-[32px]  font-[Poppns] text-black">
             {header}
           </h1>
       </div>
       </div>
       </div>


       <div className="flex-row justify-center items-center hidden lg:flex w-full ">
       <div className="flex justify-center items-center w-[90%] gap-4 ">
         <div className="w-[100%] h-auto flex justify-center items-center gap-10 ">
           <div className="bild för 5 ipad border ">
             <Image
               layout="fixed"
               width={618}
               height={418}
               src={imageSrc1}
               alt="ipad girl"

             />
           </div>
           <div className="bild för 5 mobil ">
             <Image
               layout="fixed"
               width={210}
               height={424}
               src={imageSrc2}
               alt="mobilephone"
             />
           </div>
         </div>
         </div>
       </div>




       <div className=" flex justify-center items-center w-full">
           <div className="flex flex-col md:flex-row justify-center items-center w-[90%] h-[100%] gap-5 mt-3">
             <div className="flex justify-center items-center w-auto max-w-xl lg:justify-center lg:items-center border rounded-[35px] bg-gradient-to-br from-sage to-sageLight">
               <div className=" w-[100%] h-[100%]  flex justify-center items-center ">
                 <p className=" text-black font-[Poppns] px-6 py-4 text-xl" >
                   {text1}
                 </p>
               </div>
             </div>
             <div className="flex justify-center items-center w-auto h-auto max-w-xl lg:justify-center lg:items-center min-h-38 border rounded-[35px] bg-gradient-to-br from-sage to-sageLight ">
               <div className="w-[100%] h-[100%] flex justify-center items-center ">
                 <p className=" text-white font-[Poppns] px-6 py-4 text-xl">
                   {text2}
                 </p>
               </div>
             </div>
           </div>
          </div>

     </div>
  );
};
export default HowItWorksPartFive;
