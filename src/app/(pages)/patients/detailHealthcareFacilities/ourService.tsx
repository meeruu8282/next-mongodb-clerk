import Image from 'next/image';
interface OurServiceProps {
  image: string;
  subtext: string;
  header1: string;
  header2: string;
  header3: string;
  header4: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  reverseDirection?: boolean;
}

const OurService: React.FC<OurServiceProps> = ({
  image,
  subtext,
  header1,
  header2,
  header3,
  header4,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  reverseDirection,
}) => {
  const flexDirection = reverseDirection ? 'flex-row-reverse' : 'flex-row';

  // Hjälpfunktion för att rendera rubrik med ikon
  const renderHeaderWithIcon = (headerText: string) => (

    <div className="flex items-center">
      <Image
      alt= "check circle" 
      layout="fixed"
      className="checkcircle"
      width={24}
      height={24}
      src="/checkcircle.svg"
      />

      <h1 className="text-greenText text-[32px] font-semibold tracking-tight text-left">
        {headerText}
      </h1>
    </div>

  );



  return (
    <div className={`flex ${flexDirection} justify-center items-center my-[50px] py-[100px] max-w-[1400px] mx-auto w-full h-auto`}>

      <div className="flex justify-center items-center h-auto w-full gap-[100px] max-w-[1260px]">
      
      <div className="relative w-full max-w-[1190px]">
        
        <Image
          className="rounded-25"
          layout="fixed"
          width={1190}
          height={388}
          src={image}
          alt="our service"
        />
         </div>
          {/* Ikonbilden */}
          <div className="absolute mt-[-40rem]" > 
            <Image
              width={52}
              height={52}
              src="/OurServiceIcone.svg" 
              alt="our service icon"
            />
          </div>

          <div className="flex w-full max-w-[558px] flex-col" > 
          <div className="w-full gap-[19px] flex flex-col items-start">
            <h3 className="text-greenText text-[24px] font-medium text-left">
              {subtext}
            </h3>
            {renderHeaderWithIcon(header1)}
            <p className="opacity-50 font-normal leading-8 text-left text-[16px] mt-[-15px] mb-6">
              {paragraph1}
            </p>
            {renderHeaderWithIcon(header2)}
            <p className="opacity-50 font-normal leading-8 text-left text-[16px] mt-[-15px] mb-6">
              {paragraph2}
            </p>
            {renderHeaderWithIcon(header3)}
            <p className="opacity-50 font-normal leading-8 text-left text-[16px] mt-[-15px] mb-6">
              {paragraph3}
            </p>
            {renderHeaderWithIcon(header4)}
            <p className="opacity-50 font-normal leading-8 text-left text-[16px] mt-[-15px] mb-6">
              {paragraph4}
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default OurService;
