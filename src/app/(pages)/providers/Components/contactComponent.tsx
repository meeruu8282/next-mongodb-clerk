export default function ContactComponent() {
    return (
        <div className="flex flex-col justify-start w-[1258px] mt-[100px]">
            <div>
                <button className="carelyoButton bg-opacity-10 text-[#45AC60] text-[poppins] font-semibold hover:text-[#FFFFFF]">Contact Us</button>
                <p className="w-4/6 text-[Poppins] text-[16px] leading-[22px] tracking-[0em] text-[#9C9C9C] mt-6">Send us your questions, comments or suggestions and we will reply you as quickly as possible. Please read through our <a className="text-[#45AC60] font-medium text-opacity-50 underline hover:text-opacity-100" href="">FAQ</a> there's a good chance an answer to your question is there.</p>
            </div>
            <div className="flex w-[1258px] justify-between mt-6">
                <div className="flex flex-col w-[48%]">
                    <p className="text-[Poppins] text-[16px] leading-[22px] tracking-[0em] text-[#9C9C9C] mb-6">Carelyo open for all.</p>
                    <form>
                        <div className="mb-4">
                            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                                Full Name*
                            </label>
                            <svg className="absolute mt-3.5 ml-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0002 0.833496C4.94016 0.833496 0.833496 4.94016 0.833496 10.0002C0.833496 15.0602 4.94016 19.1668 10.0002 19.1668C15.0602 19.1668 19.1668 15.0602 19.1668 10.0002C19.1668 4.94016 15.0602 0.833496 10.0002 0.833496ZM5.481 15.7568C5.87516 14.9318 8.27683 14.1252 10.0002 14.1252C11.7235 14.1252 14.1343 14.9318 14.5193 15.7568C13.2727 16.7468 11.7052 17.3335 10.0002 17.3335C8.29516 17.3335 6.72766 16.7468 5.481 15.7568ZM15.8302 14.4277C14.5193 12.8327 11.3385 12.2918 10.0002 12.2918C8.66183 12.2918 5.481 12.8327 4.17016 14.4277C3.23516 13.1993 2.66683 11.6685 2.66683 10.0002C2.66683 5.95766 5.95766 2.66683 10.0002 2.66683C14.0427 2.66683 17.3335 5.95766 17.3335 10.0002C17.3335 11.6685 16.7652 13.1993 15.8302 14.4277ZM10.0002 4.50016C8.22183 4.50016 6.79183 5.93016 6.79183 7.7085C6.79183 9.48683 8.22183 10.9168 10.0002 10.9168C11.7785 10.9168 13.2085 9.48683 13.2085 7.7085C13.2085 5.93016 11.7785 4.50016 10.0002 4.50016ZM10.0002 9.0835C9.23933 9.0835 8.62516 8.46933 8.62516 7.7085C8.62516 6.94766 9.23933 6.3335 10.0002 6.3335C10.761 6.3335 11.3752 6.94766 11.3752 7.7085C11.3752 8.46933 10.761 9.0835 10.0002 9.0835Z" fill="#8E8E8F" />
                            </svg>
                            <input className="pl-11 text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Revalina Putri" />
                        </div>
                        <div className="mb-4">
                            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <svg className="absolute mt-3.5 ml-4" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg className="absolute mt-3.5 ml-4" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4998 0.833496H2.49984C1.4915 0.833496 0.666504 1.6585 0.666504 2.66683V17.3335C0.666504 18.3418 1.4915 19.1668 2.49984 19.1668H13.4998C14.5082 19.1668 15.3332 18.3418 15.3332 17.3335V2.66683C15.3332 1.6585 14.5082 0.833496 13.4998 0.833496ZM5.24984 2.66683H7.08317V7.25016L6.1665 6.56266L5.24984 7.25016V2.66683ZM13.4998 17.3335H2.49984V2.66683H3.4165V10.9168L6.1665 8.85433L8.9165 10.9168V2.66683H13.4998V17.3335Z" fill="#8E8E8F" />
                            </svg>
                            <input className="pl-11 text-[Poppins] text-[16px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Write your subject here" />
                        </div>
                        <div className="mb-4">
                            <label className="text-[Poppins] text-[16px] block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <svg className="absolute mt-3.5 ml-4" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 2.5H16.5V13H3.52375L2.5 14.0238V2.5ZM2.5 0.75C1.5375 0.75 0.75875 1.5375 0.75875 2.5L0.75 18.25L4.25 14.75H16.5C17.4625 14.75 18.25 13.9625 18.25 13V2.5C18.25 1.5375 17.4625 0.75 16.5 0.75H2.5ZM4.25 9.5H11.25V11.25H4.25V9.5ZM4.25 6.875H14.75V8.625H4.25V6.875ZM4.25 4.25H14.75V6H4.25V4.25Z" fill="#8E8E8F" />
                            </svg>
                            <textarea
                                className="pl-11 h-[150px] resize-none text-[Poppins] text-[16px] border rounded h-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Tell us a little about carelyo..."
                            />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="accent-[#45AC60] w-4 h-4 rounded" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium">I agree with the <a href="#" className="text-[#45AC60] hover:underline">Terms of use and Privacy Policy</a>.</label>
                        </div>
                    </form>
                    <button className="carelyoButton rounded-md w-full">Send Message</button>
                </div>
                <div className="flex flex-col w-[48%]">
                    map
                </div>
            </div>
        </div>
    )
}