import Image from "next/image";

const HowItWorksPartFive: React.FC = () => {
  return (
    <div className="  ">
      <div className="w-[431px] h-[60px] flex  justify-center items-center font-semibold font-[Poppns]">
        <div>
          <h1 className="w-[61px] h-[60px] text-[40px] items-center text-[#45AC60]">
            #5
          </h1>
        </div>
        <div>
          <h1 className="w-[351px] h-[48px] text-[32px]">
            Consultation and Care
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[1175px] h-[607px]  flex justify-between ">
          <div className="bild för 5 ipad ">
            <Image
              layout="fixed"
              width={598}
              height={395}
              src="/ipadimagehowItWorks708.png"
              alt="ipad girl"
          
            />
          </div>
          <div className="bild för 5 mobil mr-[300px]">
            <Image
              layout="fixed"
              width={210}
              height={380}
              src="/"
              alt="mobilephone"
        
            />
          </div>
          <div className=" absolute flex  justify-center items-center w-[1175px] h-[153px] mt-[450px]">
            <div className="flex justify-center items-center text-vänster w-[580px] h-[153px] border rounded-[35px] bg-gradient-to-br from-[#45AC60] to-[#7EDC97]">
              <div className=" w-[538px] h-[96px] flex justify-center items-center">
                <h2 className="">
                  During the consultation, providers engage with the client,
                  conduct assessments, diagnose conditions, recommend
                  treatments, and provide medical advice.
                </h2>
              </div>
            </div>
            <div className=" ml-2 flex justify-center items-center text-vänster w-[580px] h-[153px]  border rounded-[35px]  bg-gradient-to-br from-[#45AC60] to-[#7EDC97] ">
              <div className="w-[538px] h-[96px] flex justify-center items-center ">
                <h2 className="">
                  Virtual consultation or visit your provider in person. Discuss
                  your health concerns, receive medical advice, and ask any
                  questions you may have.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorksPartFive;
