"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../Components/popup";
import CarelyoButton from "./getStartedButton";
import CheckboxItem, { CheckboxItemProps } from "./checkboxItem";
import * as React from "react";

import { useState, useEffect } from "react";
import StyledBox from "./styleBox";
import ToggleableBox from "./ToggleableBoxProps";
import { faL } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { link } from "fs";

interface CustomContentBoxProps {
  title: string;
  monthlyCost: string;
  descriptionLines: string[];
  features: string[];
  buttonText: string;
  selectedBox: number | null; // Lägg till selectedBox som en prop
  setSelectedBox: (id: number | null) => void;
}

const CustomContentBox: React.FC<CheckboxItemProps & CustomContentBoxProps> = ({
  id,
  title,
  monthlyCost,
  descriptionLines,
  features,
  buttonText,
  selectedBox, // Ta emot selectedBox som en prop
  setSelectedBox, // Ta emot setSelectedBox som en prop
}) => {
  const [isModalOpen, setModalOpen] = useState(false);


  
 





  const handleLinkToPlanSignUp = () => {
    alert("här ska länken vara ");
  };

  console.log("1a log id ", id);
  return (
    <div
      className={`  max-w-[391.33px] flex justify-center items-center h-[463px] border-[3px] rounded-[25px] border-[#45AC60] ${
        id === selectedBox ? "bg-[#45AC60]" : ""
      }`}
    >
      <div className=" w-[333.98px] h-[413.09px] mt-[27.61px] ml-[27.67px]    ">
        <div className="w-[333.98px] flex justify-between h-[32px] p-2  ">
          <div
            className={`justify-between items-center w-[224px] h-[26px] text-[#45AC60] ${
              id === selectedBox ? "text-white" : ""
            }`}
          >
            <div className="text-[-2%] leading-tight"> {title} </div>
          </div>

          <ToggleableBox
            id={id}
            isChecked={id === selectedBox} // Kolla om rutan har samma id som selectedBox
            onToggle={() => {
              setSelectedBox(id === selectedBox ? null : id); // Om samma ruta klickas igen, avmarkera den genom att sätta selectedBox till null, annars markera den genom att sätta selectedBox till id
            }}
          />
        </div>

        <div className="flex ml-1 mt-3 text-[32px] w-[224px] h-[51px]">
          <h1
            className={`leading-tight font-[Poppins] font-semibold ${
              id === selectedBox ? "text-[#FFFFFF] " : ""
            }`}
          >
            {monthlyCost}
          </h1>
        </div>
        <div
          className={`ml-3 w-[198px] h-[44px] opacity-50 font-[Poppins] font-normal text-[14px] ${
            id === selectedBox ? "text-[#FFFFFF] opacity-[100]" : ""
          }`}
        >
          {descriptionLines.map((line, idx) => (
            <div key={idx}> {line}</div>
          ))}
        </div>
        <div
          className={`text-[Poppins] font-normal text-[14px] mt-5 ml-2 ${
            id === selectedBox ? "text-white  opacity-[100]  " : ""
          }`}
        >
          {features.map((feature, idx) => (
            <div className="flex w-[333.98] h-[24px] gap-[8px] mt-5" key={idx}>
              <div>
                <StyledBox
                  type="fixed"
                  width="24px"
                  height="24px"
                  id={id}
                  selectedBox={selectedBox}
                />
              </div>

              <div
                className={`w-[331.98px] h-[24px] opacity-50${
                  id === selectedBox ? "text-[#FFFFFF] opacity-[100]" : ""
                }`}
              >
                <div> {feature} </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex mt-[80px] justify-center items-center rounded-[35px]  border-[white] mr-4 z-10">
          <CarelyoButton
         
            buttonText={buttonText}
            size="large"
            color="primary"
            buttonSize="lb"
            onClick={() => {
              if (selectedBox === null) {
                setModalOpen(true);
              } else {
                <Link href="/providers/auth/signUp"></Link>;
              }
            }}
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