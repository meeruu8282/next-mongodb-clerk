// components/joinCarelynowintrobox.tsx
import Image from "next/image";
import Link from 'next/link';


interface CardTemplateProps {
  imageSrc: string;
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;
  icon1text: string;
  icon2text: string;
  icon3text: string;
  icon4text: string;

  // ... andra props för varje sektion av din mall
}

const JoinCarelynowintrobox: React.FC<CardTemplateProps> = ({
  imageSrc,
  icon1,
  icon2,
  icon3,
  icon4,
  icon1text,
  icon2text,
  icon3text,
  icon4text,

  // ... andra props för varje sektion av din mall
}) => {
  return (
    <div className=" flex justify-end ">
      <div className=" relative w-[1315px] h-[836px] mt-15 mb-20 ">
        <div className="absolute right-0 bottom-0">
          <Image
            className=""
            layout="fixed "
            width={970}
            height={591}
            src={imageSrc}
            alt="Costomimage"
          />
        </div>
        <div className=" absolute w-[289px] h-[396px] top-[190px] left-0 mt-[200px] ">
          <div className=" flex flex-col w-[289px] h-[276px] gap-[32px] ">
            <div className=" flex items-center w-[289px] h-[45px] gap-[16px] ">
              <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-[#45AC60] bg-opacity-[10%]  ">
                <div className="flex justify-center items-center w-[30px] h-[30px]">
                  {/* icon */}
                  <Image
                    className=""
                    layout="fixed "
                    width={19}
                    height={19}
                    src={icon1}
                    alt="Costomicon1"
                  />
                </div>
              </div>

              <div className=" text-[Poppins] text-[16px] w-400 left-0 w-[228px] h-[22px] justify-center justify-items-center">
                {/* text */}
                {icon1text}
              </div>
            </div>

            <div className="flex items-center w-[289px] h-[45px] gap-[16px] ">
              <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-[#45AC60] bg-opacity-[10%]  ">
                <div className="flex justify-center items-center w-[21px] h-[21px]">
                  {/* icon */}
                  <Image
                    className=""
                    layout="fixed "
                    width={19}
                    height={19}
                    src={icon2}
                    alt="Costomicon2"
                  />
                </div>
              </div>
              <div className=" text-[Poppins] text-[16px] w-400 left-0 w-[228px] h-[22px] justify-center justify-items-center">
                {/* text */}
                {icon2text}
              </div>
            </div>

            <div className="flex items-center w-[300px] h-[45px] gap-[16px] ">
              <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-[#45AC60] bg-opacity-[10%]  ">
                <div className="flex justify-center items-center w-[21px] h-[21px]">
                  {/* icon */}
                  <Image
                    className=""
                    layout="fixed "
                    width={19}
                    height={19}
                    src={icon3}
                    alt="Costomicon3"
                  />
                </div>
              </div>
              <div className=" text-[Poppins] text-[16px]  w-400 left-0  h-[22px] justify-center justify-items-center">
                {/* text */}
                {icon3text}
              </div>
            </div>

            <div className="flex items-center w-[350px] h-[45px] gap-[16px] ">
              <div className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center bg-[#45AC60] bg-opacity-[10%]  ">
                <div className="flex justify-center items-center w-[21px] h-[21px]">
                  {/* icon */}
                  <Image
                    className=""
                    layout="fixed "
                    width={19}
                    height={19}
                    src={icon4}
                    alt="Costomicon4"
                  />
                </div>
              </div>
              <div className="text-[Poppins] text-[16px] w-400 left-0  h-[22px] justify-center justify-items-center">
                {/* text */}
                {icon4text}
              </div>
            </div>
          </div>
          <Link href="/providers/auth/signIn" passHref>
          {/* Button */}
          <button  className="carelyoButton absolute w-[230px] h-[72px] p-[6px] gap-[10px] font-semibold bottom-0">
            <div>
              <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                Join Carelyo Now
                <div className="ml-3">
                  <div className="h-[28px] w-[28px]  rounded-[100px] flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinCarelynowintrobox;
