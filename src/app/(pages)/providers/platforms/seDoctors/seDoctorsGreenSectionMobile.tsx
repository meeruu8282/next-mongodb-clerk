import Image from "next/image";
import SeDoctorsCheckbox from "./seDoctorsCheckbox";




interface seDoctorsGreenTemplateProps {

  header: string
  text: string


  checkmarkboxheader1: string
  checkmarkboxparagraph1: string
  checkmarkboxheader2: string
  checkmarkboxparagraph2: string
  checkmarkboxheader3: string
  checkmarkboxparagraph3: string
  checkmarkboxheader4: string
  checkmarkboxparagraph4: string

}




const seDoctorsGreenSectionMobile:  React.FC<seDoctorsGreenTemplateProps> = ({

  header,
  text,

  checkmarkboxheader1,
  checkmarkboxparagraph1,
  checkmarkboxheader2,
  checkmarkboxparagraph2,
  checkmarkboxheader3,
  checkmarkboxparagraph3,
  checkmarkboxheader4,
  checkmarkboxparagraph4,



}) => {
    return (
  
      <div className="flex justify-center items-center bg-green-500 w-screen h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/GreenbackgroundSeDoctorPage.svg")'}}>
      <div className="flex flex-col justify-center items-start w-[90%] h-[100%] text-white">
      <div className="flex flex-col justify-center items-center  gap-7 pb-7 pt-5">
            <h1 className="text-[Poppins] font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-white">{header}</h1>
            <p className="text-[Poppins] font-normal text-sm sm:text-base md:text-base lg:text-base xl:text-xl">{text}</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
          <SeDoctorsCheckbox   header={checkmarkboxheader1}
               paragraph={checkmarkboxparagraph1}/>    
         <SeDoctorsCheckbox header={checkmarkboxheader2}
               paragraph={checkmarkboxparagraph2}/> 
       <SeDoctorsCheckbox  header={checkmarkboxheader3}
               paragraph={checkmarkboxparagraph3}/> 
        <SeDoctorsCheckbox  header={checkmarkboxheader4}
               paragraph={checkmarkboxparagraph4}/> 
        </div>
        <div className="flex justify-center items-center w-[40%] pb-5 self-center">
        <Image
       layout="responsive"
          width={408}
          height={330}
          src="/doctor.png"
          alt="Doctor"
        />

        
        </div>
    
         
  
        </div>
  
      </div>
  
  
  
  
    );
  };
  export default seDoctorsGreenSectionMobile;
  