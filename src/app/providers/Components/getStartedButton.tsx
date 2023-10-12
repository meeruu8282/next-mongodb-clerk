import Link from "next/link";
import React from "react";

type ButtonSize = "sb" | "mb" | "lb" | "vLB" | "jCb" | "gCb";
interface CarelyoButtonProps {
  
  buttonText?: string;
  buttonSize?: ButtonSize;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "third";
  className?: string;
  onClick?: () => void;
  linkMeTo? :string

}
const CarelyoButton: React.FC<CarelyoButtonProps> = ({
  onClick,
  buttonText,
  size = "medium",
  color = "primary",
  className = "",
  buttonSize = "lb",
  linkMeTo
}) => {
  const baseClass = "carelyoButton ";
  const sizeClasses = {
    small: "text-[13px]",
    medium: "text-[16px]",
    large: "text-lg",
  };
  const buttonSizeClasses = {
    sb: "w-[12px] h-[12px] ",
    mb: "w-[208px] h-[52px]",
    lb: "w-[333.98px] h-[50px]",
    vLB: " w-[181px] h-[72px]",
    jCb: "w-[174px] h-[60px]", // Join Carelyo Button
    gCb: "w-[168px] h-[60px]" // Get Carelyo button
  };

  const colorClasses = {
    primary: " text-[#FFFFFF]  bg-[#45AC60]",
    secondary: "text-black bg-gray-300",
    third: "bg-opacity-20 bg-[#FFFFFF] ",
  };

  const ButtonContent = (
  
    <button
      onClick={onClick}
      className={`${baseClass} ${colorClasses[color]} ${sizeClasses[size]} ${buttonSizeClasses[buttonSize]} } ${className}`}
    >
      <div className="  ">
        <div className="carelyoButtonText flex items-center justify-center   ">
          {buttonText}
          <div className="ml-3">
            <div className="rounded-[100px] flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
    if(linkMeTo){
      return <Link href={linkMeTo}>{ButtonContent}</Link>;

    }
    return ButtonContent;

  
};
export default CarelyoButton;
