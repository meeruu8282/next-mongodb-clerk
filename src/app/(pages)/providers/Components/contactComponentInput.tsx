import Image from "next/image";

interface InputTemplateProps {
    label: string;
    icon: string;
    placeholder: string;
    width: number;
}

const ContactComponentInput: React.FC<InputTemplateProps> = ({
    label,
    icon,
    placeholder,
    width,
}) => {

    return (
        <div className="mb-4">
            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                {label}
            </label>
            <Image
                src={icon}
                alt="Input logo"
                height={20}
                width={width}
                className="absolute mt-3.5 ml-3"
            />
            <input className="pl-11 text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={placeholder} />
        </div>
    )
}
export default ContactComponentInput;