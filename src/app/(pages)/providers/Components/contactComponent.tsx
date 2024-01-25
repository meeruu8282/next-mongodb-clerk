'use client'
import Image from "next/image";
import { useState } from "react";
export default function ContactComponent() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col justify-start w-[1258px] mt-[100px]">
            <div>
                <button className="carelyoButton bg-opacity-10 text-sage text-[poppins] font-semibold hover:text-white">Contact Us</button>
                <p className="w-4/6 text-[Poppins] text-[16px] leading-[22px] tracking-[0em] text-grayLight mt-6">Send us your questions, comments or suggestions and we will reply you as quickly as possible. Please read through our <a className="text-sage font-medium text-opacity-50 underline hover:text-opacity-100" href="">FAQ</a> there's a good chance an answer to your question is there.</p>
            </div>
            <div className="flex w-[1258px] justify-between mt-6">
                <div className="flex flex-col justify-center w-[50%]">
                    <p className="text-[Poppins] text-[16px] leading-[22px] tracking-[0em] text-grayLight mb-6">Carelyo open for all.</p>
                    <form>
                        <div className="mb-4">
                            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                                Full Name*
                            </label>
                            <svg className="absolute mt-3.5 ml-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0002 0.833496C4.94016 0.833496 0.833496 4.94016 0.833496 10.0002C0.833496 15.0602 4.94016 19.1668 10.0002 19.1668C15.0602 19.1668 19.1668 15.0602 19.1668 10.0002C19.1668 4.94016 15.0602 0.833496 10.0002 0.833496ZM5.481 15.7568C5.87516 14.9318 8.27683 14.1252 10.0002 14.1252C11.7235 14.1252 14.1343 14.9318 14.5193 15.7568C13.2727 16.7468 11.7052 17.3335 10.0002 17.3335C8.29516 17.3335 6.72766 16.7468 5.481 15.7568ZM15.8302 14.4277C14.5193 12.8327 11.3385 12.2918 10.0002 12.2918C8.66183 12.2918 5.481 12.8327 4.17016 14.4277C3.23516 13.1993 2.66683 11.6685 2.66683 10.0002C2.66683 5.95766 5.95766 2.66683 10.0002 2.66683C14.0427 2.66683 17.3335 5.95766 17.3335 10.0002C17.3335 11.6685 16.7652 13.1993 15.8302 14.4277ZM10.0002 4.50016C8.22183 4.50016 6.79183 5.93016 6.79183 7.7085C6.79183 9.48683 8.22183 10.9168 10.0002 10.9168C11.7785 10.9168 13.2085 9.48683 13.2085 7.7085C13.2085 5.93016 11.7785 4.50016 10.0002 4.50016ZM10.0002 9.0835C9.23933 9.0835 8.62516 8.46933 8.62516 7.7085C8.62516 6.94766 9.23933 6.3335 10.0002 6.3335C10.761 6.3335 11.3752 6.94766 11.3752 7.7085C11.3752 8.46933 10.761 9.0835 10.0002 9.0835Z" fill="#8E8E8F" />
                            </svg>
                            <input className="pl-11 text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Revalina Putri" />
                        </div>
                        <div className="mb-4">
                            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <svg className="absolute mt-3.5 ml-3" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_418_1882)">
                                    <path d="M20.1663 5.50008C20.1663 4.49175 19.3413 3.66675 18.333 3.66675H3.66634C2.65801 3.66675 1.83301 4.49175 1.83301 5.50008V16.5001C1.83301 17.5084 2.65801 18.3334 3.66634 18.3334H18.333C19.3413 18.3334 20.1663 17.5084 20.1663 16.5001V5.50008ZM18.333 5.50008L10.9997 10.0834L3.66634 5.50008H18.333ZM18.333 16.5001H3.66634V7.33341L10.9997 11.9167L18.333 7.33341V16.5001Z" fill="#8E8E8F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_418_1882">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <input className="pl-11 text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="revalinaputri123@gmail.com" />
                        </div>
                        <div className="mb-4">
                            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <svg className="absolute mt-3.5 ml-3" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4998 0.833496H2.49984C1.4915 0.833496 0.666504 1.6585 0.666504 2.66683V17.3335C0.666504 18.3418 1.4915 19.1668 2.49984 19.1668H13.4998C14.5082 19.1668 15.3332 18.3418 15.3332 17.3335V2.66683C15.3332 1.6585 14.5082 0.833496 13.4998 0.833496ZM5.24984 2.66683H7.08317V7.25016L6.1665 6.56266L5.24984 7.25016V2.66683ZM13.4998 17.3335H2.49984V2.66683H3.4165V10.9168L6.1665 8.85433L8.9165 10.9168V2.66683H13.4998V17.3335Z" fill="#8E8E8F" />
                            </svg>
                            <input className="pl-11 text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Write your subject here" />
                        </div>
                        <div className="mb-4">
                            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <svg className="absolute mt-3.5 ml-3" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 2.5H16.5V13H3.52375L2.5 14.0238V2.5ZM2.5 0.75C1.5375 0.75 0.75875 1.5375 0.75875 2.5L0.75 18.25L4.25 14.75H16.5C17.4625 14.75 18.25 13.9625 18.25 13V2.5C18.25 1.5375 17.4625 0.75 16.5 0.75H2.5ZM4.25 9.5H11.25V11.25H4.25V9.5ZM4.25 6.875H14.75V8.625H4.25V6.875ZM4.25 4.25H14.75V6H4.25V4.25Z" fill="#8E8E8F" />
                            </svg>
                            <textarea
                                className="pl-11 h-[8.5rem] resize-none text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Tell us a little about carelyo..."
                            />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="
                                peer
                                w-4
                                h-4
                                "
                                    required />
                                <svg className="
                                    absolute
                                    w-4 h-4
                                    hidden peer-checked:block
                                    pointer-events-none
                                    "
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33333 3.33334C1.33333 2.22877 2.22876 1.33333 3.33333 1.33333H20.6667C21.7712 1.33333 22.6667 2.22876 22.6667 3.33333V20.6667C22.6667 21.7712 21.7712 22.6667 20.6667 22.6667H3.33334C2.22877 22.6667 1.33333 21.7712 1.33333 20.6667V3.33334Z" fill="white" />
                                    <path d="M21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0ZM10.28 17.72C9.76 18.24 8.92 18.24 8.4 17.72L3.61333 12.9333C3.09333 12.4133 3.09333 11.5733 3.61333 11.0533C4.13333 10.5333 4.97333 10.5333 5.49333 11.0533L7.91912 13.4791C8.70017 14.2602 9.9665 14.2602 10.7475 13.4791L18.5067 5.72C19.0267 5.2 19.8667 5.2 20.3867 5.72C20.9067 6.24 20.9067 7.08 20.3867 7.6L10.28 17.72Z" fill="#45AC60" />
                                </svg>
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium">I agree with the <a href="#" className="text-sage hover:underline">Terms of use and Privacy Policy</a>.</label>
                        </div>
                    </form>
                    <button className="carelyoButton rounded-md w-full">Send Message</button>
                </div>
                <div className="flex justify-center w-[50%]">
                    <div className="relative">
                        <Image
                            src="/Map.png"
                            alt="Map of Swedcon18s location"
                            width={490}
                            height={480}
                        />
                        <button className="absolute bottom-6 right-8 bg-white text-sage py-2.5 px-5 rounded-[18px]" onClick={() => setIsOpen(true)}>View map</button>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-50" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/Map.png"
                            alt="Map of Swedcon18s location"
                            className="object-contain"
                            width={500}
                            height={500}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
