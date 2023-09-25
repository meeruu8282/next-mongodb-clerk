import Image from "next/image";
import Link from 'next/link';


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
    
    <div className="relative group  ">
        <div className="absolute group-hover:-inset-10 bg-[#45AC60]  rounded-[25px] blur opacity-5  ">
    
        </div>
        <div className=" relative  flex justify-center items-center bg-white w-[381px] h-[316px] rounded-[25px]  hover:shadow-2xl  hover:border-[1px] border-[#45AC60] transition duration-600 cursor-pointer">
          <div className=" w-[310px] h-[259px] top-[100px] left-[35px] gap-[24px]">
            <div className="w-[64px] h-[64px]">
              <div className="relative flex justify-center items-center">
                <div className=" absolute w-[64px] h-[64px] top-0 rounded-[100%]  bg-[#45AC60] opacity-10 "></div>

                <Image
                  className="absolute top-[14px]"
                  layout="fixed "
                  width={36}
                  height={36}
                  src={icon}
                  alt="Costo"
                />
              </div>
            </div>

            <div className="absolute flex flex-col w-[309.34px] h-[171px] mb-5 bottom-0 gap-[16px] ">
              <div className="w-[309.34px] h-[29px] ">
                <h1 className=" text-[Poppins] text-[24px] font-semibold leading-7 tracking-tight left-0">
                {header}

                </h1>
              </div>
              <div className=" w-[309.34px] h-[88px] opacity-50">
      

                <p className=" text-[Poppins] text-[16px] font-normal line-h-22.4">
                {paragraph}


                </p>
              </div>
              <div className=" w-[309.34px] h-[22px] ">
            

              <a href={linkto} className=" absolute bottom-0 text-[#000000] underline hover:text-blue-700 cursor-pointer">{linktext}</a>
              </div>

            </div>
          </div>
        </div>
        </div>
  );
};

export default Keypointsbox;
