import Image from "next/image";
import SeDoctorsImage from "./seDoctorImage";
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


const SeDoctorsGreenSection:  React.FC<seDoctorsGreenTemplateProps> = ({

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



})=> {
  return (
<>
    <div className="flex justify-center items-center bg-green-500 w-screen h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/GreenbackgroundSeDoctorPage.svg")' }}>
      <div className="flex flex-row justify-center items-center border border-black w-[90%] h-[80%] text-white ">
        <div className="leftside flex justify-start items-center flex-col w-100% lg:w-1/2">
          <div className="flex flex-col gap-6 pb-7">
            <h1 className="text-[Poppins] font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-white"> {header}</h1>
            <p className="text-[Poppins] font-normal text-sm sm:text-base md:text-base lg:text-base xl:text-xl">{text}</p>
          </div>

         

          <div className="checkbox grid grid-cols-2 gap-4 justify-center items-start">
            <div className="justify-self-start"> 
               <SeDoctorsCheckbox header={checkmarkboxheader1} paragraph={checkmarkboxparagraph1}/>   
            </div>
            <div className="justify-self-start ">  <SeDoctorsCheckbox header={checkmarkboxheader2} paragraph={checkmarkboxparagraph2}/> </div>
            <div className="justify-self-start"> <SeDoctorsCheckbox header={checkmarkboxheader3} paragraph={checkmarkboxparagraph3}/> </div>
            <div className="justify-self-start">  <SeDoctorsCheckbox header={checkmarkboxheader4} paragraph={checkmarkboxparagraph4}/> </div>
            
            </div>



        </div>

        <div className="rightside  justify-end items-center w-1/2 lg:block hidden">
          <div className="flex justify-end items-center">
            <SeDoctorsImage />
          </div>
        </div>
      </div>
    </div>
    </>



  );
};
export default SeDoctorsGreenSection;














