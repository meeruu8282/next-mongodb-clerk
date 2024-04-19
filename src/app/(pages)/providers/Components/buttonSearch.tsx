import React from "react";
import { Searchicon } from "../../patients/components/svgComponent";

interface buttonSearchProps {
  className?: string;
  moduleCss?: string;
  textMdHide?: boolean;
  text?: string;
  onClick?: () => void;
}

// <ButtonSearch />
const ButtonSearch: React.FC<buttonSearchProps> = ({
  className = "ml-4 px-8 py-1",
  moduleCss,
  text = "Search",
  textMdHide = false,
  onClick
}) => {
  return (

    <button
    className={`${moduleCss} ${className} flex justify-center items-center bg-sage rounded-[25px]
      transition-colors duration-300 hover:bg-[rgba(59,199,86,1)]
      shadow-[0_20px_50px_-12px_rgba(34,125,44,0.3)]`}
    onClick={onClick}
    >
      <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center
      bg-white bg-opacity-[25%] shrink-0">
        <Searchicon width="14" height="14" color="white" />
      </div>
      <div className={`flex items-center justify-center w-full mx-2 text-white font-semibold ${textMdHide && 'hidden md:block'}`}>
        {text}
      </div>
    </button>
  );
};

export default ButtonSearch;
