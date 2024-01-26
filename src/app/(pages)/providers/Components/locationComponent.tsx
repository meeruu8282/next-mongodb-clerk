import Image from "next/image"
export default function LocationComponent() {
    return (
        <div className="w-full h-[295px] bg-neutral-50 flex justify-center mt-20">
            <div className="w-[1258px] flex justify-between">
                <div className="flex flex-col justify-center">
                    <a className="text-sage pb-4" href="">Our locations</a>
                    <h1 className="py-4 text-[Poppins] text-[33px] leading-[29px] font-semibold">Visit our stores</h1>
                    <p className="py-4 text-[Poppins] text-[16px] leading-[22px] text-grayLight">Find us at these locations.</p>
                </div>
                <div className="flex flex-col justify-center">
                    <Image
                        src="/Mask group.png"
                        alt="Mask Image"
                        width={78}
                        height={68}
                    />
                    <h3 className="py-4 text-[Poppins] text-[22px] leading-[29px] font-semibold">Address</h3>
                    <p className="py-4 text-[Poppins] text-[16px] leading-[22px] text-grayLight">Swedcon18 AB, Allmogevägen 106,<br></br> 352 53 Växjö, Sweden</p>
                </div>
                <div className="flex flex-col p-2 justify-center">
                    <div className="flex pb-4">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="22" className="fill-current text-sage" fill-opacity="0.15" />
                            <g clip-path="url(#clip0_341_1234)">
                                <path d="M30 14H14C12.9 14 12.01 14.9 12.01 16L12 28C12 29.1 12.9 30 14 30H30C31.1 30 32 29.1 32 28V16C32 14.9 31.1 14 30 14ZM29.6 18.25L22.53 22.67C22.21 22.87 21.79 22.87 21.47 22.67L14.4 18.25C14.15 18.09 14 17.82 14 17.53C14 16.86 14.73 16.46 15.3 16.81L22 21L28.7 16.81C29.27 16.46 30 16.86 30 17.53C30 17.82 29.85 18.09 29.6 18.25Z" className="fill-current text-sage" />
                            </g>
                            <defs>
                                <clipPath id="clip0_341_1234">
                                    <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex flex-col pl-4">
                            <h3 className="text-[Poppins] text-[20px] leading-[29px] font-semibold">Email</h3>
                            <a href="mailto:hello@swedcon18.com" className="text-[Poppins] text-[16px] leading-[22px] text-grayLight pt-4">hello@swedcon18.com</a>
                        </div>
                    </div>
                    <div className="flex pt-4 py-4">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="22" className="fill-current text-sage" fill-opacity="0.1" />
                            <g clip-path="url(#clip0_341_1236)">
                                <path d="M29.23 25.2598L26.69 24.9698C26.08 24.8998 25.48 25.1098 25.05 25.5398L23.21 27.3798C20.38 25.9398 18.06 23.6298 16.62 20.7898L18.47 18.9398C18.9 18.5098 19.11 17.9098 19.04 17.2998L18.75 14.7798C18.63 13.7698 17.78 13.0098 16.76 13.0098H15.03C13.9 13.0098 12.96 13.9498 13.03 15.0798C13.56 23.6198 20.39 30.4398 28.92 30.9698C30.05 31.0398 30.99 30.0998 30.99 28.9698V27.2398C31 26.2298 30.24 25.3798 29.23 25.2598Z" className="fill-current text-sage" />
                            </g>
                            <defs>
                                <clipPath id="clip0_341_1236">
                                    <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex flex-col pl-4">
                            <h3 className="text-[Poppins] text-[20px] leading-[29px] font-semibold">Phone Number</h3>
                            <a href="tel:+46701410631" className="text-[Poppins] text-[16px] leading-[22px] text-grayLight pt-4">+46701410631</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
