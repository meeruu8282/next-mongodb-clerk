import Image from "next/image";
import EllipseBackground from "./ellipseBackground";

interface SearchbarTemplateProps {
    title: string;
    undertitle: string;
}

const SearchBar: React.FC<SearchbarTemplateProps> = ({
    title,
    undertitle,
}) => {
    return (
        <div className="relative w-[97%] md:w-[90%] h-[267px] top-[top: 2652px]">
            {/* Green background container */}
            <div className="greenBackground h-[267px] rounded-[40px] overflow-hidden">
                <div className=" absolute top-[20px] left-[315px]">
                    {/* background with about 50 circles */}
                    <EllipseBackground />
                </div>
                {/* Green background rectangle */}
                <div
                    className="absolute w-[415px] h-[267px] top-0 right-[-50px] rounded-tr-[40px] rounded-br-[40px] bg-sage opacity-5"
                    style={{ clipPath: "polygon(0% 0%, 70% 110%, 100.5% 90%, 40.5% 0%)" }}
                >
                    {/* Corner triangle */}
                </div>
                <div
                    className="greenBackgroundTriangle absolute max-w-[197px] h-[189.5px] top-0 right-0  rounded-tr-[40px]"
                    style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 0%, 0% 0%)" }}
                ></div>
                {/* Green background rectangle */}
                <div
                    className=" absolute max-w-[415px] h-[267px] top-0 left-0 rounded-bl-[40px] rounded-tl-[40px] bg-[#45AC60] opacity-5"
                    style={{ clipPath: "polygon(0% 50%, 100% 100%, 0% 100%, 0% 0%)" }}
                >
                    {/* Corner triangle */}
                </div>
                <div className="greenCircleContainer left-[1000px] top-[182px]">
                    <div
                        className="greenCircle"
                        style={{
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%)",
                            height: "487px",
                            width: "487px",
                            borderRadius: "100%"
                        }}
                    ></div>
                </div>
                <form action="" className="flex relative w-full p-4 md:p-0 md:w-3/4 v-max mx-auto">
                    <div className="flex flex-col w-full">
                        <label className="text-[poppins] text-[25px] text-center md:text-left font-semibold leading-15 tracking-normal text-[#FFFFFF]" htmlFor="SearchHelp">{title}</label>
                        <div className="flex flex-row pt-2.5">
                            <div className="relative w-full">
                                <input type="search" name="" id="SearchHelp" placeholder="Search Blog here..." className="peer z-10 bg transparent w-full h-[65px] rounded-[20px] border cursor-pointer focus:outline-none text-[19px] md:text-[16px] focus:cursor-text pl-14 pr-4" />
                                <Image
                                src={"/SearchiconLarge.svg"}
                                alt="search icon"
                                width={21}
                                height={22}
                                className="absolute top-[22px] ml-6"
                                />
                            </div>
                            <button className="carelyoButton justify-center flex items-center md:p-6 h-[65px] w-[65px] w-1/6 md:w-[160px] rounded-[20px] md:mt-0 ml-2 md:ml-6 p-4">
                                <div className="">
                                    <div className="w-[40px] h-[40px] md:h-[28px] md:w-[28px] rounded-full flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]">
                                        <Image
                                            src={"/searchicon.svg"}
                                            alt="Search icon"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </div>
                                <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full hidden md:block">
                                    Search
                                </div>
                            </button>
                        </div>
                        <div className="text-[poppins] text-[16px] text-center md:text-left font-semibold leading-15 tracking-normal w-full mt-4 text-[#FFFFFF]">{undertitle}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SearchBar