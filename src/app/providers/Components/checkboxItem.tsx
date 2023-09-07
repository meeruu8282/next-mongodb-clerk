"use client";
import { useState } from "react";
type CheckboxItemProps = {
  size?: "small"|"medium" | "large";
  checkMark?: "checkSmall" | "checkMedium"| "checkLarge"    } 

const CheckboxItem: React.FC<CheckboxItemProps> = ( {size = "medium" , checkMark= "medium"}) => {
 
const [isChecked, setIsChecked] =useState<boolean>(false)
const [inputSize ,SetInputsize] = useState("")
const toggleCheckbox = () =>{

  setIsChecked(prevChecked => !prevChecked )
}

const getContainerSize  = () => {



  switch(inputSize) {
    case "small": 
    return "w-[24px] h-[24px]"
    case "medium": 
    return "w-4 h-4"
    case "large": 
    return "w-[32px] h-[32px]"
    case "checkSmall": 
    return "w-[24px] h-[24px]"
    case "medium": 
    return "w-4 h-4"
    case "large": 
    return "w-[32px] h-[32px]"
    default:
      return 'w-5 h-5';

  }
}
const getCheckmarkSize  = () => {



  switch(checkMark) {
  case "checkSmall": 
    return "w-[20px] h-[20px]"
    case "medium": 
    return "w-5 h-5"
    case "large": 
    return "w-[32px] h-[32px]"




    default:
      return 'w-5 h-5';

  }
}

  return (
    <div className="w-[333.98] h-[24px] ">
      <div className="flex">
        <div className={getContainerSize()  + " border-[2px] rounded-lg border-[#45AC60] text-[#45AC60] "}
        onClick={toggleCheckbox}
        
        >
          { isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={getCheckmarkSize()}
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckboxItem;
