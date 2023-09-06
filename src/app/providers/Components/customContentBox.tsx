import React from "react";
import CarelyoButton from "./getStartedButton";
import CheckboxItem from "./checkboxItem";

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
  return (
    <div className="w-[391.33px] h-[463px] mt-[27.61px] ml-[29.23px] border-[3px] rounded-[25px] justify-between  border-[#45AC60]  ">
      <div className="  ">
        <div className="w-[333.98px] h-[249px] gap-[10px]  ">
          <div className="w-[333.98px] flex justify-between h-[32px] ">
            <div className="justify-between items-center w-[224px] h-[26px] text-[#45AC60] ">
              <p>{title}</p>
            </div>
            <div className="w-[32px] h-[32px] border-[2px] rounded-lg "></div>
          </div>

          <div className="flex justify-center text-[32px] w-[224px] h-[51px]">
            <h1 className="font-[Poppins] font-semibold">{monthlyCost}</h1>
          </div>
          <div className="bg-white w-[198px] h-[44px] opacity-50 font-[Poppins] font-normal text-[14px]">
            {descriptionLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div className="text-[Poppins] font-normal text-[14px] mt-2">
            {features.map((feature, idx) => (
              <div className="flex w-[333.98] h-[24px] gap-[8px]" key={idx}>
                <div className="w-[24px] h-[24px]">
                  <CheckboxItem />
                </div>
                <div className="w-[225px] h-[24px] opacity-50">
                  <p>{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[100px]">
          <CarelyoButton
            buttonText={buttonText}
            size="large"
            color="primary"
            buttonSize="lb"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomContentBox;
