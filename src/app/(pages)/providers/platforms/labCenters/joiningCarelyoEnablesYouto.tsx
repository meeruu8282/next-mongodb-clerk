import Image from "next/image";
import Hovertextbox from "./hovertextbox";
import style from "../../platforms/labCenters/labCenter.module.css"

interface JoiningCarelyoEnablesYoutoProps {
    header: string;
    paragraph: string;
    image: string;

    header01: string;
    paragraph01: string;
    header02: string;
    paragraph02: string;
    header03: string;
    paragraph03: string;
    header04: string;
    paragraph04: string;
  }

  const JoiningCarelyoEnablesYouto: React.FC<JoiningCarelyoEnablesYoutoProps> = ({
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
  }) => {
  return (

    <div className="w-full mt-20 flex flex-col items-center">
      <div className="w-fit flex flex-col justify-center items-center">
        <h1 className={`${style.mainJoinEnableHeader} mb-7 text-4xl font-poppins
        font-medium leading-10 tracking-wide text-center`}>
          {header}
        </h1>
        <p className={`${style.mainJoinEnableParagraph} mx-[20%] opacity-50
        font-poppins text-xl font-medium leading-8 tracking-tight text-center`}>
          {paragraph}
        </p>
      </div>

      <div className={`${style.JoinEnableWrapper} w-full flex justify-center mt-16
      px-6 gap-12`}>
        {/* Image next to hoverboxes */}
        <div className={`${style.JoinEnableImageWrapper} w-[530px] max-h-[682px]
        relative rounded-[25px]`}>
          <Image
            width={530}
            height={682}
            layout="responsive"
            src={image}
            alt="Photo of a chemist doctor"
            className={`${style.JoinEnableImage} rounded-[25px] object-cover`}
          />
          </div>
        {/* Hover boxes */}
        <div className={`${style.hoverboxMainWrap} flex flex-col`}>
          <Hovertextbox header01={header01} paragraph01={paragraph01}/>
          <Hovertextbox header01={header02} paragraph01={paragraph02}/>
          <Hovertextbox header01={header03} paragraph01={paragraph03}/>
          <Hovertextbox header01={header04} paragraph01={paragraph04}/>
        </div>
      </div>
    </div>
  );
};

export default JoiningCarelyoEnablesYouto;
