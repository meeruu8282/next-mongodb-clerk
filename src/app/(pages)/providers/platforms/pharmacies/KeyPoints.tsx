import Keypointsbox from "../../Components/keypointsbox";
import style from './pharmacies.module.css'
       
   





  interface KeyPointsTemplateProps {

    header: string
    text: string

    checkmarkboxheader1: string
    checkmarkboxparagraph1: string
    checkmarkboxheader2: string
    checkmarkboxparagraph2: string
    checkmarkboxheader3: string
    checkmarkboxparagraph3: string
    linkto1: string;
    linktext1: string;
    linkto2: string;
    linktext2: string;
    linkto3: string;
    linktext3: string;
    icon1: string;
    icon2: string;
    icon3: string;

  
  }
  
  
  const KeyPoints:  React.FC<KeyPointsTemplateProps> = ({
  
    header,
    text,
    checkmarkboxheader1,
    checkmarkboxparagraph1,
    checkmarkboxheader2,
    checkmarkboxparagraph2,
    checkmarkboxheader3,
    checkmarkboxparagraph3,
    linktext1,
    linktext2,
    linktext3,
    linkto1,
    linkto2,
    linkto3,
    icon1,
    icon2,
    icon3
  })=> {
    return (
  <>
      <div className="flex justify-center items-center w-screen h-full mt-10 mb-4">
        <div className="flex flex-col justify-center items-center  w-[90%] h-auto">
          <div className={`flex w-full md:flex-row flex-col justify-between items-start font-normal gap-5 pb-5 ${style.width90} ${style.widthFull}`}>
                    <div className="flex md:justify-start justify-center items-center ">
                        <h1 className="font-bold text-[Poppins] text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">{header}</h1>
                    </div>
                    <div className="flex md:justify-end justify-center items-center ">
                        <h2 className="font-normal text-[Poppins] opacity-50 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl md:w-[80%] w-full"> {text} </h2>
                    </div>
            </div>
  
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className={`${style.centerAnd70w} ${style.widthFull}`}><Keypointsbox header={checkmarkboxheader1} paragraph={checkmarkboxparagraph1} icon={icon1} linkto={linkto1} linktext={linktext1}/></div>
              <div className={`${style.centerAnd70w} ${style.widthFull}`}><Keypointsbox header={checkmarkboxheader2} paragraph={checkmarkboxparagraph2} icon={icon2} linkto={linkto2} linktext={linktext2}/></div>
              <div className={`${style.centerAnd70w} ${style.widthFull}`}><Keypointsbox header={checkmarkboxheader3} paragraph={checkmarkboxparagraph3} icon={icon3} linkto={linkto3} linktext={linktext3}/></div>
            </div>
         
        </div>
      </div>
      </>
  

    );
  };
  export default KeyPoints;
  


       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
      