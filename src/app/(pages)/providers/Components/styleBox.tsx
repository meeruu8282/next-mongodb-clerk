"use client";
import React from "react";
import { useState } from "react";
import { SvgCheckmarkWhiteBackgound } from "./svgComponent";
export interface BoxProps {
  width?: string;
  height?: string;
  svg?: React.ReactNode;
  customStyle?: React.CSSProperties;
  type?: "fixed" | "default";
  id?: string | number | null;
  selectedBox?: number | null;
}
interface FixedSVGProps {
  id?: string | number | null;
  selectedBox?: number | null;
}
const FixedSVG: React.FC<FixedSVGProps> = ({ id, selectedBox }) => {
  console.log("styleBox choosen selectedBox:", selectedBox);


return(
  <svg
  width="25"
  height="25"
  viewBox="0 0 25 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M16.5684 2.61011C19.9574 2.61011 22.2344 4.98811 22.2344 8.52611V16.6941C22.2344 20.2321 19.9574 22.6101 16.5674 22.6101H7.89937C4.51038 22.6101 2.23438 20.2321 2.23438 16.6941V8.52611C2.23438 4.98811 4.51038 2.61011 7.89937 2.61011H16.5684ZM16.5684 4.11011H7.89937C5.36937 4.11011 3.73438 5.84311 3.73438 8.52611V16.6941C3.73438 19.3771 5.36937 21.1101 7.89937 21.1101H16.5674C19.0984 21.1101 20.7344 19.3771 20.7344 16.6941V8.52611C20.7344 5.84311 19.0984 4.11011 16.5684 4.11011ZM16.3239 9.70711C16.6169 10.0001 16.6169 10.4741 16.3239 10.7671L11.5779 15.5131C11.4319 15.6601 11.2399 15.7331 11.0479 15.7331C10.8569 15.7331 10.6639 15.6601 10.5179 15.5131L8.14388 13.1401C7.85087 12.8471 7.85087 12.3731 8.14388 12.0801C8.43688 11.7871 8.91087 11.7871 9.20388 12.0801L11.0479 13.9221L15.2639 9.70711C15.5569 9.41411 16.0309 9.41411 16.3239 9.70711Z"
    className={`fill-current text-${id !== undefined && selectedBox !== undefined && id === selectedBox ? 'white' : 'sage'}`}
  />
</svg>
)
    }

const StyledBox: React.FC<BoxProps> = ({
  width = "32px",
  height = "32px",
  customStyle = {},
  type = "default",
  id,
  selectedBox,
}) => {


  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      style={{
        width,
        height,
        ...customStyle,
      }}
    >

      {isChecked && <SvgCheckmarkWhiteBackgound />}
      {type === "fixed" && <FixedSVG id={id} selectedBox={selectedBox} />}
      {/* Pass id and selectedBox to FixedSVG */}
    </div>
  );
};

export default StyledBox;
