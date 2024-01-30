import Link from "next/link";
import React from "react";
interface CarelyoButtonProps {
  buttonText?: string;
  buttonSize?: "sb" | "mb" | "lb" | "vLB" | "jCb" | "gCb"
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
  buttonSize = "mb",
  linkMeTo
}) => {
  const baseClass = "carelyoButton ";
  const sizeClasses = {
    small: "text-[13px]",
    medium: "text-[16px]",
    large: "text-lg",
  };
  const buttonSizeClasses = {
    sb: "w-[12px] h-[12px]",
    mb: "w-[208px] h-[52px]",
    lb: "w-[333.98px] h-[50px]",
    vLB: " w-[181px] h-[72px]",
    jCb: "w-[174px] h-[60px]", // Join Carelyo Button
    gCb: "w-[168px] h-[60px]" // Get Carelyo button
  };

  const colorClasses = {
    primary: " text-white  bg-sage",
    secondary: "text-black bg-gray-300",
    third: "bg-opacity-20 bg-white ",
  };

  const ButtonContent = (

    <button
      onClick={onClick}
      className={`${baseClass} ${colorClasses[color]} ${sizeClasses[size]} ${buttonSizeClasses[buttonSize]} } ${className}`}
    >
      <div className="  rounden-full ">
        <div className="carelyoButtonText flex items-center justify-center w-full  ">
          {buttonText}
          <div className="ml-3">
            <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-white bg-opacity-[25%]">
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
