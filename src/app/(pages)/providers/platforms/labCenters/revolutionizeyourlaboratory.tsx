import Image from "next/image";
import Hovertextbox from "./hovertextbox";
import style from "../../platforms/labCenters/labCenter.module.css"
import ConvinientManagement from "../../Components/convinientManagement";
import CarleyoProvides from "../../Components/carleyoProvides/carleyoProvides";

interface RevolutionizeyourlaboratoryProps {
    header: string;
    paragraph: string;
    image: string;

    checktext1: string;
    checktext2: string;
    checktext3: string;
    buttontext: string;
 

    whitebubble: string;
  }

  const Revolutionizeyourlaboratory: React.FC<RevolutionizeyourlaboratoryProps> = ({
    header,
    paragraph,
    image,

    checktext1,
    checktext2,
    checktext3,
    buttontext,
   
    whitebubble,
  }) => {
  return (

    <div className="">
         {/* Green background container */}
      <div className="greenBackground relative w-screen h-auto mt-20 ">
        {/* Corner triangle */}
        <div className="absolute right-0 top-0 z-[-1]">
          <div
            className="greenBackgroundTriangle"
            style={{ clipPath: 'polygon(0% 0%, 100% 100%, 100% 50%, 100% 0%)' }}
          ></div>
        </div>
        {/* Circle div overlapping the container */}
        <div className={` ${style.hidegreencircle} greenCircleContainer   z-[-1]`} >
          <div
            className="greenCircle  "
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 31%, 0% 31%)' }}
          ></div>
        </div>

        {/*Revolutionize your laboratory center's with Carelyo contentbelow*/}
        <div className={` justify-center items-center my-[85px] ${style.changetocol} px-3 flex flex-row w-full h-auto max-w-[1192px]`}  >
          <div className='max-w-[592px] h-auto'>
              {/* Use the tamplate in componentsfolder and send in your costomised props to the tamplate or change content in the tamplate below*/}
          <CarleyoProvides
            header={header}
            paragraph={paragraph}
            checktext1={checktext1}
            checktext2={checktext2}
            checktext3={checktext3}
            buttontext={buttontext}
          />
          </div>
        

          <div className="   relative flex flex-row justify-end w-full max-w-[521px] h-auto  ">
            <div className="greenCircleContainer  opacity-[25%] left-10 w-[52px] h-[52px] top-0 ">
              <div
                className="greenCircle  bg-sage w-[100px]  h-[100px] "
                style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)' }}
              ></div>
            </div>

            <div className=" relative flex  justify-center items-center  h-[472px] w-full max-w-[460px]   ">
              <Image
                className=" h-auto w-full "
                layout="responsive "
                fill
                src={image}
                alt="Cecktable"
              />
              
            </div>
            <div className=" absolute top-2/3 left-0 w-auto z-10">
                {/*componentsfolder */}
                <ConvinientManagement text={whitebubble} />
              </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Revolutionizeyourlaboratory;
