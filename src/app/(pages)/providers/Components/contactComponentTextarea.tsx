import Image from "next/image"

interface TextareaTemplateProps {
    label: string;
    icon: string;
    placeholder: string;
}

const ContactComponentTextarea: React.FC<TextareaTemplateProps> = ({
    label,
    icon,
    placeholder,
}) => {

    return (
        <div className="mb-4">
            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                {label}
            </label>
            <Image 
            src={icon}
            alt="Text area icon"
            height={20}
            width={20}
            className="absolute mt-3.5 ml-3"
            />
            <textarea
                className="pl-11 h-[8.5rem] resize-none text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder={placeholder}
            />
        </div>
    )
}
export default ContactComponentTextarea;