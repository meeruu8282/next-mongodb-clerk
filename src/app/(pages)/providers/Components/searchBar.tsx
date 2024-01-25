import EllipseBackground from "./ellipseBackground";

export default function SearchBar() {
    return (
        <div className=" relative w-[1258px] h-[267px] top-[top: 2652px] mt-[100px">
            {/* Green background container */}
            <div className="greenBackground w-[1258px] h-[267px] rounded-[40px] overflow-hidden">
                <div className=" absolute top-[20px] left-[315px]">
                    {/* background with about 50 circles */}
                    <EllipseBackground/>
                </div>
                {/* Green background rectangle */}
                <div
                    className="absolute w-[415px] h-[267px] top-0 right-[-50px] rounded-tr-[40px] rounded-br-[40px] bg-[#45AC60] opacity-5"
                    style={{ clipPath: "polygon(0% 0%, 70% 110%, 100.5% 90%, 40.5% 0%)" }}
                >
                    {/* Corner triangle */}
                </div>
                <div
                    className="greenBackgroundTriangle absolute w-[197px] h-[189.5px] top-0 right-0  rounded-tr-[40px]"
                    style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 0%, 0% 0%)" }}
                ></div>
                {/* Green background rectangle */}
                <div
                    className=" absolute w-[415px] h-[267px] top-0 left-0 rounded-bl-[40px] rounded-tl-[40px] bg-[#45AC60] opacity-5"
                    style={{ clipPath: "polygon(0% 50%, 100% 100%, 0% 100%, 0% 0%)" }}
                >
                    {/* Corner triangle */}
                </div>
                <div className="greenCircleContainer left-[1000px] top-[182px]">
                    <div
                        className="greenCircle"
                        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%)",
                        height: "487px",
                        width: "487px",
                   borderRadius: "100%"}}
                    ></div>
                </div>
                <form action="" className="flex relative w-3/4 v-max mx-auto">
                    <div className="flex flex-col w-full">
                        <label className="text-[poppins] text-[25px] font-semibold leading-15 tracking-normal  text-left text-[#FFFFFF]" htmlFor="SearchHelp">Welcome to the Carelyo Help Center!</label>
                        <div className="flex pt-2.5">
                            <div className="relative w-full">
                                <input type="search" name="" id="SearchHelp" placeholder="Search Blog here..." className="peer z-10 bg transparent w-full h-[65px] rounded-[20px] border cursor-pointer focus:outline-none focus:cursor-text pl-14 pr-4" />
                                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[22px] ml-6">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8806 0.5C15.2506 0.5 19.6186 4.868 19.6186 10.238C19.6186 12.7715 18.6463 15.0823 17.0553 16.8165L20.186 19.9407C20.479 20.2337 20.48 20.7077 20.187 21.0007C20.041 21.1487 19.848 21.2217 19.656 21.2217C19.465 21.2217 19.273 21.1487 19.126 21.0027L15.9575 17.843C14.2907 19.1778 12.1773 19.977 9.8806 19.977C4.5106 19.977 0.141602 15.608 0.141602 10.238C0.141602 4.868 4.5106 0.5 9.8806 0.5ZM9.8806 2C5.3376 2 1.6416 5.695 1.6416 10.238C1.6416 14.781 5.3376 18.477 9.8806 18.477C14.4226 18.477 18.1186 14.781 18.1186 10.238C18.1186 5.695 14.4226 2 9.8806 2Z" fill="#9ca2ad" />
                                </svg>
                            </div>
                            <button className="carelyoButton flex items-center h-[65px] rounded-[20px] ml-4 w-1/6 p-4">
                                <div className="">
                                    <div className="h-[28px] w-[28px] rounded-full flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5625 10.25H10.8712L10.6262 10.0137C11.4837 9.01625 12 7.72125 12 6.3125C12 3.17125 9.45375 0.625 6.3125 0.625C3.17125 0.625 0.625 3.17125 0.625 6.3125C0.625 9.45375 3.17125 12 6.3125 12C7.72125 12 9.01625 11.4837 10.0137 10.6262L10.25 10.8712V11.5625L14.625 15.9287L15.9287 14.625L11.5625 10.25ZM6.3125 10.25C4.13375 10.25 2.375 8.49125 2.375 6.3125C2.375 4.13375 4.13375 2.375 6.3125 2.375C8.49125 2.375 10.25 4.13375 10.25 6.3125C10.25 8.49125 8.49125 10.25 6.3125 10.25Z" fill="#FFFFFF" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="carelyoButtonText flex items-center justify-center text-[16px] w-full">
                                    Search
                                </div>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}