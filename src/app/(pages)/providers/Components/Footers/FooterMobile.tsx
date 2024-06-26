import React from 'react'
import Image from 'next/image'

const FooterMobile = () => {
  return (
    <div className="bg-gray-100 min-h-min flex px-3 text-center items-center flex-col mt-10 ">
 <Image className="my-5" width={80} height={80} src="/logo.svg" alt="logo" priority/>
                  <div className="font-[Poppins]  font-normal text-[16px] ">
                  Delivering Better Healthcare Solutions
                </div>
                <div className="  gap-5 font-[Poppins] font-medium text-base ">
                <nav className="mt-5">Home</nav>
                <nav className="mt-2">About Us</nav>
                <nav className="mt-2"> Platforms</nav>
                <nav className="mt-2"> Partners</nav>
              </div>
              <div className="  flex flex-col mt-5">
              <div className=" gap-5  text-base">
                <h1 className="  font-[Poppins] font-semibold">
                  CONTACT INFORMATION
                </h1>
                <div>
                  <h2 className="w-[205px] h-[22px] font-normal ">info@carelyo.io</h2>
                </div>
                <div>
                  <h2 className="w-[205px] h-[22px]"> +1 (123) 456-7890</h2>
                </div>
              </div>
            </div>
            <div className="Social-container">
                  <h1 className="font-[Poppins]  font-semibold my-5">SOCIAL MEDIA</h1>
                  <div className='social-logo-container flex gap-3 justify-center'>
                  <div className="w-[40px] h-[40px]  rounded-full flex justify-center items-center border-solid border-sage border">
                    <a
                      className="w-[25px] h-[25px]  "
                      href="https://www.instagram.com/your_username/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                          className="fill-current text-sage"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-solid border-sage border">
                    <div className="w-[25px] h-[25px] flex justify-center items-center">
                      <a
                        href="https://twitter.com/your_twitter_username"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.3335 2.35294C19.5974 2.76471 18.8039 3.03529 17.9817 3.16471C18.823 2.54118 19.4731 1.55294 19.779 0.364706C18.9855 0.952941 18.106 1.36471 17.1786 1.6C16.4234 0.588235 15.3622 0 14.1576 0C11.9109 0 10.0754 2.25882 10.0754 5.04706C10.0754 5.44706 10.1136 5.83529 10.1805 6.2C6.77709 5.98824 3.7465 3.97647 1.72929 0.929412C1.37556 1.67059 1.1748 2.54118 1.1748 3.45882C1.1748 5.21176 1.89181 6.76471 3.0008 7.64706C2.32202 7.64706 1.69105 7.41177 1.13656 7.05882C1.13656 7.05882 1.13656 7.05882 1.13656 7.09412C1.13656 9.54118 2.55147 11.5882 4.42527 12.0471C4.08111 12.1647 3.71782 12.2235 3.34497 12.2235C3.08684 12.2235 2.82872 12.1882 2.58015 12.1294C3.0964 14.1176 4.59736 15.6 6.40424 15.6353C5.00845 17 3.23981 17.8 1.30864 17.8C0.983592 17.8 0.658544 17.7765 0.333496 17.7294C2.14994 19.1647 4.31055 20 6.62413 20C14.1576 20 18.2972 12.3059 18.2972 5.63529C18.2972 5.41177 18.2972 5.2 18.2876 4.97647C19.0907 4.27059 19.779 3.37647 20.3335 2.35294Z"
                            className="fill-current text-sage"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-[40px] h-[40px] items-center rounded-full flex justify-center border-solid border-sage border">
                    <div className="w-[30px] h-[30px] flex items-center justify-center">
                      <a
                        href="https://www.facebook.com/your_facebook_username/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.6665 0C5.1665 0 0.666504 4.50803 0.666504 10.0602C0.666504 15.0803 4.3265 19.247 9.10649 20V12.9719H6.5665V10.0602H9.10649V7.84137C9.10649 5.32129 10.5965 3.93574 12.8865 3.93574C13.9765 3.93574 15.1165 4.12651 15.1165 4.12651V6.60643H13.8565C12.6165 6.60643 12.2265 7.37952 12.2265 8.17269V10.0602H15.0065L14.5565 12.9719H12.2265V20C14.5829 19.6264 16.7287 18.4192 18.2764 16.5964C19.8241 14.7737 20.6718 12.4555 20.6665 10.0602C20.6665 4.50803 16.1665 0 10.6665 0Z"
                            className="fill-current text-sage"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  </div>
                  <div className="mt-5 lower-footer items-center justify-between bg-black w-screen">

            <div className="text-white px-3 flex font-[Poppins] items-center justify-around h-12">
              <h3 className="text-sm">legal</h3>
              <h3 className="text-sm">Acceptable Use Policy</h3>
              <h3 className="text-sm">Privacy Policy</h3>
              <h3 className="text-sm">Terms of Service</h3>
            </div>
          </div>
        </div>
                  </div>

  )
}

export default FooterMobile
