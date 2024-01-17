import Image from "next/image";
import Hovertextbox from "./hovertextbox";



interface JoiningCarelyoEnablesYoutoTamplateProps {

    // values that is used in this tamplate/file. 
    header: string;
    paragraph: string;
    image: string;

    // Values used in the hovertextbox template/file.
    header01: string;
    paragraph01: string;
    header02: string;
    paragraph02: string;
    header03: string;
    paragraph03: string;
    header04: string;
    paragraph04: string;
    
    
   
   
  
    // ... andra props för varje sektion av din mall
  }

  const JoiningCarelyoEnablesYouto: React.FC<JoiningCarelyoEnablesYoutoTamplateProps> = ({
    header,
    paragraph,
    image,


    header01,
    paragraph01,
    header02,
    paragraph02,
    header03,
    paragraph03,
    header04,
    paragraph04,
 
  
   
    
  
    // ... andra props för varje sektion av din mall
  }) => {
  return (

    <div className=" w-screen flex justify-center mt-20 ">
    <div className="flex flex-col justify-between w-[1191px] h-[886px] ">
      <div className=" flex justify-between flex-col w-[946px] h-[140px] mx-auto ">
        <h1 className=" w-[946px] h-[52px] text-[poppins] mx-auto  text-4xl font-normal leading-13 tracking-wide text-center">
          {header}
        </h1>
        <p className=" w-[946px] h-[64px] opacity-50 text-[poppins]  text-[20px]  leading-8  text-center">
         {paragraph}
        </p>
      </div>
      <div className=" flex justify-between w-[1191px] h-[689px] rounded-md">
        <div className="w-[530px] h-[682px] rounded-[25px] ">
        <Image
            className=""
            width={530}
            height={682}
            src={image}
            alt="chemistdoctor"
          />

        </div>
        <div className=" h-[689px] w-[600px] flex flex-col justify-between">
         <Hovertextbox header01={header01} paragraph01={paragraph01}/>
         <Hovertextbox header01={header02} paragraph01={paragraph02}/>
         <Hovertextbox header01={header03} paragraph01={paragraph03}/>
         <Hovertextbox header01={header04} paragraph01={paragraph04}/>
       

         
      
         

         
          

        </div>
      </div>
    </div>
  </div>
   
  
  );
};
export default JoiningCarelyoEnablesYouto;