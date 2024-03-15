import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import NavbarMobile from '../Components/navbar/NavbarMobile'
import Image from "next/image";

const DetailBlog = () => {
    return (
        <>
            <div>
                <div className=" max-h-32px top-25px left-144px ">
                    <div className="hidden md:block">
                        <Navbar />
                    </div>
                    <div className="block md:hidden">
                        <NavbarMobile />
                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center mt-14 gap-2 mb-10'>

                <div className='flex flex-col w-[90%] h-auto gap-6'>
                    <div className='flex justify-start'>
                        <h3 className='text-[Poppins] font-normal text-greenText text-sm sm:text-base md:text-base lg:text-base 2xl:text-lg'>Friday, 26 May 2024</h3>

                    </div>
                    <div className='flex justify-start'>
                        <h1 className='text-[Poppins] font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl '>Strengthening Cancer Care: A <br /> Collaborative Research Initiative</h1>

                    </div>
                    <div className='flex justify-end'>
                        <p className='text-[Poppins] text-[#8E8E8F] font-normal text-sm sm:text-base md:text-base 2xl:text-lg'>2 Minutes read</p>

                    </div>


                </div>

                <div className='flex justify-center w-[90%]'>
                    <Image

                        layout="responsive"
                        width={1191}
                        height={525}
                        src="/DoctorsDetailBlog.png"
                        alt="mobilephone"
                    />


                </div>
                <div className='flex flex-col justify-center items-center w-[82%] gap-7 mt-16 text-[Poppins] font-normal text-base sm:text-base md:text-lg 2xl:text-xl'>
                    <p>Advancing cancer care requires continuous research, innovation, and collaboration. We embarked on a collaborative research initiative aimed at improving cancer detection and treatment outcomes.</p>
                    <p>Our joint research team comprised leading oncologists, researchers, and data scientists, pooling their expertise to analyze vast datasets and develop predictive models for early cancer detection. By combining our organizations' resources and knowledge, we were able to access a diverse range of patient data, enabling us to identify patterns, risk factors, and potential treatment approaches.</p>
                    <p>
                        The outcomes of this collaboration have been remarkable. Through the application of artificial intelligence and machine learning algorithms, we have achieved higher accuracy rates in diagnosing certain types of cancers at earlier stages. This breakthrough has the potential to save lives and transform the field of oncology.
                        High levels of bad cholesterol lead to fatty deposits building up in blood vessels, which can eventually cause heart attacks or strokes.</p>

                </div>



            </div>
        </>
    )
}

export default DetailBlog