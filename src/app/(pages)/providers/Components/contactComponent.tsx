'use client'
import Image from "next/image";
import { useState } from "react";
import ContactComponentForm from "./contactComponentForm";
export default function ContactComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col w-[95%] lg:w-[90%] max-w-[1258px] mt-[100px] align-center items-center">
            <div className="w-[95%] lg:w-full">
                <div className="flex justify-center lg:justify-start">
                    <button className="carelyoButton bg-opacity-10 text-[#45AC60] text-[poppins] font-semibold hover:text-[#FFFFFF]">Contact Us</button>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <p className="w-5/6 text-center lg:text-left lg:w-4/6 text-[Poppins] text-[16px] leading-[22px] tracking-[0em] text-[#9C9C9C] mt-6">Send us your questions, comments or suggestions and we will reply you as quickly as possible. Please read through our <a className="text-[#45AC60] font-medium text-opacity-50 underline hover:text-opacity-100" href="">FAQ</a> there's a good chance an answer to your question is there.</p>
                </div>
            </div>
            <div className="flex w-[95%] lg:w-full flex-col lg:flex-row justify-center align-end mt-6">
                <div className="flex flex-col justify-center w-[100%] lg:w-[50%]">
                    <p className="text-[Poppins] text-[16px] leading-[22px] tracking-[0em] text-[#9C9C9C] mb-6">Carelyo open for all.</p>
                    <ContactComponentForm/>
                </div>
                <div className="flex justify-center h-full w-[100%] mt-10 lg:mt-0 lg:w-[50%]">
                    <div className="relative">
                        <Image
                            src="/Map.png"
                            alt="Map of Swedcon18s location"
                            width={490}
                            height={480}
                        />
                        <button className="absolute bottom-6 right-8 bg-[#FFFFFF] text-[#45AC60] py-2.5 px-5 rounded-[18px]" onClick={openModal}>View map</button>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Image
                                                src="/Map.png"
                                                alt="Map of Swedcon18s location"
                                                width={490}
                                                height={480}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
