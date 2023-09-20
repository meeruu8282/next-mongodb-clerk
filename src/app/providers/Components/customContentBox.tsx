"use client";

import Image from "next/image";
import React from "react";
import Modal from "../Components/popup";
import CarelyoButton from "./getStartedButton";
import CheckboxItem from "./checkboxItem";
import { useState } from "react";
import StyledBox from "./styleBox";

interface CustomContentBoxProps {
  title: string;
  monthlyCost: string;
  descriptionLines: string[];
  features: string[];
  buttonText: string;
}
type SelectRoleCardProps = {
  title: string;
  description: string;
};

const CustomContentBox: React.FC<CustomContentBoxProps> = ({
  title,
  monthlyCost,
  descriptionLines,
  features,
  buttonText,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-[391.33px] h-[463px]  border-[3px] rounded-[25px]    border-[#45AC60]   ">
      <div className=" w-[333.98px] h-[413.09px] mt-[27.61px] ml-[27.67px] item-center   ">
        <div className="w-[333.98px] flex justify-between h-[32px] p-2 ">
          <div className=" justify-between items-center w-[224px] h-[26px] text-[#45AC60] ">
            <p className="text-[-2%] leading-tight">{title}</p>
          </div>
          <div className=" ">
            <CheckboxItem
              CustomComponent={StyledBox}
              boxProps={{
                width: "32px",
                height: "32px",
              }}
            />
          </div>
        </div>

        <div className="flex ml-1 mt-3 text-[32px] w-[224px] h-[51px]">
          <h1 className="text-[-2%] leading-tight font-[Poppins] font-semibold">
            {monthlyCost}
          </h1>
        </div>
        <div className="ml-3 w-[198px] h-[44px] opacity-50 font-[Poppins] font-normal text-[14px]">
          {descriptionLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        <div className="text-[Poppins] font-normal text-[14px] mt-5 ml-2">
          {features.map((feature, idx) => (
            <div className="flex w-[333.98] h-[24px] gap-[8px] mt-5" key={idx}>
              <div>
     
              <svg
                      width="26"
                      height="26"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.5684 2.61011C19.9574 2.61011 22.2344 4.98811 22.2344 8.52611V16.6941C22.2344 20.2321 19.9574 22.6101 16.5674 22.6101H7.89937C4.51038 22.6101 2.23438 20.2321 2.23438 16.6941V8.52611C2.23438 4.98811 4.51038 2.61011 7.89937 2.61011H16.5684ZM16.5684 4.11011H7.89937C5.36937 4.11011 3.73438 5.84311 3.73438 8.52611V16.6941C3.73438 19.3771 5.36937 21.1101 7.89937 21.1101H16.5674C19.0984 21.1101 20.7344 19.3771 20.7344 16.6941V8.52611C20.7344 5.84311 19.0984 4.11011 16.5684 4.11011ZM16.3239 9.70711C16.6169 10.0001 16.6169 10.4741 16.3239 10.7671L11.5779 15.5131C11.4319 15.6601 11.2399 15.7331 11.0479 15.7331C10.8569 15.7331 10.6639 15.6601 10.5179 15.5131L8.14388 13.1401C7.85087 12.8471 7.85087 12.3731 8.14388 12.0801C8.43688 11.7871 8.91087 11.7871 9.20388 12.0801L11.0479 13.9221L15.2639 9.70711C15.5569 9.41411 16.0309 9.41411 16.3239 9.70711Z"
                        fill="#45AC60"
                      />
                    </svg>
              </div>
              <div className=" w-[331.98px] h-[24px] opacity-50">
                <p>{feature}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" mt-[80px]  justify-center items-center  ">
          <CarelyoButton
            buttonText={buttonText}
            size="large"
            color="primary"
            buttonSize="lb"
            onClick={() => setModalOpen(true)}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          ></Modal>
        </div>
      </div>
    </div>
  );
};

export default CustomContentBox;
