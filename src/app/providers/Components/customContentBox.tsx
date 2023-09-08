
"use client";
import React from "react";
import Modal from "../Components/popup"
import CarelyoButton from "./getStartedButton";
import CheckboxItem from './checkboxItem';
import { useState } from 'react';

interface CustomContentBoxProps {
  title: string;
  monthlyCost: string;
  descriptionLines: string[];
  features: string[];
  buttonText: string;
}

const CustomContentBox: React.FC<CustomContentBoxProps> = ({
  title,
  monthlyCost,
  descriptionLines,
  features,
  buttonText,
}) => {

  const [isModalOpen, setModalOpen] = useState(false);


  return (
    <div className="w-[391.33px] h-[463px]  border-[3px] rounded-[25px] justify-between   border-[#45AC60]   ">
      <div className="  ">
        <div className="w-[333.98px] h-[249px] gap-[10px]  ">
          <div className="w-[333.98px] flex justify-between h-[32px] p-2 ">
            <div className=" justify-between items-center w-[224px] h-[26px] text-[#45AC60] ">
              <p className="text-[-2%] leading-tight">{title}</p>
            </div>
            <div className=" "> <CheckboxItem size="large" checkMark="checkLarge" /> </div>
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
                <div className="w-[24px] h-[24px]">
                  <CheckboxItem checkMark="checkSmall" id="1" />
                </div>
                <div className=" w-[331.98px] h-[24px] opacity-50">
                  <p >{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[100px] ml-3 justify-center items-center">
          <CarelyoButton
            buttonText={buttonText}
            size="large"
            color="primary"
            buttonSize="lb"
           onClick={()=> setModalOpen(true)}



          />

          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <h1>Detta är en modal!</h1>
            <p>Du kan stänga mig genom att klicka på "Stäng" knappen nedan.</p>
            <button onClick={() => setModalOpen(false)}>Stäng</button>
          </Modal>

        </div>
      </div>
    </div>

  );
};

export default CustomContentBox;
