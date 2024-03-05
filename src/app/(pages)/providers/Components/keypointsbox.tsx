import Image from "next/image";
import Link from 'next/link';
import style from '../platforms/pharmacies/pharmacies.module.css'


interface KeyPointsBoxTamplateProps {

  icon: string;
  header: string;
  paragraph: string;
  linkto: string;
  linktext: string;



}

const Keypointsbox: React.FC<KeyPointsBoxTamplateProps> = ({

  icon,
  header,
  paragraph,
  linkto,
  linktext,


}) => {
  return (

    <>
       
    
<div className="flex justify-center items-center bg-white  md:h-[17.7rem] lg:h-[19.7rem] h-[15.7rem] rounded-3xl hover:shadow-2xl hover:border-[1px] border-sage transition duration-600 cursor-pointer my-auto">
  <div className={`flex flex-col justify-center items-start gap-4 px-3 py-3 ${style.testa}`}>
    <div className="flex justify-center items-center bg-[#45AC601A] rounded-full sm:w-[4rem] sm:h-[4rem] w-[2.5rem] h-[2.5rem] p-2">
      <Image
        className="justify-center items-center"
        layout="fixed"
        width={36}
        height={36}
        src={icon}
        alt="Costo"
      />
    </div>
    <div className="flex flex-col justify-start items-center gap-4">
      <div className="w-full">
        <h1 className="text-[Poppins] text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold">
          {header}
        </h1>
      </div>
      <div className="w-full opacity-50">
        <div className="text-[Poppins] text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-normal">
          {paragraph}
        </div>
      </div>
      <div className="w-full">
        <a href={linkto} className="text-[Poppins] text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-normal text-black underline hover:text-blue-700 cursor-pointer">{linktext}</a>
      </div>
    </div>
  </div>
</div>
       

        </>







  );
};

export default Keypointsbox;
