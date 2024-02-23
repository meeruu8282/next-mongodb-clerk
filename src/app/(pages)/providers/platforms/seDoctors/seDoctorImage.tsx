import Image from "next/image";



const SeDoctorsImage = () => {
  return (


    <div className="lg:relative h-full lg:block hidden overflow-visible">
      <div className="pr-8 pl-8">
        <Image
          layout="fixed"
          width={408}
          height={530}
          src="/doctor.png"
          alt="Doctor"
        />
      </div>

      <div className="lg:absolute top-0 left-0 z-10">

        <div className="absolute bg-white top-12 w-[226px]  h-[99.03px] rounded-[20px] gap-8 " >
          <div className="relative w-[49px] h-[49px] top-[25px] left-[22px] ">
            <Image
              className="absolute "
              layout=" "
              width={49}
              height={50}
              src="/Ellipse.jpg"
              alt="Ellipse"
            />
            <div className=" rounded-full absolute w-3 h-3 top-0 right-0 border border-solid bg-sageDark"></div>
          </div>

          <div className=" absolute w-[125px] h-[49px] top-[25px] left-[80px] gap-[4px] text-black">
            <h2 className="  w-[140px] h-[24px] font-poppins text-base font-semibold leading-6 tracking-wide text-left ">
              24/7 Assistance
            </h2>
            <p className="w-[150px] h-21 opacity-50 font-poppins text-base font-normal leading-5 tracking-wide text-left">
              Ready to Assist!
            </p>
          </div>
        </div>
      </div>

      <div className="lg:absolute bottom-8 left-0 z-10">
        <div className="flex flex-row justify-center items-center w-[21.8rem] h-[4.6rem] bg-white rounded-2xl">
          <div className="flex flex-row justify-center items-center rounded-lg p-3 gap-2 bg-white bg-opacity-[10%]">
            <div className="border-2 border-[#2B9B5B] rounded-full">
              <svg
                className="h-[1.2rem] w-[1.2rem]"
                fill="none"
                stroke="#2B9B5B"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                  xmlns="http://www.w3.org/2000/svg"
                ></path>
              </svg>

            </div>
            <div>
              <h1 className="text-[Poppins] text-base font-normal text-black">Convenient Management Features!</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute top-1/2 lg:right-0 transform -translate-y-1/2 z-10">
        <div className=" flex justify-center items-center w-[68px] h-[68.02px] rounded-lg   bg-white  ">
          <div className="w-[24px] h-[24px] flex justify-center items-center ">
            <svg
              width="16"
              height="22"
              viewBox="0 0 16 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00011 8.10141C5.01047 7.30898 5.32986 6.55192 5.89024 5.99154C6.45062 5.43117 7.20768 5.11177 8.00011 5.10141C8.79253 5.11177 9.54959 5.43117 10.11 5.99154C10.6704 6.55192 10.9897 7.30898 11.0001 8.10141C10.9897 8.89384 10.6704 9.65089 10.11 10.2113C9.54959 10.7717 8.79253 11.091 8.00011 11.1014C7.20768 11.091 6.45062 10.7717 5.89024 10.2113C5.32986 9.65089 5.01047 8.89384 5.00011 8.10141ZM8.00011 17.1014L12.0001 18.1014V15.0214C10.7938 15.7479 9.40813 16.122 8.00011 16.1014C6.59208 16.122 5.20643 15.7479 4.00011 15.0214V18.1014M8.00011 2.10141C7.21208 2.08703 6.42943 2.23397 5.70027 2.5332C4.97112 2.83243 4.31087 3.27762 3.76011 3.84141C3.19022 4.39278 2.73988 5.05551 2.4371 5.78838C2.13431 6.52125 1.98557 7.30859 2.00011 8.10141C1.98969 8.88921 2.14044 9.67082 2.4431 10.3982C2.74576 11.1257 3.19394 11.7835 3.76011 12.3314C4.3083 12.9006 4.9674 13.3514 5.69668 13.6558C6.42595 13.9603 7.20991 14.1119 8.00011 14.1014C8.79031 14.1119 9.57426 13.9603 10.3035 13.6558C11.0328 13.3514 11.6919 12.9006 12.2401 12.3314C12.8063 11.7835 13.2545 11.1257 13.5571 10.3982C13.8598 9.67082 14.0105 8.88921 14.0001 8.10141C14.0146 7.30859 13.8659 6.52125 13.5631 5.78838C13.2603 5.05551 12.81 4.39278 12.2401 3.84141C11.6893 3.27762 11.0291 2.83243 10.2999 2.5332C9.57079 2.23397 8.78814 2.08703 8.00011 2.10141ZM16.0001 8.10141C15.9788 9.06129 15.7858 10.0096 15.4301 10.9014C15.1097 11.8088 14.6249 12.6495 14.0001 13.3814V21.1014L8.00011 19.1014L2.00011 21.1014V13.3814C0.705796 11.9279 -0.00639275 10.0477 0.000106447 8.10141C-0.0175184 7.05199 0.180143 6.0101 0.580889 5.04006C0.981634 4.07001 1.57696 3.1924 2.33011 2.46141C3.06381 1.70151 3.94547 1.10004 4.92067 0.694138C5.89587 0.288235 6.94391 0.0865081 8.00011 0.101409C9.0563 0.0865081 10.1043 0.288235 11.0795 0.694138C12.0547 1.10004 12.9364 1.70151 13.6701 2.46141C14.4233 3.1924 15.0186 4.07001 15.4193 5.04006C15.8201 6.0101 16.0177 7.05199 16.0001 8.10141Z"
                className="fill-current text-[#2B9B5B]"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>



  )
}

export default SeDoctorsImage