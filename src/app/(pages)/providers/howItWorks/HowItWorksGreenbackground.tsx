import CarelyoButton from "../Components/getStartedButton";
import Greenbackground from "../Components/greenBackground";
import style from './howItWork.module.css'


const HowItWorksGreenbackground = () => {
    return (
        <>

            <div className="flex flex-col w-[100%] justify-center h-screen items-center bg-gradient-to-br from-[#45AC60] to-[#7EDC97] text-white gap-7">
                {/* Header */}
                <div className="flex w-[90%] flex-row justify-between items-center ">
                    <div className="flex justify-start items-center">
                        <h1 className="font-[Poppins] text-4xl  w-[65%]">Who Can Become a Carelyo Health Provider?</h1>
                    </div>
                    <div className="flex justify-end items-center">
                        <h2 className="font-[Poppins] text-xl w-[75%]">Carelyo welcomes a wide range of healthcare professionals and institutions to join as providers on our platform. </h2>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-6">


                    {/* Section */}
                    <div className={`flex w-[90%] flex-row h-[100%] justify-center items-center gap-6 ${style.madeItToCol}`}>

                        <div className={`flex flex-col w-2/6  h-[20.1875rem] justify-center items-start font-[Poppins] border border-[#FFFFFF] rounded-3xl gap-4 p-8 ${style.madeItTo90Width}`}>
                            <div className={`flex justify-center items-center ${style.hidingImageW1080}  `}>
                                <img src="/Ellipse_11520.svg" alt="" />
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="text-2xl font-semibold">Self-Employed Doctors</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-xl font-medium">If you are a self-employed doctor running your own practice, Carlo offers you the opportunity to expand your reach with online</p>
                            </div>
                        </div>

                        <div className={`flex w-4/6 h-[20.1875rem] font-[Poppins] border border-[#FFFFFF] rounded-3xl ${style.madeItTo90Width}`}>

                            <div className={`flex flex-col w-3/4 justify-center items-start gap-6 p-8 ${style.madeItTo90Width} `}>
                                <div className="flex justify-center items-center">
                                    <h1 className="font-semibold font-[Poppins] text-4xl">Clinics and Hospitals</h1>
                                </div>
                                <div className={`flex justify-center items-center w-[87%] ${style.makeWidth80} ${style.makeWidth75} ${style.text100width}`}>
                                    <p className="text-xl font-medium w-full">By joining Carelyo, you can streamline your appointment booking process, enhance patient communication, and improve overall efficiency.</p>
                                </div>
                                <div className={`flex justify-center items-center ${style.buttonStart}`}>
                                    <CarelyoButton
                                        buttonText="Join Carelyo"
                                        color="third"
                                        buttonSize="gCb"
                                        size="small" />
                                </div>
                            </div>
                            <div className={`flex flex-col w-1/4 justify-end items-end ${style.hidingImageW1080}`} >
                                <div className="w-[361px] h-[246px] justify-center items-center">
                                    <img src="/image-r.svg" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className={`flex w-[90%] flex-row-reverse h-[100%] justify-center items-center gap-6 ${style.madeItToCol}`}>

                        <div className={`flex flex-col w-2/6  h-[20.1875rem] justify-center items-start font-[Poppins] border border-[#FFFFFF] rounded-3xl gap-4 p-8 ${style.madeItTo90Width}`}>
                            <div className={`flex justify-center items-center ${style.hidingImageW1080}  `}>
                                <img src="/Ellipse11520.svg" alt="" />
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="text-2xl font-semibold">Pharmacy</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-xl font-medium">By joining, you can simplify medication management, & enhance collaboration with healthcare providers.</p>
                            </div>
                        </div>

                        <div className={`flex w-4/6 h-[20.1875rem] font-[Poppins] border border-[#FFFFFF] rounded-3xl ${style.madeItTo90Width}`}>

                            <div className={`flex flex-col w-3/4 justify-center items-start gap-6 p-8 `}>
                                <div className="flex justify-center items-center">
                                    <h1 className="font-semibold font-[Poppins] text-4xl">Diagnostic Laboratory Centers</h1>
                                </div>
                                <div className={`w-[87%] flex justify-center items-center  ${style.makeWidth80} ${style.makeWidth75} ${style.text100width}`}>
                                    <p className="text-xl font-medium">Carelyo offers to seamlessly connect with referring healthcare providers, share test results securely, and ensure timely communication for better patient care.</p>
                                </div>
                                <div className={`flex justify-center items-center ${style.buttonStart}`}>
                                    <CarelyoButton
                                        buttonText="Get Carelyo"
                                        color="third"
                                        buttonSize="gCb"
                                        size="small" />
                                </div>

                            </div>
                            <div className={`flex flex-col w-1/4 justify-end items-end ${style.hidingImageW1080}`} >
                                <div className="w-[361px]  justify-center items-center">
                                    <img src="/image587.png" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>




                </div>




            </div>

        </>
    );
};

export default HowItWorksGreenbackground