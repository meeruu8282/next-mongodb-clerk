import Image from "next/image";


interface HovertextboxTamplateProps {
    header01: string;
    paragraph01: string;
    
   
   
  
    // ... andra props för varje sektion av din mall
  }



 const Hovertextbox: React.FC<HovertextboxTamplateProps> = ({
    header01,
    paragraph01,
 
  
   
    
  
    // ... andra props för varje sektion av din mall
  }) => {
  return (
    <div className=' w-[594.24px] h-[142px] gap-[16px] bg-blue-600'>
        <div className=" w-[594.24px] h-[126px] gap-[16px] bg-yellow-400">
            <h1 className="w-[442px] h-[32px] text-[poppins] text-[24px] bg-red-600">
            {header01}
            
            
      
            </h1>

            <p className="">
            {paragraph01}

            </p>
          

        </div>
           

    </div>
  
  );
};
export default Hovertextbox;
