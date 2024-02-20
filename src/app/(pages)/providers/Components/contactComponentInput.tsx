interface InputTemplateProps{
    label: string;
    icon: any;
    placeholder: string;
}

const ContactComponentInput: React.FC<InputTemplateProps> = ({
    label,
    icon,
    placeholder,
  }) => {

    return (
        <div className="mb-4">
            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
               {label}
            </label>
           {icon}
            <input className="pl-11 text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={placeholder} />
        </div>
    )
}
export default ContactComponentInput;