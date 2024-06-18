'use client'
import { ReactNode, useState, useEffect } from "react";
import StyledBox from "./styleBox";
import {
  MdcnLicense,
  AccuntCircle,
  EmailIcon,
  HouseIcon,
} from "./svgComponent";
import Link from 'next/link'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ToggleableBox from "./ToggleableBoxProps";

export default function PlatformProvisers(props: {
    Adress: string
    city: string
    code: string
    state: string
    country: string
    currency: string
    website: string
    color: string
    logo: string
    telOrMobileNumber: string
    licens: string
    slogan: string
    title: string
    companyNo: string
    email: string
    providersName: string
}) {
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
  });

  // useEffect(() => {
  //   axios.get("/api/webhooks/clerk")
  //     .then((response) => {
  //       setUserData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });
  // }, []);

  return (
    <div className=" justify-center items-center">

<div className="background-greenFillText absolute z-[-500] flex justify-center items-center w-screen h-[554px] top-0 bg-sageOpacityHigh rounded-[5px]">
  <div className=" w-[921px] h-[108px]  justify-center flex  flex-col">
    <div className="w-[883px] h-[52px] flex justify-center ">
      <h1 className=" text-[40px] font-[Poppins] font-semibold ">
      Platform Details
      </h1>
    </div>
    {/* Add spacing here */}
    <div className="mt-4"></div>
    <div className=" w-[921px] h-[32px] opacity-50 flex justify-center items-center">
      <p className="flex justify-center items-center ">
      Please provide details that will be used to set up your platform

      </p>
    </div>
  </div>
</div>


        <div className=" flex justify-center items-center   ">
          <div className=" custom-shadow  bg-white relative z-10 mt-[300px] flex flex-col justify-center items-center  h-[900px] w-[1194px] rounded-[25px]">
            <div className="w-[1114px] h-[900px]  ">
            <div className=" justify-end  w-[1114px] h-[526px] mt-5 ">
  <div className="w-[135px] h-[32px] ">
    <h2 className=" font-normal font-[Poppins] text-[20px] ">
Platform Details    </h2>
  </div>
  {/* Add spacing here */}
  <div className="mt-4"></div>
  <div className="w-[1114px] h-[430px]  mb-0">
  <div className="flex w-[1114px] h-[84px]">
  {/* Full Name input field */}
  <div className="absolute w-[121px] h-[22px] font-semibold font-[Poppins] text-[16px]">
    {props.providersName}
  </div>

  <div className="flex justify-center items-center w-[551px] h-[84px]">
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <AccuntCircle />
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.firstName}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
  
  <div className="flex items-center w-[551px] h-[84px]">
  <div className="absolute w-[121px] h-[80px] font-semibold font-[Poppins] text-[16px]">
    {props.slogan}
  </div>
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <EmailIcon/>
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.email}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
 
</div>

<div className="flex w-[1114px] h-[84px]">
  <div className="absolute w-[121px] h-[22px] font-semibold font-[Poppins] text-[16px]">
{props.title}  </div>

  <div className="flex justify-center items-center w-[551px] h-[84px]">
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <AccuntCircle />
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder=""
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
  
  <div className="flex items-center w-[551px] h-[84px]">
    <div className="absolute w-[450px] h-[80px] font-semibold font-[Poppins] text-[16px]">
{props.companyNo}    </div>
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <EmailIcon/>
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder=""
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex w-[1114px] h-[84px]">
  <div className="absolute w-[180px] h-[22px] font-semibold font-[Poppins] text-[16px]">
    {props.telOrMobileNumber}
  </div>

  <div className="flex justify-center items-center w-[551px] h-[84px]">
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <HouseIcon />
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder=""
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center w-[551px] h-[84px]">
    <div className="absolute w-[121px] h-[80px] font-semibold font-[Poppins] text-[16px]">
{props.email}    </div>
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <EmailIcon/>
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder=""
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex w-[1114px] h-[84px]">
  {/* Full Name input field */}
  <div className="absolute w-[121px] h-[22px] font-semibold font-[Poppins] text-[16px]">
    {props.Adress}
  </div>

  <div className="flex justify-center items-center w-[551px] h-[84px]">
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <AccuntCircle />
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.firstName}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
  
  <div className="flex items-center w-[551px] h-[84px]">
  <div className="absolute w-[121px] h-[80px] font-semibold font-[Poppins] text-[16px]">
    {props.city}
  </div>
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <EmailIcon/>
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.email}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
 
