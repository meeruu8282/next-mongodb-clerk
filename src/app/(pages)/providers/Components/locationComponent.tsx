import Image from "next/image"

interface LocationComponentTemplateProps {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    logo1: string;
    logo2: any;
    logo3: any;
    paragraph1: string;
    paragraph21: string;
    paragraph22: string;
    link1: string;
    link2: string;
    link3: string;

}

const LocationComponent: React.FC<LocationComponentTemplateProps> = ({
    title1,
    title2,
    title3,
    title4,
    logo1,
    logo2,
    logo3,
    paragraph1,
    paragraph21,
    paragraph22,
    link1,
    link2,
    link3,

}) => {
    return (
        <div className="w-full h-[700px] lg:h-[295px] bg-[#FAFAFA] flex flex-col lg:flex-row justify-center mt-20 text-center lg:text-left">
            <div className="w-[90%] max-w-[1258px] flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col justify-center items-center">
                    <a className="text-[#45AC60] pb-4" href="">{link1}</a>
                    <h1 className="py-4 text-[Poppins] text-[33px] leading-[29px] font-semibold">{title1}</h1>
                    <p className="py-4 text-[Poppins] text-[16px] leading-[22px] text-grayLight">{paragraph1}</p>
                </div>
                <div className="flex mt-11 lg:mt-0 flex-col justify-center items-center lg:items-left">
                    <Image
                        src={logo1}
                        alt="Mask Image"
                        width={78}
                        height={68}
                    />
                    <h3 className="py-4 text-[Poppins] text-[22px] leading-[29px] font-semibold">{title2}</h3>
                    <p className="py-4 text-[Poppins] text-[16px] leading-[22px] text-grayLight">{paragraph21}<br></br>{paragraph22}</p>
                </div>
                <div className="flex flex-col p-2 justify-center items-center lg:items-left mt-11 lg:mt-0">
                    <div className="flex pb-4">
                        <Image
                            src={logo2}
                            alt="Email logo"
                            width={44}
                            height={44}
                        />
                        <div className="flex flex-col pl-4">
                            <h3 className="text-[Poppins] text-[20px] leading-[29px] font-semibold">{title3}</h3>
                            <a href="mailto:hello@swedcon18.com" className="text-[Poppins] text-[16px] leading-[22px] text-grayLight pt-4">{link2}</a>
                        </div>
                    </div>
                    <div className="flex pt-4 pr-6">
                        <Image
                            src={logo3}
                            alt="Email logo"
                            width={44}
                            height={44}
                        />
                        <div className="flex flex-col pl-4">
                            <h3 className="text-[Poppins] text-[20px] leading-[29px] font-semibold">{title4}</h3>
                            <a href="tel:+46701410631" className="text-[Poppins] text-[16px] leading-[22px] text-grayLight pt-4">{link3}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LocationComponent;
