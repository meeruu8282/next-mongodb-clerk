import Image from "next/image";
import ConvinientManagement from "./convinientManagement";
import CarleyoProvides from "./carleyoProvides/carleyoProvides";

interface IntegratedHospitalManagementProps {
    image: string
}

const IntegratedHospitalManagement: React.FC<IntegratedHospitalManagementProps> = ({
    image,
}) => {
    return (
        <div className="bg-[url('/greenbackgroundHospitals.svg')] w-screen h-screen lg:h-[730px] mt-20 flex items-center justify-evenly">
            <div className="items-center flex flex-col lg:flex-row w-[1192px] h-fit lg:h-[484px] left-[125px] top-[px] gap-[81px]">
                <div className="relative w-[286px] h-[295px] md:w-[359px] md:h-[370px] lg:w-[521px] lg:h-[484px]">
                    <div className="lg:absolute block bottom-0 w-[359px] h-[370px] lg:w-[521px] lg:h-[472px] top-[12px]">
                        <div className="lg:absolute w-[359px] h-[370px]  lg:w-[460px] lg:h-[472px] rounded-[85px] ">
                            <Image
                                className=""
                                layout="fixed "
                                fill
                                src={image}
                                alt="integratedHospitol"
                            />
                        </div>
                    </div>
                    <div className="absolute hidden lg:block lg:w-[294px] lg:h-[74px] bottom-[82px] right-[-25px]">
                        {/* ConvienientManagement hidden temporary. Can not find the element that overlapping with the button.*/}
                        {/*tamplate in components folder */}
                        <ConvinientManagement text="Convenient Management" />
                    </div>
                </div>
                <CarleyoProvides
                    header={'Integrated Hospital Management'}
                    paragraph={
                        "Carelyo platform provides a comprehensive solution for managing all aspects of your hospital's operations. "
                    }
                    checktext1={'Patient admissions and discharge'}
                    checktext2={'Medical records and billing'}
                    checktext3={'Integrated system simplifies administrative tasks'}
                    buttontext={'Manage your hospital'}
                />
            </div>
        </div>
    )
}
export default IntegratedHospitalManagement