</div>

<div className="flex w-[1114px] h-[84px]">
  {/* Full Name input field */}
  <div className="absolute w-[180px] h-[22px] font-semibold font-[Poppins] text-[16px]">
    {props.code}
  </div>

  <div className="flex justify-center items-center w-[551px] h-[84px]">
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <AccuntCircle />
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.firstName}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
  
  <div className="flex items-center w-[551px] h-[84px]">
  <div className="absolute w-[180px] h-[80px] font-semibold font-[Poppins] text-[16px]">
    {props.state}
  </div>
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <EmailIcon/>
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.email}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
 
</div>

<div className="flex w-[1114px] h-[84px]">
  {/* Full Name input field */}
  <div className="absolute w-[150px] h-[22px] font-semibold font-[Poppins] text-[16px]">
    {props.country}
  </div>

  <div className="flex justify-center items-center w-[551px] h-[84px]">
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <AccuntCircle />
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.firstName}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
  
  <div className="flex items-center w-[551px] h-[84px]">
  <div className="absolute w-[150px] h-[80px] font-semibold font-[Poppins] text-[16px]">
    {props.currency}
  </div>
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <EmailIcon/>
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.email}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>

  
 
</div>

<div className="flex w-[1114px] h-[84px]">
  {/* Full Name input field */}
  <div className="absolute w-[121px] h-[22px] font-semibold font-[Poppins] text-[16px]">
    {props.website}
  </div>

  <div className="flex justify-center items-center w-[551px] h-[84px]">
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <AccuntCircle />
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.firstName}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
  
  <div className="flex items-center w-[551px] h-[84px]">
  <div className="absolute w-[121px] h-[80px] font-semibold font-[Poppins] text-[16px]">
    {props.color}
  </div>
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <EmailIcon/>
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.email}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>

  
 
</div>

<div className="flex w-[1114px] h-[84px]">
  {/* Full Name input field */}
  <div className="absolute w-[121px] h-[22px] font-semibold font-[Poppins] text-[16px]">
    {props.logo}
  </div>

  <div className="flex justify-center items-center w-[551px] h-[84px]">
    <div className="w-[551px] h-[54px] flex justify-center items-center">
      <div className="w-[22px] h-[22px] flex justify-center items-center">
        <AccuntCircle />
      </div>
      <div className="w-[519px] h-[22px] flex justify-center items-center">
        <div className="w-[498px] h-[32px] flex items-center">
          <input
            type="text"
            placeholder={userData.firstName}
            className="w-[498px] h-[38px] border-[2px] rounded-[8px] pl-4 hover:border-green-500"
          />
        </div>
      </div>
    </div>
  </div>
  
 

  
 
</div>




<div className="flex w-[1114px] h-[24px] mt-[30px]"> {/* Adjusted mt-[100px] to mt-[120px] */}
<div className="flex pr-4">
    <ToggleableBox id="uniqueId" 
  isChecked={true} 
  onToggle={(id) => console.log("Toggled with ID:", id)}></ToggleableBox>
  </div>
  <div className="flex w-full h-[22px] font-[Poppins] font-normal text-[18px]">
    I have read and agree to Carelyo for Doctor Services
    <h4 className="flex ml-3 text-sage text-[18px] font-normal font-Poppins ">
      Terms of use and Privacy Policy.
    </h4>
  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[1114px] h-[70px] flex font-[Poppins] ">
            <Link href="/providers/hospitalData">

            <div className="flex justify-center items-center w-[549px] h-[54px] rounded-[8px] border-[1px] text-sage hover:bg-sage  hover:text-white ">
  <h1 className="w-[41px] h-[22px]  flex justify-center items-center">
    Back
  </h1>
</div>
</Link>
<div className="w-[10px]"></div> {/* Add this empty div for spacing */}
<Link href="/providers/doctorData">
  
    <div className="flex justify-center items-center w-[549px] h-[54px] rounded-[8px] border-[1px] text-sage  hover:text-white hover:bg-sage">
      <h1 className="w-[75px] h-[22px]  flex justify-center items-center">
        Continue
      </h1>
    </div>
  
</Link>
            </div>
            
          </div>
          
        </div>
        <div className="h-[80px]"></div> {/* Add this empty div for spacing */}

      </div>

  );
}
